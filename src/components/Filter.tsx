import React, { useState } from 'react';

interface FilterProps {
    icon?: React.ReactNode;
}
function Filter ({ icon }: FilterProps) {

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative'}}>
            <input 
                type="text" 
                placeholder="Search projects..." 
                style={{padding: '8px 40px 8px 30px', borderRadius: '10px', border: '1px solid gray', width: '500px', backgroundColor: '#ebe9e9'}} 
            />
            {icon && <div style={{position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)'}}>{icon}</div>}
        </div>
    )
}

export default Filter
