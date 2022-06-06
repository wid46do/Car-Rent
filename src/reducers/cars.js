import { GET_CARS } from "../actions/carActions";

const initialState = {
    getCarDataResult: false,
    getCarDataLoading: false,
    getCarDataError: false
}

const cars = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS:
            return {
                ...state,
                getCarDataResult: action.payload.data,
                getCarDataLoading: action.payload.loading,
                getCarDataError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default cars