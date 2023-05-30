import { useParams} from 'react-router-dom';
const Param = props => {
    const {id} = useParams()
    const {id2} = useParams()
    return(
        <div className="Param">
        <h1>Paramentros</h1>
        <p>Valor: {id} </p>
        <p>Valor: {id2} </p>
    </div>
    )

}


export default Param