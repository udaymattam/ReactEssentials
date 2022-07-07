import React from 'react';
import {UserContext} from './App.js'

function ComponentA() {
  return (
    <div>
        <UserContext.Consumer>
            {value=><div>{value}</div>}
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentA;