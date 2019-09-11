import * as data from './Constants'
import chicago from '../assets/city/chicago.png'
// import taichung from '../assets/city/taichung.png'
// import dubai from '../assets/city/dubai.png'
import bh from '../assets/city/beloHorizonte.png'
import toronto from '../assets/city/toronto.png'

const CityData = [
    {
        name: 'Chicago',
        id: 'chicago-server',
        cover: chicago,
        data: [
            data.BUS, data.METRO
        ],
        description: 'Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S, with a population of 2.705 million (2016) and area of 606.1km²',
        detailedDescription: [`Bus: 11,011 stops / 142 lines`, `Metro: 141 stations / 8 lines` ]
    },
    // {
    //     name: 'Dubai',
    //     id: 'dubai-server',
    //     cover: dubai,
    //     data: [
    //         data.BUS, data.METRO, data.TRAM 
    //     ],
    //     description: 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. It has a population of 3.118 million (2016) and area of 4,114km²',
    //     detailedDescription: [`Bus: 4,456 stops / 350 lines`, `Metro: 49 stations / 2 lines`, `Tram: 11 stations / 1 line`]
    // },
    // {
    //     name: 'Taichung',
    //     id: 'taichung-server',
    //     cover: taichung,
    //     data: [
    //         data.BUS, data.METRO
    //     ],
    //     description: 'Taichung is an industrial city on the western side of central Taiwan. Has a population of 2.797 million (2018), area of 2,215km² and urban area of 492km²',
    //     detailedDescription: [`Bus: 7,049 stops / 253 lines`, `Metro: 95 stations / 5 lines`]
    // },
    {
        name: 'Belo Horizonte',
        id: 'belohorizonte-server',
        cover: bh,
        data: [ data.MOBILE ],
        description: 'DescriptionBelo Horizonte is the capital city of southeastern Brazil’s Minas Gerais state. Surrounded by mountains.',
        detailedDescription: []
    },
    {
        name: 'Toronto',
        id: 'toronto-server',
        cover: toronto,
        data: [ data.UBER_MOVEMENT ],
        description: 'DescriptionToronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore. It\'s a dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic, free-standing CN Tower.',
        detailedDescription: []
    }

]

export default CityData