import type { ReactNode } from 'react';

// Completed: Add next icons to cards

interface Card1Props {
    title: string;
    val: number;
    icon?: ReactNode;
}


function Card1 ({ title, val, icon }: Card1Props) {
    return (
        <div style={{border: '1px solid rgba(128, 128, 128, 0.5)', borderRadius: '20px', padding: '20px', width: '230px', gap: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white'}}>
            <div style={{textAlign: 'left'}}>
                <p>{title}</p>
                <p style={{marginTop: '10px', color: 'black', fontSize: '1.5em'}}>{val}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {icon}
            </div>
            
        </div>
    )
}

export default Card1