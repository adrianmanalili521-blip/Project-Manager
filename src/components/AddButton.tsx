import { Plus } from 'lucide-react';

import { useState } from 'react';

function AddButton () {

    return (
        <button style={{borderRadius: '10px', padding: '5px', margin: '5px', width: '150px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '5px', backgroundColor: '#130c52', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s ease'}}>
            <Plus size={16}  />
            <p>New Project</p>
        </button>
    )
}

export default AddButton;