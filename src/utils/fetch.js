import { API_URL, API_KEY } from "./constants"

export const getListAsteroids = async() => {
    try {
        const response = await fetch(
            `${API_URL}/neo/browse?api_key=${API_KEY}`,
            {
                method: "GET"
            }
        )
        .then( res => res.json())
        .catch( err => err);
        console.log(response)
        return response;   
    } catch (error) {
        console.log('error at getListAsteroids',error)
    }
}

export const getFeedsByDate = async(start_date, end_date) => {
    try {
        const response = await fetch(
            `${API_URL}/feed?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`,
            {
                method: "GET"
            }
        )
        .then( res => res.json())
        .catch(err => err);
        return response
    } catch (error) {
        console.log('error at getFeedsByDate', error);
    }
}

export const searchAsteroidById = async(id) => {
    try {
        const response = await fetch(
            `${API_URL}/neo/${id}?api_key=${API_KEY}`,
            {
                method: 'GET'
            }
        )
        .then( res => {
            if(res.status === 404 || res.status === 400) return res.status;
            return res.json();
        })
        .catch(err => err);
        return response
    } catch (error) {
        console.log('error at searchAsteriod', error);
    }
}