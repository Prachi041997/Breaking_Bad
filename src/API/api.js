import {BaseURL} from '../BaseURL'

export const getAllChar = (offset)=> {
    return fetch(`${BaseURL}/characters?limit=10&offset=${offset}`, {
        method:'GET'
    }).then(response =>
   response.json()
    )
    
}

export const searchChar = (value)=> {
    return fetch(`${BaseURL}/characters?name=${value}` , {
        method: 'GET'
    }).then(response=> response.json())
}

export const applyFilter = (offset)=> {
    return fetch(`${BaseURL}/characters?limit=10&offset=${offset}&category=Better+Call+Saul`, {
        method: 'GET'
    }).then(response=> response.json())
}

export const getQuotes = (value)=> {
    return fetch(`${BaseURL}/quote?author=${value}`, {
        method: 'GET'
    }).then(response=> response.json())
}

export const getCharbyId = (id)=> {
    return fetch(`${BaseURL}/characters/${id}`, {
        method: 'GET'
    }).then(response=> response.json())
}