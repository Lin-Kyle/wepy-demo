import { handleActions } from 'redux-actions'
import {
  USERINOF,
} from '../types'

export default handleActions({
  [USERINOF] (state, { payload }) {
    return {
      ...state,
      userApplyStatus: payload.status
    }
  },
}, {
  userApplyStatus: 0,
})
