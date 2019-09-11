import {  CHANGE_DATA, CHANGE_PTS_VARIABLES, CHANGE_SIGNATURE_VARIABLES, CHANGE_UBER_VARIABLES } from './Constants';

export const changeData = (data) => {
    return{
        type: CHANGE_DATA,
        data
    }
}

export const changePTSVariables = (algorithm, {cluster, seed, iteractions}) => {
    return{
        type: CHANGE_PTS_VARIABLES,
        algorithm,
        cluster,
        seed,
        iteractions
    }
}

export const changeSignatureVariables = (algorithm, {cluster, unitArea, timeVariation, startLat, startLon, endLat, endLon}) => {
    return{
        type: CHANGE_SIGNATURE_VARIABLES,
        algorithm,
        cluster,
        unitArea,
        timeVariation,
        startLat,
        startLon,
        endLat,
        endLon
    }
}

export const changeUberVariables = (algorithm) => {
    return{
        type: CHANGE_UBER_VARIABLES,
        algorithm
    }
}