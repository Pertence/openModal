import React from 'react'
import * as data from './Constants'
import ptsEvaluation from '../assets/funcs/ptsEvaluation.png'
import networkLoad from '../assets/funcs/networkLoad.png'
import uberMovement from '../assets/funcs/uber_gif.gif'
import PTS from './algorithm-variables/pts'
import Signature from './algorithm-variables/signature';
import Uber from './algorithm-variables/uber';


const Analyses = [
    {
        name: 'PTS Evaluation using Complex Network Metrics',
        id: 'pts_evaluation',
        cover: ptsEvaluation,
        data: [
            data.BUS, data.METRO, data.TRAM
        ],
        description: 'Evaluate the displacement of public transportation city using transportation data and complet network metrics.',
        detailedDescription: [],
        variables: <PTS />
    },
    {
        name: 'Mobile Traffic Signature',
        id: 'signature',
        cover: networkLoad,
        data: [
            data.MOBILE, data.GRID_ON
        ],
        description: 'Aggregate mobile traffic volume of city areas as traffic signatures used to compare different regions of a city.',
        detailedDescription: [],
        variables: <Signature />
    },
    {
        name: 'Uber Movement Analyses',
        id: 'uber',
        cover: uberMovement,
        data: [
            data.UBER_MOVEMENT
        ],
        description: 'Calculate complet network metrics using Uber Movement data',
        detailedDescription: [],
        variables: <Uber />
    },

]

export default Analyses