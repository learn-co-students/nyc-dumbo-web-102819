import React from 'react';
import BatList from './BatList'
import BatForm from './BatForm'

function App() {

  const badFakeNewBat = name => console.log(name)
  
  return (
    <>
      <BatForm newBat={ badFakeNewBat} />
      <BatList />
      { //<BatList bats={ [] } /> 
    }
    </>
  );
}

export default App;
