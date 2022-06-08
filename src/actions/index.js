export const URL = 'https://jsonplaceholder.typicode.com/users';
export const getUsersList = async () =>{

    let response = await fetch(URL);
    let payload = await response.json()

    console.log(payload)

    return {
        type:'LIST',
        payload
    }
}
export const searchByName = async (payload) => {
    console.log(payload)
    return {
        type: 'SEARCH',
        payload
}
}
export const getUserDetails = async (id) =>{
    let response = await fetch(`${URL}/${id}`);
    let payload = await response.json()

    return {
        type:'DETAILS',
        payload
    }
}