import {all} from 'redux-saga/effects';
import barbearia from '../modules/barbearia/sagas';


export default function* rootSaga(){
  return yield all([barbearia]);

}