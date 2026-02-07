import { useState } from 'react'
import './App.css'
import Card1 from './components/Card1'
import Filter from './components/Filter'
import NavBar from './components/NavBar'
import Viewer from './components/Viewer'
import AddButton from './components/AddButton'
import Card2 from './components/Card2'

import { Car, LayoutGrid, } from 'lucide-react';
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
        <div style={{width: '370px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#e0dddd'}}>
          <NavBar title='All' isActive={activeTab === 'All'} onClick={() => setActiveTab('All')}/>
          <NavBar title='Planning' isActive={activeTab === 'Planning'} onClick={() => setActiveTab('Planning')}/>
          <NavBar title='In Progress' isActive={activeTab === 'In Progress'} onClick={() => setActiveTab('In Progress')}/>
          <NavBar title='Completed' isActive={activeTab === 'Completed'} onClick={() => setActiveTab('Completed')}/>
        </div>
        <Viewer/>
        <AddButton/>
      </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: '10px', marginTop: '20px', flexWrap: 'wrap', height: 'calc(100vh - 300px)', overflowY: 'auto', paddingRight: '10px', border: '1px solid #e0dddd', borderRadius: '10px', width: '90%'}}>
          <Card2 title='Project Alpha' description='Manage all project details' status='In Progress' difficulty='Medium' count={3} date='2024-01-15' progress={2} totalProgress={5}/>
          <Card2 title='Project Beta' description='Organize project tasks and deadlines' status='Planning' difficulty='High' count={0} date='2024-02-01' progress={0} totalProgress={5}/>
          <Card2 title='Project Gamma' description='Track project milestones and deliverables' status='Completed' difficulty='Low' count={5} date='2024-01-30' progress={5} totalProgress={5}/>
          <Card2 title='Project Delta' description='Collaborate with team members' status='In Progress' difficulty='Medium' count={2} date='2024-01-20' progress={1} totalProgress={5}/>
          <Card2 title='Project Epsilon' description='Monitor project progress and performance' status='Planning' difficulty='High' count={0} date='2024-02-10' progress={0} totalProgress={5}/>  
          <Card2 title='Project Zeta' description='Manage project resources and budgets' status='Planning' difficulty='Medium' count={0} date='2024-02-15' progress={0} totalProgress={5}/>
          <Card2 title='Project Eta' description='Ensure project quality and standards' status='Completed' difficulty='Low' count={5} date='2024-01-25' progress={5} totalProgress={5}/>
          <Card2 title='Project Theta' description='Identify and mitigate project risks' status='In Progress' difficulty='High' count={1} date='2024-01-18' progress={1} totalProgress={5}/>
          <Card2 title='Project Iota' description='Communicate project updates and reports' status='Planning' difficulty='Medium' count={0} date='2024-02-05' progress={0} totalProgress={5}/>
        </div>
      
    </div>
  )
}

export default App
