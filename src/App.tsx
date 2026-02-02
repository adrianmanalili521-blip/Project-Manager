import { useState } from 'react'
import './App.css'
import Card1 from './components/card1'

function App() {


  return (
    <div style={{backgroundColor: 'lightblue', height: '100vh', width: '100vw'}}>
      <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', height: '100px', textAlign: 'left'}}>
        <h2 style={{fontSize: '2em', color: 'black'}}>Project Manager</h2>
        <p >Track and manage all your projects in one place</p>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row', gap: '30px', padding: '20px', height: '100px'}}>
        <Card1 title='Total Projects' val={5}/>
        <Card1 title='In Progress' val={2}/>
        <Card1 title='Completed' val={1}/>
        <Card1 title='Overdue' val={0}/> 
      </div>
    </div>
  )
}

export default App
