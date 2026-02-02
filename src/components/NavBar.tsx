interface NavBarProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}

function NavBar({ title, isActive, onClick }: NavBarProps){
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
           <button 
               style={{borderRadius: '40px', padding: '5px 15px', border: 'none', backgroundColor: isActive ? '#f0f0f0' : 'transparent', cursor: 'pointer'}} 
               onClick={onClick}
           >{title}</button>
        </div>
    )
}

export default NavBar;