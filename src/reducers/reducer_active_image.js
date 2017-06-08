import {IMAGE_SELECTED} from '../actions/index';

export default function (state = null, action) {
    switch (action.type){
        case IMAGE_SELECTED:
            console.log("Selected image: ",action.payload);
            return action.payload

    }
    return state;
}