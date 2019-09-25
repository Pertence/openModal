import pandas as pd
import numpy as np
import math
from geopy.distance import great_circle
import plotly.graph_objs as go
import plotly.plotly as py
from plotly.offline import download_plotlyjs, plot
from plotly import tools
import random
import os
import json
import networkx as nx
import sys
import gc
sys.path.insert(0,'folium')
import folium.plugins
from folium.features import *
from collections import Counter
from folium import plugins
import folium

def createDataframes(data_loc):
    script_dir = os.getcwd()
    try:
        df = pd.read_csv(os.path.normcase(os.path.join(script_dir, '../datasets/' + data_loc + '/mobile.csv')))
    except:
        df = pd.DataFrame(columns=['latitude', 'longitude', 'load', 'timestamp', 'weekday', 'unixTime','date', 'grid_id'])
    return df


data_loc = sys.argv[1]
numClusters = int(sys.argv[2])
unitArea = int(sys.argv[3])
minutes = int(sys.argv[4])
startLat = float(sys.argv[5])
startLon = float(sys.argv[6])
endLat = float(sys.argv[7])
endLon = float(sys.argv[8])

startPosition = [startLat, endLat]
endPosition = [startLon, endLon]

mobile = createDataframes(data_loc)

df = createDataframes(data_loc)


#df = pd.read_csv('dataset.csv')

# Time Variation in Minutes
#minutes = 60

#Unit Area in m
#unitArea = 300

# Start of the service (hour + minutes)
start = 0 * 3600 + 0 * 60

# End of the service (hour + minutes)
end = 23 * 3600 + 59 * 60

# Coordinates of left-bottom Boundary
#startPosition = [-19.940477, -43.960304]

# Coordinates of the upper-top boundary area
#endPosition = [-19.911063, -43.917860]


data = [ go.Bar(x=df['user'].value_counts().value_counts().index, y=df['user'].value_counts().value_counts().values) ]

layout = go.Layout(
    font=dict(size=18, color='black'),
    xaxis=dict(
        title='Unique User ID',
    ),
    yaxis=dict(
        title='Usage/Activation',
    )
)

fig = go.Figure(data=data, layout=layout)

plot(fig, filename='../client/public/results/usage.html', auto_open=False)
#plot(fig, filename=os.path.normcase(os.path.join(os.getcwd(), 'data/usage.html')), auto_open=False)



df = df[['latitude', 'longitude', 'load', 'timestamp', 'weekday', 'unixTime', 'date']]

# Filter by Latitude
df = df[df['latitude'] >= startPosition[0]]
df = df[df['latitude'] <= endPosition[0]]

df = df[df['longitude'] >= startPosition[1]]
df = df[df['longitude'] <= endPosition[1]]



grid = pd.DataFrame([], columns=['unitArea', 'startLat', 'startLon', 'endLat', 'endLon'])

distance = unitArea * 0.00001
cellId = 0

for x in np.arange(startPosition[0], endPosition[0], distance):
    for y in np.arange(startPosition[1], endPosition[1], distance):
        grid.loc[len(grid)] = [int(cellId), x, y, x+distance, y+distance]
        cellId = cellId + 1



for index, row in grid.iterrows():
    df.loc[(df['latitude'] > row['startLat']) &
           (df['latitude'] <= row['endLat']) &
           (df['longitude'] > row['startLon']) & 
           (df['longitude'] <= row['endLon']),
           'grid_id'
          ] = row['unitArea']
    
df.dropna(inplace=True)


# In[19]:

activeCell = df['grid_id'].unique()

signature = {}
signatureMax = {}
signatureMin = {}

for cell in activeCell:
    signature[cell] = []
    signatureMax[cell] = []
    signatureMin[cell] = []


# In[20]:

filterData = df[['unixTime', 'weekday', 'date', 'grid_id', 'load']]
for interval in range(start, end, (minutes * 60)):
    filterInterval = filterData[(filterData['unixTime'] >= interval) & (filterData['unixTime'] < (interval + (minutes * 60)))]
    if(len(filterInterval) > 0):
        for day in range(5):
            filterDay = filterInterval[filterInterval['weekday'] == day]
            if(len(filterDay) > 0):
                for cell in signature.keys():
                    filterCell = filterDay[filterDay['grid_id'] == cell]
                    median = filterCell.groupby('date').agg('sum')['load'].median()
                    maximum = filterCell.groupby('date').agg('sum')['load'].max()
                    minimum = filterCell.groupby('date').agg('sum')['load'].min()
                    
                    if(math.isnan(median)):
                        maximum = 0
                        median = 0
                        minimum = 0
                    signature[cell].append(median)
                    signatureMax[cell].append(maximum)
                    signatureMin[cell].append(minimum)


# In[21]:

for unitCell in signature.keys():    
    mean = np.mean(signature[unitCell])
    
    for index in range(len(signature[unitCell])):
        signature[unitCell][index] = signature[unitCell][index] / mean


# In[22]:

cells = signature.keys()
num = 0

def calculatePearson(cell1, cell2):
    meanCell1 = np.mean(cell1)
    meanCell2 = np.mean(cell2)
    
    equation1 = 0
    equation2 = 0
    equation3 = 0
    
    for idx in range(len(cell1)):
        funcCell1 = cell1[idx] - meanCell1
        funcCell2 = cell2[idx] - meanCell2
        
        equation1 = equation1 + ( funcCell1 * funcCell2 )
        equation2 = equation2 + math.pow( funcCell1 , 2 )
        equation3 = equation3 + math.pow( funcCell2 , 2 )
    return ( equation1 / (math.sqrt(equation2) * math.sqrt(equation3)) )

corr = []

for cellName in cells:
    print(num)
    uCorr = []
    num = num + 1
    for cellName2 in cells:
        uCorr.append(calculatePearson(signature[cellName] , signature[cellName2]))
    corr.append(uCorr)


# In[23]:

pairwise = pd.DataFrame(data=corr, index=signature.keys(), columns=signature.keys())


# In[24]:

from sklearn.cluster import AgglomerativeClustering
from sklearn import metrics

cluster = AgglomerativeClustering(n_clusters=numClusters, affinity='euclidean', linkage='ward')  
clusterers = cluster.fit(pairwise.values)  

sil_score = metrics.silhouette_score(pairwise.values, clusterers.labels_, metric='euclidean')


# In[25]:

cells = pairwise.index

for idx in range(len(cells)):
    grid.loc[ grid['unitArea'] == cells[idx], 'cluster'] = clusterers.labels_[idx]


# In[26]:

grid.dropna(inplace=True)


# In[27]:

myColors = ['black', 'red', 'green', 'blue', 'yellow', 'brown,', 'purple', 'pink', 'white']

clusterMap = folium.Map([-19.92364, -43.94951],  zoom_start=13)

for index, cell in grid.iterrows():
    startLat = cell['startLat']
    startLon = cell['startLon']
    endLat = cell['endLat']
    endLon = cell['endLon']
    idx = cell['cluster']
    folium.Rectangle([[startLat, startLon], [endLat, endLon]], popup=str(index) ,color=myColors[int(cell['cluster'])], fill=True).add_to(clusterMap)

clusterMap.save('../client/public/results/cluster.html')


# In[35]:

signatureData = {}
for clusterId in grid['cluster'].unique():
    signatureData[clusterId] = []
    for idx, row in grid[grid['cluster'] == clusterId].iterrows():
        signatureData[clusterId].append(signature[idx])


# In[61]:

myPlotData = []
for key, value in signatureData.items():
    layout = go.Layout(
    title=dict(
        text='Cluster Signature Plot',
    ),
    font=dict(size=22, color='black'),
    xaxis=dict(
        title='Timestamp',
        tickmode='linear',
        ticks='outside',
        tick0=0,
        dtick=3,
        tickangle=90,
        ticklen=8,
        tickwidth=4,
        tickcolor='#000'
    ),
    yaxis=dict(
        title='Mean Value',
        tickmode='linear',
        ticks='outside',
        tick0=0,
        range=[0,3.5],
        dtick=0.25,
        ticklen=8,
        tickwidth=4,
        tickcolor='#000'
    )
    )
    
    trace = go.Scatter(
        y = np.mean(value, axis=0),
        name= 'Cluster ' + str(key),
        mode = 'lines+markers',
    line=dict(
        color='rgb( '+ str(random.randint(0,255)) +', '+ str(random.randint(0,255)) +', ' + str(random.randint(0,255)) +')',
        )
    )
    myPlotData.append(trace)
    
fig = go.Figure(data=myPlotData, layout=layout)
#plot(fig, filename=os.path.normcase(os.path.join(os.getcwd(), 'data/signature.html')), auto_open=False)

plot(fig, filename='../client/public/results/signature.html', auto_open=False)
