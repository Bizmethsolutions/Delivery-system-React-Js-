// import Rx from 'rxjs/Rx'
// import {Observable} from 'rxjs'
import { Record } from 'immutable'
import { assign } from 'lodash'
//import Cookies from 'universal-cookie'
// import { INIT, LOADING, SUCCESS, ERROR } from '../../constants/phase'


// import { fromPromise } from 'rxjs/observable/fromPromise'
// import { of } from 'rxjs'
// import { mergeMap, flatMap, catchError } from 'rxjs/operators'
import { combineEpics } from 'redux-observable'

import * as api from './api'

/***********************************
 * Action Types
 ***********/
//const cookies = new Cookies()

export const ALL_TENDER = 'mygets/user/ALL_TENDER'



/***********************************
 * Initial State
 ***********/

// Unlike other ducks we are taking a class style approach
// for creating the InitialState. This is becuase we need to fetch the
// locally stored token in the constructor when it is created
const InitialStateInterface = {
  // We need this here to tell InitialState that there is a token key,
  // but it will be reset below to what is in localStorage, unless a value
  // is passed in when the object is instanciated

  // phase: INIT,
  error: null,
  message: null,

}

class InitialState extends Record(InitialStateInterface) {
  constructor(desiredValues) {
    // When we construct InitialState, we automatically update it's default value
    // for token to be what is stored in localStorage
    const token = '' // localStorage.getItem(Config.LocalStorageKeys.Authorization)
    super(assign({ token }, desiredValues))
  }
}

/***********************************
 * Reducer
 ***********/
// eslint-disable-next-line complexity, max-statements

export default function (state = new InitialState(), action = {}) {
  switch (action.type) {
    default: {
      return state
    }
  }
}


/***********************************
 * Action Creators
 ***********/

export const getAllTender = data => {
  return {
    type: ALL_TENDER,
    payload: api.getAllTender(data)
  }
}


/***********************************
 * Epics
 ***********************************/

export const tenderEpic = combineEpics(

)
