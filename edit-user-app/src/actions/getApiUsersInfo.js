import axios from 'axios';


//dispatch вызывать только в экшенах
import {store} from '../index';
export function getApiUserInfo() {
    axios.get(`http://localhost:3000/users`)
        .then(res => {
            store.dispatch({
                type: 'GET_DATA',
                payload: res.data
            });
        });

}