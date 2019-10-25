
import pandas as pd
import collections
from shapely.geometry import Polygon
import json
import os
import numpy as np
import folium
import matplotlib.pyplot as plt
import networkx as nx
import sys
import time
import math
from networkx.algorithms import community
from networkx import edge_betweenness_centrality as betweenness

plt.rcParams.update({'figure.max_open_warning': 0})

def createDataframes(data_loc):
    script_dir = os.getcwd()
    try:
        df = pd.read_csv(os.path.normcase(os.path.join(script_dir, '../datasets/' + data_loc + '/data.csv')))
    except:
        df = pd.DataFrame(columns=['latitude', 'longitude', 'load', 'timestamp', 'weekday', 'unixTime','date', 'grid_id'])
    return df

data_loc = sys.argv[1]

df = createDataframes(data_loc)

zoom = 11

with open(os.path.normcase(os.path.join(os.getcwd(), '../datasets/' + data_loc + '/shape.json'))) as f:
    routes = json.load(f)

shapes = {}
centroids = {}

for i in range(len(routes['features'])):
    movement_id = int(routes['features'][i]['properties']['MOVEMENT_ID'])
    coordinates = routes['features'][i]['geometry']['coordinates'][0]
    if(len(coordinates) <= 3):
        coordinates = routes['features'][i]['geometry']['coordinates'][0][0]
    shapes[movement_id] = Polygon(coordinates)
    coords = [shapes[movement_id].centroid.coords[0][1], shapes[movement_id].centroid.coords[0][0]]
    centroids[movement_id] = coords
    
mapCenter = [shapes[1].centroid.coords[0][1], shapes[1].centroid.coords[0][0]]

adj_matrix = pd.DataFrame(data=0, columns=shapes.keys(), index=shapes.keys())

print('Number of Areas:')
print(len(shapes))
for i in range(1, len(shapes)+1):
    print(i)
    for j in range(i+1, len(shapes)+1):
        shape1 = shapes[i]
        shape2 = shapes[j]
        if(shape1.touches(shape2)):
            adj_matrix.iloc[i-1, j-1] = 1
            adj_matrix.iloc[j-1, i-1] = 1
            
G = nx.from_numpy_matrix(adj_matrix.values)

boundaries = os.path.normcase(os.path.join(os.getcwd(), '../datasets/' + data_loc + '/shape.json'))

mapBoundaries = folium.Map(mapCenter, zoom_start=zoom)
folium.GeoJson(boundaries, name="Boundaries").add_to(mapBoundaries)
folium.LayerControl().add_to(mapBoundaries)

for i in centroids.values():
    folium.Circle(
            radius=250,
            location=[i[0], i[1]],
            color='red',
            fill=True,
            fill_opacity=0.4,
        ).add_to(mapBoundaries)
    
for j in G.edges():
    folium.PolyLine(
        locations=[centroids[(j[0] + 1)], centroids[(j[1] + 1)]], 
        color="black", 
        weight=5, 
        opacity=.5
    ).add_to(mapBoundaries)
    

mapBoundaries.save('../client/public/results/boundaries.html')

adj_area = {}
for i in range(1, len(shapes)+1):
    adj_area[i] = []
    for j in range(1, len(shapes)+1):
        if(i != j ):
            shape1 = shapes[i]
            shape2 = shapes[j]
            if(shape1.touches(shape2)):
                adj_area[i].append(j)
                
adj_0 = pd.DataFrame(data=0, index=adj_area.keys(), columns=adj_area.keys())
adj_6 = pd.DataFrame(data=0, index=adj_area.keys(), columns=adj_area.keys())
adj_12 = pd.DataFrame(data=0, index=adj_area.keys(), columns=adj_area.keys())
adj_18 = pd.DataFrame(data=0, index=adj_area.keys(), columns=adj_area.keys())

dfs = [adj_0, adj_6, adj_12, adj_18]

for i,j in adj_area.items():
    print(i)
    loc_df1 = i-1
    for x in j:
        loc_df2 = x-1
        temp = df[(df['sourceid'] == i) & (df['dstid'] == x)]
        hourRem = temp['mean_travel_time'].min()
        for myTime in range(4):
            try:
                val = temp[temp['hod'] == myTime]['mean_travel_time'].values[0]
                val = val - hourRem + 1
            except:
                val = 0
            dfs[myTime].iloc[loc_df1, loc_df2] = val



def most_central_edge(G):
    centrality = betweenness(G, weight='weight')
    return max(centrality, key=centrality.get)

for value in range(4):
    value = value
    print(value)

    G = nx.from_pandas_adjacency(dfs[value])

    
    #PRINT DEGREE DISTRIBUTION============================================
    
    if(value != -1):
        degree_sequence = sorted([d for n, d in G.degree()], reverse=True)  # degree sequence
        degreeCount = collections.Counter(degree_sequence)
        deg, cnt = zip(*degreeCount.items())

        fig, ax = plt.subplots(figsize=(15,10))
        plt.bar(deg, cnt, width=0.80, color='b')

        plt.title("Degree Histogram")
        plt.ylabel("Count")
        plt.xlabel("Degree")
        ax.set_xticks([d + 0.4 for d in deg])
        ax.set_xticklabels(deg)

        plt.axes([0.4, 0.4, 0.5, 0.5])
        Gcc = sorted(nx.connected_component_subgraphs(G), key=len, reverse=True)[0]
        pos = nx.spring_layout(G)
        plt.axis('off')
        nx.draw_networkx_nodes(G, pos, node_size=20)
        nx.draw_networkx_edges(G, pos, alpha=0.4)

        plt.savefig('../client/public/results/degree.png')

        print('Degree distribution saved successfully.')
        
        #================================================================

    #Page Rank============================================
        
    pagerank = nx.pagerank(G, weight='weight')

    df_pagerank = pd.DataFrame(pagerank, index=[0])
    df_pagerank = df_pagerank.transpose()
    df_pagerank.rename(columns={0 : 'pagerank'}, inplace=True)


    print('Page Rank created successfully.')
    #================================================================
    
    #Betweenneess ============================================

    betweenneess = nx.betweenness_centrality(G, weight='weight')

    df_betweenneess = pd.DataFrame(betweenneess, index=[0])
    df_betweenneess = df_betweenneess.transpose()
    df_betweenneess.rename(columns={0 : 'betweenneess'}, inplace=True)


    print('Betweenneess created successfully.')
    #================================================================

    #closeness ============================================

    g_distance_dict = {(e1, e2): 1 / weight for e1, e2, weight in G.edges(data='weight')}
    nx.set_edge_attributes(G, g_distance_dict, 'distance')

    closeness = nx.closeness_centrality(G, distance='distance')

    df_centrality = pd.DataFrame(closeness, index=[0])
    df_centrality = df_centrality.transpose()
    df_centrality.rename(columns={0 : 'closeness'}, inplace=True)

    print('Centrality Closeness created successfully.')    
    #================================================================

    #Eigenvector ============================================
    
    try:
        eigenvector = nx.eigenvector_centrality(G, weight='weight')

        df_eigenvector = pd.DataFrame(eigenvector, index=[0])
        df_eigenvector = df_eigenvector.transpose()
        df_eigenvector.rename(columns={0 : 'eigenvector'}, inplace=True)
    except:
        df_eigenvector = pd.DataFrame()
        print('ERROR - EIGENVECTOR:' + str(value))
    print('Eigenvector Centrality created successfully.')    
    #================================================================
    
    
    #Hubs / Authority ============================================
    
    try:
        hubs,authority=nx.hits(G, max_iter=1500)

        df_hubs = pd.DataFrame(hubs, index=[0])
        df_hubs = df_hubs.transpose()
        df_hubs.rename(columns={0 : 'hubs'}, inplace=True)

        df_authority = pd.DataFrame(authority, index=[0])
        df_authority = df_authority.transpose()
        df_authority.rename(columns={0 : 'authority'}, inplace=True)
    except:
        df_hubs = pd.DataFrame()
        df_authority = pd.DataFrame()
        print('ERROR - HUBS/Authority:' + str(value))
        
    print('Hubs and Authority created successfully.')
    #================================================================
    
    # Communities ============================================
    if(len(adj_area) <= 250):        
        try:
            comp = community.girvan_newman(G, most_valuable_edge=most_central_edge)
            communities = tuple(sorted(c) for c in next(comp))

            df_community = pd.DataFrame(data=0, columns=['communityId'], index=[x+1 for x in range(len(shapes))])

            a = 0
            for group in communities:
                a = a + 1
                for area in group:
                    df_community.loc[area, 'communityId'] = a
        except:
            df_community = pd.DataFrame()
            print('ERROR - COMMUNITIES:' + str(value))
    else:
        try:
            comp = community.girvan_newman(G)
            communities = tuple(sorted(c) for c in next(comp))
            
            df_community = pd.DataFrame(data=0, columns=['communityId'], index=[x+1 for x in range(len(shapes))])
            
            a = 0
            for group in communities:
                a = a + 1
                for area in group:
                    df_community.loc[area, 'communityId'] = a
        except:
            df_community = pd.DataFrame()
            print('ERROR - COMMUNITIES:' + str(value))            

    print('Communities created successfully.')
    #================================================================

    df_result = pd.concat([df_pagerank, df_betweenneess, df_centrality, df_hubs, df_authority, df_community, df_eigenvector], axis=1, sort=False)
    df_result['index'] = df_result.index
    df_result['index'] = df_result['index'].astype(str)

    print('Done.')
    
    
    # PRINT PAGERANK
    
    pagerankMap = folium.Map(mapCenter, zoom_start=zoom, tiles="cartodbpositron")
    betweenneessMap = folium.Map(mapCenter, zoom_start=zoom, tiles="cartodbpositron")
    centralityMap = folium.Map(mapCenter, zoom_start=zoom, tiles="cartodbpositron")
    hubMap = folium.Map(mapCenter, zoom_start=zoom, tiles="cartodbpositron")
    authorityMap = folium.Map(mapCenter, zoom_start=zoom, tiles="cartodbpositron")
    eigenvectorMap = folium.Map(mapCenter, zoom_start=zoom, tiles="cartodbpositron")
    communityMap = folium.Map(mapCenter, zoom_start=zoom, tiles="cartodbpositron")

    if 'pagerank' in df_result.columns:
        folium.Choropleth(
            geo_data=boundaries,
            name='choropleth',
            data=df_result,
            columns=['index', 'pagerank'],
            key_on='feature.properties.MOVEMENT_ID',
            fill_color='BuPu',
            fill_opacity=0.9,
            line_opacity=0.2,
            nan_fill_color='red',
            nan_fill_opacity=0,
            legend_name='Page Rank ('+str(value)+'h)'
        ).add_to(pagerankMap)
        pagerankMap.save('../client/public/results/pagerank' + str(value) + '.html')
        
#        driver.get('results/'+city+'/pagerank_' + str(value) + '.html')
#        time.sleep(5)
        # You may need to add time.sleep(seconds) here
#        driver.save_screenshot('results/'+city+'/pagerank_' +  str(value) + '.png')


    if 'betweenneess' in df_result.columns:
        folium.Choropleth(
            geo_data=boundaries,
            name='choropleth',
            data=df_result,
            columns=['index', 'betweenneess'],
            key_on='feature.properties.MOVEMENT_ID',
            fill_color='BuPu',
            fill_opacity=0.9,
            line_opacity=0.2,
            nan_fill_color='red',
            nan_fill_opacity=0,
            legend_name='Betweenneess ('+str(value)+'h)'
        ).add_to(betweenneessMap)    
        betweenneessMap.save('../client/public/results/betweenneess' + str(value) + '.html')

#        driver.get('results/'+city+'/betweenneess_' + str(value) + '.html')
#        time.sleep(5)
#        driver.save_screenshot('results/'+city+'/betweenneess_' +  str(value) + '.png')        
        
    if 'closeness' in df_result.columns:
        folium.Choropleth(
            geo_data=boundaries,
            name='choropleth',
            data=df_result,
            columns=['index', 'closeness'],
            key_on='feature.properties.MOVEMENT_ID',
            fill_color='BuPu',
            fill_opacity=0.9,
            line_opacity=0.2,
            nan_fill_color='red',
            nan_fill_opacity=0,
            legend_name='Closeness Centrality ('+str(value)+'h)'
        ).add_to(centralityMap)
        centralityMap.save('../client/public/results/closeness' + str(value) + '.html')

#        driver.get('results/'+city+'/closeness_' + str(value) + '.html')
#        time.sleep(5)
#        driver.save_screenshot('results/'+city+'/closeness_' +  str(value) + '.png')
        
        
    if 'hubs' in df_result.columns:
        folium.Choropleth(
            geo_data=boundaries,
            name='choropleth',
            data=df_result,
            columns=['index', 'hubs'],
            key_on='feature.properties.MOVEMENT_ID',
            fill_color='BuPu',
            fill_opacity=0.9,
            line_opacity=0.2,
            nan_fill_color='red',
            nan_fill_opacity=0,
            legend_name='Hubs ('+str(value)+'h)'
        ).add_to(hubMap)    
        hubMap.save('../client/public/results/hubs' + str(value) + '.html')

#        driver.get('results/'+city+'/hubs_' + str(value) + '.html')
#        time.sleep(5)
#        driver.save_screenshot('results/'+city+'/hubs_' +  str(value) + '.png')

    if 'authority' in df_result.columns:
        folium.Choropleth(
            geo_data=boundaries,
            name='choropleth',
            data=df_result,
            columns=['index', 'authority'],
            key_on='feature.properties.MOVEMENT_ID',
            fill_color='BuPu',
            fill_opacity=0.9,
            line_opacity=0.2,
            nan_fill_color='red',
            nan_fill_opacity=0,
            legend_name='Authorities ('+str(value)+'h)'
        ).add_to(authorityMap)    
        authorityMap.save('../client/public/results/authority' + str(value) + '.html')

#        driver.get('results/'+city+'/authority_' + str(value) + '.html')
#        time.sleep(5)
#        driver.save_screenshot('results/'+city+'/authority_' +  str(value) + '.png')
        
    if 'eigenvector' in df_result.columns:
        folium.Choropleth(
            geo_data=boundaries,
            name='choropleth',
            data=df_result,
            columns=['index', 'eigenvector'],
            key_on='feature.properties.MOVEMENT_ID',
            fill_color='BuPu',
            fill_opacity=0.9,
            line_opacity=0.2,
            nan_fill_color='red',
            nan_fill_opacity=0,
            legend_name='Authorities ('+str(value)+'h)'
        ).add_to(eigenvectorMap)    
        eigenvectorMap.save('../client/public/results/eigenvector' + str(value) + '.html')

#        driver.get('results/'+city+'/eigenvector_' + str(value) + '.html')
#        time.sleep(5)
#        driver.save_screenshot('results/'+city+'/eigenvector_' +  str(value) + '.png')
        
    if 'communityId' in df_result.columns:
        folium.Choropleth(
            geo_data=boundaries,
            name='choropleth',
            data=df_result,
            columns=['index', 'communityId'],
            key_on='feature.properties.MOVEMENT_ID',
            fill_color='BuPu',
            fill_opacity=0.9,
            line_opacity=0.2,
            nan_fill_color='red',
            nan_fill_opacity=0,
            legend_name='Authorities ('+str(value)+'h)'
        ).add_to(communityMap)    
        communityMap.save('../client/public/results/community' + str(value) + '.html')

#        driver.get('results/'+city+'/community_' + str(value) + '.html')
#        time.sleep(5)
#        driver.save_screenshot('results/'+city+'/community_' +  str(value) + '.png')

