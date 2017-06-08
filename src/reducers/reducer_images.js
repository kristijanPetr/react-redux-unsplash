import {FETCH_IMAGES} from '../actions/index';

export default function (state = [], action) {
    switch (action.type){
        case FETCH_IMAGES:
            return action.payload.data.slice(0,50);
            // break;
    }
    return state;
}