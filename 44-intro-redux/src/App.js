import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const fruitBats = [
    {
      id: 1,
      name: "Flappy"
    },
    {
      id: 2,
      name: "Scrappy"
    }
  ]
  const vampireBats = [
    {
      id: 1,
      name: "Count Flapula"
    }
    {
      id: 2,
      name: "Edward Flappington"
    },
    {
      id: 3,
      name: "Alice Flappington"
    },
    {
      id: 4,
      name: "Jasper Flappington"
    },
    {
      id: 5,
      name: "Carlisle Flappington"
    }
  ]
  return (
    <>
      <BatForm />
      <BatList bats={ fruitBats } />
      <BatList bats={ vampireBats } />
    </>
  );
}

export default App;
