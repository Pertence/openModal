import { CHANGE_DATA, CHANGE_PTS_VARIABLES, CHANGE_SIGNATURE_VARIABLES, CHANGE_UBER_VARIABLES } from '../actions/Constants';

const initialState = {
    data: '',
    algorithm: '',
    variables: {
        cluster: 0,
        seed: -5,
        iteractions: 0,
        unitArea: 2,
        timeVariation: 0,
        startLat: 0,
        startLon: 0,
        endLat: 0,
        endLon: 0
    }
}

const modalReducer = (state = initialState, action) => {
    const { data, algorithm, cluster, seed, iteractions, unitArea, timeVariation, startLat, startLon, endLat, endLon } = action;
    switch (action.type) {
        case CHANGE_DATA:
            return {
                ...state,
                data
            };
        case CHANGE_PTS_VARIABLES:
            return{
                ...state,
                algorithm,
                variables: {
                    cluster,
                    seed,
                    iteractions
                },
            }
        case CHANGE_SIGNATURE_VARIABLES:
            return{
                ...state,
                algorithm,
                variables: {
                    cluster,
                    unitArea,
                    timeVariation,
                    startLat,
                    startLon,
                    endLat,
                    endLon
                },
            }
        case CHANGE_UBER_VARIABLES:
            return{
                ...state,
                algorithm
            }
        default:
            return state;
    }
}

export default modalReducer;