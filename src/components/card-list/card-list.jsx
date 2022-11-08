import './card-list.styles.css'
const Cardlist = ({members})=>{
    return <div className="card-list">
    {members.map((member)=>{
        const {name, id, email}= member
        return <div className="card-container" key={id}>
        <img
        alt={'member: '+name} 
        src={'https://robohash.org/$'+id+'?set=set5&size=180x180'}
        ></img>
        <h2>{name} </h2>
        <p>{email}</p>
        </div>
        })}
    </div>
}
export default Cardlist