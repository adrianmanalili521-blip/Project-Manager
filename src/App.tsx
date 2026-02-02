import { useState } from 'react'
import './App.css'
import Card1 from './components/Card1'
import Filter from './components/filter'
import NavBar from './components/NavBar'

import { LayoutGrid, } from 'lucide-react';
import { Clock } from 'lucide-react';
import { CircleCheck } from 'lucide-react';
import { CircleAlert } from 'lucide-react';
import { Search } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <div style={{display: 'flex', flexDirection: 'column', height: '100px', textAlign: 'left'}}>
        <h2 style={{fontSize: '2em', color: 'black'}}>Project Manager</h2>
        <p >Track and manage all your projects in one place</p>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row', gap: '30px', height: '100px'}}>
        <Card1 title='Total Projects' val={5} icon={<LayoutGrid size={26} color='blue'/>}/>
        <Card1 title='In Progress' val={2} icon={<Clock size={26} color='orange'/>}/>
        <Card1 title='Completed' val={1} icon={<CircleCheck size={26} color='green'/>}/>
        <Card1 title='Overdue' val={0} icon={<CircleAlert size={26} color='red'/>}/> 
      </div>

      <div style={{display: 'flex', flexDirection: 'row', height: '40px', padding: '10px', marginTop: '30px', gap: '20px', alignItems: 'center'}}>
        <Filter icon={<Search size={20} color='black'/>}/>
        <div style={{width: '400px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#e0dddd'}}>
          <NavBar title='All' isActive={activeTab === 'All'} onClick={() => setActiveTab('All')}/>
          <NavBar title='Planning' isActive={activeTab === 'Planning'} onClick={() => setActiveTab('Planning')}/>
          <NavBar title='In Progress' isActive={activeTab === 'In Progress'} onClick={() => setActiveTab('In Progress')}/>
          <NavBar title='Completed' isActive={activeTab === 'Completed'} onClick={() => setActiveTab('Completed')}/>
        </div>
      </div>
    </div>
  )
}

export default App
