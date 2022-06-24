import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import { IncAction } from './action';
import { DecAction } from './action';

const App=({localvariable,IncAction,DecAction})=> {
  return (
    <div>
      <h1>{localvariable}</h1>
      <button onClick={IncAction}>Increment</button>
      <button onClick={DecAction}>Decrement</button>
    </div>
  )
}

const mapStateToProps=state=>({
  localvariable : state
})

export default connect(mapStateToProps,{IncAction,DecAction})(App);
