import axios from 'axios';
export const FETCH_IMAGES = 'FETCH_IMAGES';
export const IMAGE_SELECTED = "IMAGE_SELECTED";

const url = 'https://unsplash.it/list';

export function fetchMatches(term) {
    console.log('searching term: ',term)
    const request = axios.get(url);

    return {
        type: FETCH_IMAGES,
        payload: request
    }
}

export function selectImage(image) {
    console.log("Image selected");
    return {
        type: IMAGE_SELECTED,
        payload: image
    }
}