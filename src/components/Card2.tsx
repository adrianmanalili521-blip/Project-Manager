interface Card2Props {
    title : string;
    description: string;
    status: string;
    difficulty: string;
    count: number;
    date: string;
    progress: number;
    totalProgress: number;
}

import { useState } from "react";

function Card2({title, description, status, difficulty, count, date, progress, totalProgress}: Card2Props) {
    const [hovered, setHovered] = useState(false);
  return (
    <button style={{height: '300px', width: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', padding: '15px', borderRadius: '10px', backgroundColor: hovered ? '#e0e0e0' : '#f0f0f0', border: '1px solid #e0dddd'}} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <h2>{title}</h2>
        <p style={{marginTop: '10px', marginBottom: '10px', }}>{description}</p>
        <div style={{display: 'flex', justifyContent: 'start', width: '100%', gap: '10px', marginBottom: '60px', marginTop: '30px'}}>
            <p style={{backgroundColor: '#d9b175', borderRadius: '10px', fontSize: '12px'}}>Status: {status}</p>
        <p style={{backgroundColor: '#cc686b', borderRadius: '10px', padding: '2px', fontSize: '12px'}}>Difficulty: {difficulty}</p>
        </div>
        <p>Progress: {progress}/{totalProgress}</p>
        <p>Tasks: {count}</p>
        <p>Date: {date}</p>
    </button>
  );
}

export default Card2;