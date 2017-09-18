import axios from 'axios';


//dispatch вызывать только в экшенах
import {store} from '../index';
export function editUserInfo(index) {
            store.dispatch({
                type: 'EDIT_USER',
                payload: index
            });
}