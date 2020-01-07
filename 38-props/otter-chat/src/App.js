import React from 'react';
import logo from './logo.svg';
import Message from './Message'
import './App.css';

function griffin(){
  return 52
}


function App() {
  // console.log(<Message />)
  return (<>
      <Message content="Ork!" />
      <Message content="Dinner at 6" />
      <Message content="Well damn!"
               potato="salad" 
               number={ 12 + 2.3 }
               isGreatMessage={ false }
               config={ { whatever: true } }
               stuff={ [  1,2,3 ] }
               functionThing={ griffin } 
               />
      <Message content="Orkk!" />
      <Message content="Do labs!" />
      <Message content="Do labs!"
               potato="banana" />
    </>
  );
}

export default App;
