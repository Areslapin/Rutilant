import Back from "../assets/Carrds/back/01_Back.png"

const Card =({
 value
})=>{
    return <>
    <p>{value}</p>
<img src={Back} alt="Ta mère" />
    </>
}
export default Card