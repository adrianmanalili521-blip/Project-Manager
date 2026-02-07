import { LayoutGrid, List } from 'lucide-react';

import { useState } from 'react';

function Viewer() {
  const [view, setView] = useState(true);

  return (
    <div style={{border: '1px solid grey', borderRadius: '10px', height: '35px', justifyItems: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <button className="grid" onClick={() => setView(true)} style={{borderRadius: '10px' , padding: '5px', margin: '5px', backgroundColor: view ? '#e0dddd' : 'transparent'}}><LayoutGrid size={16}/></button>
        <button className="list" onClick={() => setView(false)} style={{borderRadius: '10px', padding: '5px', margin: '5px', backgroundColor: !view ? '#e0dddd' : 'transparent'}}><List size={16}/></button>
    </div>
  );
}

export default Viewer;