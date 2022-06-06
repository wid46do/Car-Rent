import axios from "axios";

export const GET_CARS = "GET_CARS";

export const getCarData = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_CARS",
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
                method: 'GET',
                url: 'https://rent-cars-api.herokuapp.com/admin/car',
                timeout: 120000
            })
            .then((response) => {
                console.log("berhasil dapet data : ", response);
                dispatch({
                    type: "GET_CARS",
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                console.log("gagal dapet data : ", error);
                dispatch({
                    type: "GET_CARS",
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}