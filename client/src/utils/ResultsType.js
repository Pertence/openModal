import heatmap from '../assets/results/heatmap.png';
import report from '../assets/results/report.png';
import network from '../assets/results/network.png';
import location from '../assets/results/location.png';
import cluster from '../assets/results/cluster.png';
import error from '../assets/results/error.png';
import signature from '../assets/funcs/networkLoad.png';
import uberResult from '../assets/results/UberResult.png';


const resultType = [
    {
        name: 'Transport Location',
        id: 'location.html',
        cover: location,
    },
    {
        name: 'Heatmap',
        id: 'heatmap.html',
        cover: heatmap,
    },
    {
        name: 'Report',
        id: 'report.txt',
        cover: report,
    },
    {
        name: 'Clusters',
        id: 'cluster.html',
        cover: cluster,
    },
    {
        name: 'Centroid',
        id: 'centroid.html',
        cover: location,
    },
    {
        name: 'Usage',
        id: 'usage.html',
        cover: location,
    },
    {
        name: 'Network',
        id: 'network.html',
        cover: network,
    },
    {
        name: 'Signature',
        id: 'signature.html',
        cover: signature,
    },
    {
        name: 'Error',
        id: 'error.txt',
        cover: error
    },
    {
        name: 'Boundaries',
        id: 'boundaries.html',
        cover: uberResult
    },
    {
        name: 'Degree Distribution',
        id: 'degree.png',
        cover: location
    },
    {
        name: 'Boundaries',
        id: 'boundaries.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (0h)',
        id: 'pagerank0.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (1h)',
        id: 'pagerank1.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (2h)',
        id: 'pagerank2.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (3h)',
        id: 'pagerank3.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (4h)',
        id: 'pagerank4.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (5h)',
        id: 'pagerank5.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (6h)',
        id: 'pagerank6.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (7h)',
        id: 'pagerank7.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (8h)',
        id: 'pagerank8.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (9h)',
        id: 'pagerank9.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (10h)',
        id: 'pagerank10.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (11h)',
        id: 'pagerank11.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (12h)',
        id: 'pagerank12.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (13h)',
        id: 'pagerank13.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (14h)',
        id: 'pagerank14.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (15h)',
        id: 'pagerank15.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (16h)',
        id: 'pagerank16.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (17h)',
        id: 'pagerank17.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (18h)',
        id: 'pagerank18.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (19h)',
        id: 'pagerank19.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (20h)',
        id: 'pagerank20.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (21h)',
        id: 'pagerank21.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (22h)',
        id: 'pagerank22.html',
        cover: uberResult
    },
    {
        name: 'Page Rank (23h)',
        id: 'pagerank23.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (0h)',
        id: 'betweenneess0.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (1h)',
        id: 'betweenneess1.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (2h)',
        id: 'betweenneess2.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (3h)',
        id: 'betweenneess3.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (4h)',
        id: 'betweenneess4.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (5h)',
        id: 'betweenneess5.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (6h)',
        id: 'betweenneess6.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (7h)',
        id: 'betweenneess7.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (8h)',
        id: 'betweenneess8.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (9h)',
        id: 'betweenneess9.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (10h)',
        id: 'betweenneess10.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (11h)',
        id: 'betweenneess11.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (12h)',
        id: 'betweenneess12.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (13h)',
        id: 'betweenneess13.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (14h)',
        id: 'betweenneess14.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (15h)',
        id: 'betweenneess15.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (16h)',
        id: 'betweenneess16.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (17h)',
        id: 'betweenneess17.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (18h)',
        id: 'betweenneess18.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (19h)',
        id: 'betweenneess19.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (20h)',
        id: 'betweenneess20.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (21h)',
        id: 'betweenneess21.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (22h)',
        id: 'betweenneess22.html',
        cover: uberResult
    },
    {
        name: 'Betweenneess (23h)',
        id: 'betweenneess23.html',
        cover: uberResult
    },
    {
        name: 'Closeness (0h)',
        id: 'closeness0.html',
        cover: uberResult
    },
    {
        name: 'Closeness (1h)',
        id: 'closeness1.html',
        cover: uberResult
    },
    {
        name: 'Closeness (2h)',
        id: 'closeness2.html',
        cover: uberResult
    },
    {
        name: 'Closeness (3h)',
        id: 'closeness3.html',
        cover: uberResult
    },
    {
        name: 'Closeness (4h)',
        id: 'closeness4.html',
        cover: uberResult
    },
    {
        name: 'Closeness (5h)',
        id: 'closeness5.html',
        cover: uberResult
    },
    {
        name: 'Closeness (6h)',
        id: 'closeness6.html',
        cover: uberResult
    },
    {
        name: 'Closeness (7h)',
        id: 'closeness7.html',
        cover: uberResult
    },
    {
        name: 'Closeness (8h)',
        id: 'closeness8.html',
        cover: uberResult
    },
    {
        name: 'Closeness (9h)',
        id: 'closeness9.html',
        cover: uberResult
    },
    {
        name: 'Closeness (10h)',
        id: 'closeness10.html',
        cover: uberResult
    },
    {
        name: 'Closeness (11h)',
        id: 'closeness11.html',
        cover: uberResult
    },
    {
        name: 'Closeness (12h)',
        id: 'closeness12.html',
        cover: uberResult
    },
    {
        name: 'Closeness (13h)',
        id: 'closeness13.html',
        cover: uberResult
    },
    {
        name: 'Closeness (14h)',
        id: 'closeness14.html',
        cover: uberResult
    },
    {
        name: 'Closeness (15h)',
        id: 'closeness15.html',
        cover: uberResult
    },
    {
        name: 'Closeness (16h)',
        id: 'closeness16.html',
        cover: uberResult
    },
    {
        name: 'Closeness (17h)',
        id: 'closeness17.html',
        cover: uberResult
    },
    {
        name: 'Closeness (18h)',
        id: 'closeness18.html',
        cover: uberResult
    },
    {
        name: 'Closeness (19h)',
        id: 'closeness19.html',
        cover: uberResult
    },
    {
        name: 'Closeness (20h)',
        id: 'closeness20.html',
        cover: uberResult
    },
    {
        name: 'Closeness (21h)',
        id: 'closeness21.html',
        cover: uberResult
    },
    {
        name: 'Closeness (22h)',
        id: 'closeness22.html',
        cover: uberResult
    },
    {
        name: 'Closeness (23h)',
        id: 'closeness23.html',
        cover: uberResult
    },
    {
        name: 'Hubs (0h)',
        id: 'hubs0.html',
        cover: uberResult
    },
    {
        name: 'Hubs (1h)',
        id: 'hubs1.html',
        cover: uberResult
    },
    {
        name: 'Hubs (2h)',
        id: 'hubs2.html',
        cover: uberResult
    },
    {
        name: 'Hubs (3h)',
        id: 'hubs3.html',
        cover: uberResult
    },
    {
        name: 'Hubs (4h)',
        id: 'hubs4.html',
        cover: uberResult
    },
    {
        name: 'Hubs (5h)',
        id: 'hubs5.html',
        cover: uberResult
    },
    {
        name: 'Hubs (6h)',
        id: 'hubs6.html',
        cover: uberResult
    },
    {
        name: 'Hubs (7h)',
        id: 'hubs7.html',
        cover: uberResult
    },
    {
        name: 'Hubs (8h)',
        id: 'hubs8.html',
        cover: uberResult
    },
    {
        name: 'Hubs (9h)',
        id: 'hubs9.html',
        cover: uberResult
    },
    {
        name: 'Hubs (10h)',
        id: 'hubs10.html',
        cover: uberResult
    },
    {
        name: 'Hubs (11h)',
        id: 'hubs11.html',
        cover: uberResult
    },
    {
        name: 'Hubs (12h)',
        id: 'hubs12.html',
        cover: uberResult
    },
    {
        name: 'Hubs (13h)',
        id: 'hubs13.html',
        cover: uberResult
    },
    {
        name: 'Hubs (14h)',
        id: 'hubs14.html',
        cover: uberResult
    },
    {
        name: 'Hubs (15h)',
        id: 'hubs15.html',
        cover: uberResult
    },
    {
        name: 'Hubs (16h)',
        id: 'hubs16.html',
        cover: uberResult
    },
    {
        name: 'Hubs (17h)',
        id: 'hubs17.html',
        cover: uberResult
    },
    {
        name: 'Hubs (18h)',
        id: 'hubs18.html',
        cover: uberResult
    },
    {
        name: 'Hubs (19h)',
        id: 'hubs19.html',
        cover: uberResult
    },
    {
        name: 'Hubs (20h)',
        id: 'hubs20.html',
        cover: uberResult
    },
    {
        name: 'Hubs (21h)',
        id: 'hubs21.html',
        cover: uberResult
    },
    {
        name: 'Hubs (22h)',
        id: 'hubs22.html',
        cover: uberResult
    },
    {
        name: 'Hubs (23h)',
        id: 'hubs23.html',
        cover: uberResult
    },
    {
        name: 'Authority (0h)',
        id: 'authority0.html',
        cover: uberResult
    },
    {
        name: 'Authority (1h)',
        id: 'authority1.html',
        cover: uberResult
    },
    {
        name: 'Authority (2h)',
        id: 'authority2.html',
        cover: uberResult
    },
    {
        name: 'Authority (3h)',
        id: 'authority3.html',
        cover: uberResult
    },
    {
        name: 'Authority (4h)',
        id: 'authority4.html',
        cover: uberResult
    },
    {
        name: 'Authority (5h)',
        id: 'authority5.html',
        cover: uberResult
    },
    {
        name: 'Authority (6h)',
        id: 'authority6.html',
        cover: uberResult
    },
    {
        name: 'Authority (7h)',
        id: 'authority7.html',
        cover: uberResult
    },
    {
        name: 'Authority (8h)',
        id: 'authority8.html',
        cover: uberResult
    },
    {
        name: 'Authority (9h)',
        id: 'authority9.html',
        cover: uberResult
    },
    {
        name: 'Authority (10h)',
        id: 'authority10.html',
        cover: uberResult
    },
    {
        name: 'Authority (11h)',
        id: 'authority11.html',
        cover: uberResult
    },
    {
        name: 'Authority (12h)',
        id: 'authority12.html',
        cover: uberResult
    },
    {
        name: 'Authority (13h)',
        id: 'authority13.html',
        cover: uberResult
    },
    {
        name: 'Authority (14h)',
        id: 'authority14.html',
        cover: uberResult
    },
    {
        name: 'Authority (15h)',
        id: 'authority15.html',
        cover: uberResult
    },
    {
        name: 'Authority (16h)',
        id: 'authority16.html',
        cover: uberResult
    },
    {
        name: 'Authority (17h)',
        id: 'authority17.html',
        cover: uberResult
    },
    {
        name: 'Authority (18h)',
        id: 'authority18.html',
        cover: uberResult
    },
    {
        name: 'Authority (19h)',
        id: 'authority19.html',
        cover: uberResult
    },
    {
        name: 'Authority (20h)',
        id: 'authority20.html',
        cover: uberResult
    },
    {
        name: 'Authority (21h)',
        id: 'authority21.html',
        cover: uberResult
    },
    {
        name: 'Authority (22h)',
        id: 'authority22.html',
        cover: uberResult
    },
    {
        name: 'Authority (23h)',
        id: 'authority23.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (0h)',
        id: 'eigenvector0.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (1h)',
        id: 'eigenvector1.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (2h)',
        id: 'eigenvector2.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (3h)',
        id: 'eigenvector3.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (4h)',
        id: 'eigenvector4.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (5h)',
        id: 'eigenvector5.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (6h)',
        id: 'eigenvector6.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (7h)',
        id: 'eigenvector7.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (8h)',
        id: 'eigenvector8.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (9h)',
        id: 'eigenvector9.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (10h)',
        id: 'eigenvector10.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (11h)',
        id: 'eigenvector11.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (12h)',
        id: 'eigenvector12.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (13h)',
        id: 'eigenvector13.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (14h)',
        id: 'eigenvector14.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (15h)',
        id: 'eigenvector15.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (16h)',
        id: 'eigenvector16.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (17h)',
        id: 'eigenvector17.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (18h)',
        id: 'eigenvector18.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (19h)',
        id: 'eigenvector19.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (20h)',
        id: 'eigenvector20.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (21h)',
        id: 'eigenvector21.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (22h)',
        id: 'eigenvector22.html',
        cover: uberResult
    },
    {
        name: 'Eigenvector (23h)',
        id: 'eigenvector23.html',
        cover: uberResult
    },
    {
        name: 'Community (0h)',
        id: 'community0.html',
        cover: uberResult
    },
    {
        name: 'Community (1h)',
        id: 'community1.html',
        cover: uberResult
    },
    {
        name: 'Community (2h)',
        id: 'community2.html',
        cover: uberResult
    },
    {
        name: 'Community (3h)',
        id: 'community3.html',
        cover: uberResult
    },
    {
        name: 'Community (4h)',
        id: 'community4.html',
        cover: uberResult
    },
    {
        name: 'Community (5h)',
        id: 'community5.html',
        cover: uberResult
    },
    {
        name: 'Community (6h)',
        id: 'community6.html',
        cover: uberResult
    },
    {
        name: 'Community (7h)',
        id: 'community7.html',
        cover: uberResult
    },
    {
        name: 'Community (8h)',
        id: 'community8.html',
        cover: uberResult
    },
    {
        name: 'Community (9h)',
        id: 'community9.html',
        cover: uberResult
    },
    {
        name: 'Community (10h)',
        id: 'community10.html',
        cover: uberResult
    },
    {
        name: 'Community (11h)',
        id: 'community11.html',
        cover: uberResult
    },
    {
        name: 'Community (12h)',
        id: 'community12.html',
        cover: uberResult
    },
    {
        name: 'Community (13h)',
        id: 'community13.html',
        cover: uberResult
    },
    {
        name: 'Community (14h)',
        id: 'community14.html',
        cover: uberResult
    },
    {
        name: 'Community (15h)',
        id: 'community15.html',
        cover: uberResult
    },
    {
        name: 'Community (16h)',
        id: 'community16.html',
        cover: uberResult
    },
    {
        name: 'Community (17h)',
        id: 'community17.html',
        cover: uberResult
    },
    {
        name: 'Community (18h)',
        id: 'community18.html',
        cover: uberResult
    },
    {
        name: 'Community (19h)',
        id: 'community19.html',
        cover: uberResult
    },
    {
        name: 'Community (20h)',
        id: 'community20.html',
        cover: uberResult
    },
    {
        name: 'Community (21h)',
        id: 'community21.html',
        cover: uberResult
    },
    {
        name: 'Community (22h)',
        id: 'community22.html',
        cover: uberResult
    },
    {
        name: 'Community (23h)',
        id: 'community23.html',
        cover: uberResult
    },
]

export default resultType