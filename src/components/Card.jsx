import Back from "../assets/Carrds/back/01_Back.png"

const Card =({
 value
})=>{
    return <>
    <p>{value}</p>
<img src={Back} alt="Carte" />
    </>
}
export default Card