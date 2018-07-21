
import {INITIAL_STATE,FINAL_STATE,INCREMENT} from './actionConstant'

export const SampleAction = (message) => ({ type: INITIAL_STATE,message})

export const FinalAction = () => ({type:FINAL_STATE})

export const increment = () => ({type:INCREMENT})