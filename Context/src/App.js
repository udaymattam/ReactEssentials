import React from 'react';
import ComponentA from './ComponentA';

 export const UserContext=React.createContext();

function App() {
  return (
    <div>
      <center>
        <UserContext.Provider value={"react component loads here"}>
        <ComponentA/>
        </UserContext.Provider>
      </center>
    </div>
  );
}

export default App;
