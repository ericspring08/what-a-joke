import {setState} from 'react';
const url = "https://official-joke-api.appspot.com/random_ten";

export const fetchJokes = async() => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
} 