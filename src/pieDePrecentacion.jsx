import "./main.css"
import Imagen1 from './img/Imagen1.png';
import { BiArrowToRight,BiLabel } from "react-icons/bi";

export function Alumnos(){
    return <div className="Precentacion">
        <h2>Alumnos a cargo de esta pagina web</h2>
        
        <h4><BiLabel/>Miguel Angel Vidal Guazaquillo</h4>
        <p><BiArrowToRight/>Ingenieria de Sistmeas</p>
        <h4><BiLabel/>Nicolas Obiedo</h4>
        <p><BiArrowToRight/>Ingeniera de Sistemas</p>
    </div>
}

export function PagniaP(){
    return <div className="Precentacion">
        <h1 className="Presentacion-T"  >Fundamentos de la Informacion</h1>
        <img src={Imagen1} className='Poster-P' alt=""/>
        
    </div>
}

export function TotalP(){
    return <div>
        <PagniaP/>
        
        <Alumnos/>
        <p>Esta pagina fue requerida para poder precentar, guardar y mostrar la informacion de la cual hemos adquirido en clase usado las herramientas informativas TIC</p>
        
    </div>
}