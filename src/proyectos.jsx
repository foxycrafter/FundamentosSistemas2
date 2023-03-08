import { Centralizada, Descentralizada, Soa, Usp } from "./textoProyctos";
import ProyectoImg1 from "./img/ProyectoImg1.png";
import ProyectosImagen1 from "./img/ProyectoImagen1.png";
import ProyectosImagen1v3 from "./img/ProyectoImagen1v3.png"
import "./main.css"

export function Primera(){
    return <div className="Proyecto-Preccentacion">
        <table>
            <tr className="Texto">
                <td><Centralizada/></td>
                <td><img src={ProyectoImg1} alt="" /></td>
            </tr>
            
            <tr className="Texto">
            <td><img src={ProyectosImagen1} alt="" /></td>
                <td><Descentralizada/></td>
                
            </tr>
            <tr className="Texto">
                <td><Soa/></td>
                <td><img src={ProyectosImagen1v3} alt="" /></td>
            </tr>
            <tr className="Texto">
                <td colSpan={2}><Usp/></td>
            </tr>
        </table>    
    </div>
}