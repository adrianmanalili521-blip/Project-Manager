interface Card1Props {
    title: string;
    val: number;
}

function Card1 ({ title, val }: Card1Props) {
    return (
        <div style={{border: '1px solid black', borderRadius: '20px', padding: '20px', width: '230px', display: 'flex', flexDirection: 'column', textAlign: 'start'}}>
            <p>{title}</p>
            <p style={{marginTop: '10px', color: 'black', fontSize: '1.2em'}}>{val}</p>
        </div>
    )
}

export default Card1