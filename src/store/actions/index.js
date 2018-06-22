import {USERINOF} from '../types'
import {createAction} from 'redux-actions'

const userinfo = createAction(USERINOF, (obj) => {
    return obj
})

export {
    userinfo
}
