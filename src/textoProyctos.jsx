import Imagenex from "./img/BY2SPhIrroGA7R.png";
import { BiBullseye,BiBox,BiCaretRight,BiChart,BiCheckDouble,BiCabinet,BiBookOpen,BiAlbum,BiArrowToRight,BiBookBookmark,BiBookReader,BiCrown } from "react-icons/bi";

export function Centralizada(){
    return<div>   
            <h1><BiBookBookmark/> Centralizada</h1>
            <h2><BiBookReader/> Definicion</h2>
            <p>Proceso de cómputo realizado en una localización central capaz de controlar todas las unidades de manera directa siempre y cuando estos se encuentren conectados con la computadora central, es decir, una base de datos que se encuentra almacenada en un solo dispositivo, interactuando con ella a través de un servidor de la terminal. Por lo anterior se entiende que permite una independencia de los datos almacenados, reducción de redundancia y sistemas mucho más seguros, sin embargo se presentan falencias con respecto a la sincronización para su recuperación en caso de que se presente un fallo en la base de datos, generando una pérdida de disponibilidad y prcesamiento de información.</p>
            <h3><BiBullseye/> Ejemplos</h3>
            <p><BiCaretRight/> Bases de datos centralizadas: Datos en un servidor.
            </p><p><BiCaretRight/> Servidores de prueba que facilitan la depuración, la implementación y la simulación de un software.
            </p><p><BiCaretRight/> Hardware de carácter personal.</p>

    </div>
}
export function Descentralizada(){
    return<div>
            <h1><BiBookBookmark/> Descentralizada</h1>
            <h2><BiBookReader/> Definicion</h2>
            <p>A diferencia de la arquitectura centralizada, existe mas de un controlador y todos ellos interconectados mediante un sistema de bus (sistema digital que transfiere datos entre los componentes de una computadora), el cual envía información entre ellos y haciendo que cada uno actúe como un sistema centralizado en el cual cada controlador envía información a los actuadores e interfaces de acuerdo a lo registrado por los sensores o usuarios para el desarrollo de una actividad. Este tipo de arquitectura nace como respuesta a la necesidad de tener un mejor acceso a ciertos dispositivos y a causa de la existencia de diferencia en los protocolos y caracteristicas de los distintos fabricantes de dichos dispositivos.</p>
            <h3><BiBullseye/> Ejemplos</h3>
            <p><BiCaretRight/> Bases de datos descentralizadas: Divididas en partes y distribuidas a diferentes nodos para su almacenamiento y uso.</p>
            <p><BiCaretRight/>  String de bloques: Inormación guardada en cada bloque, asociado a una dirección única.</p>
            <p><BiCaretRight/>  Microservicios.</p>
            
    </div>

}

export function Soa(){
    return<div>
        <h1><BiBookBookmark/> SOA(Service Oriented Architecture)</h1>
        <h2><BiBookReader/> Definicion</h2>
        <p>Tipo de diseño de software que permite reutilizar sus elementos gracias a las interfaces de servicios que se comunican a través de una red con un lenguaje común integrando los elementos del software que se implementan y se mantienen por separado permitiendo que se estos comuniquen entre si con el objetivo de trabajar en conjunto para formar aplicaciones de software en distintos sistemas sin tener que realizar una integración profunda cada vez; brindan un acoplamiento suelto,es decir, que se pueden llamar con poco o ningún conocimiento sobre la forma de implementación de la integración subyacente.</p>
        <h3><BiBullseye/> Definicion</h3>
        <p><BiCaretRight/>  Gestión de condiciones de uso de un servicio web.</p>
        <p><BiCaretRight/>  Proveedor de servicios.</p>
        <p><BiCaretRight/>  Servicios con su propia base de datos (cada uno).</p>
        <p><BiCaretRight/>  Manejo de diferentes tipos de bases de datos.</p>
    </div>
}

export function Usp(){
    return <div>
        <table><tr><td><h1><BiCrown/>Caso USP</h1>
        <h2><BiBox/> Entradas, Salidas y Procesamientos</h2>
        <p><BiArrowToRight/> Entradas: Captura de la información, recolección, entrega y tarjeta de horarios. En diversos puntos a lo largo de la ruta del remitente al receptor, un lector de código de barras escanea la información de envío en la etiqueta del paquete y la envía a la computadora central. 
        </p><p><BiArrowToRight/> Procesamiento: Colocar el DIAD en un dispositivo de transmisión de información del vehículo (conectado a la red de telefonía celular). La información de seguimiento del paquete se transmite a la red de computador UPS para su almacenamiento y procesamiento en las computadoras principales.
        </p><p><BiArrowToRight/> Salidas: Los representantes de servicio a clientes pueden verificar el estado de cualquier paquete desde computadoras de escritorio enlazadas a las computadoras centrales y pueden contestar inmediatamente a las preguntas de los clientes. Dichos clientes también pueden acceder a esta información desde el sitio web de la compañía utilizando sus propios dispositivos; permitiendo el rastreo de paquetes, verificación de rutas de entrega, costos de envío, tiempo de tránsito y de recolección/entrega.</p></td>
        <td><img src={Imagenex} alt=""/></td>
        </tr>
        </table>
        <h2><BiChart/> Tecnologias y Estrategias de Negosio</h2>
        <p>UPS se basa en las tecnologías de la información y las comunicaciones (TIC) implementando un conjunto de programas de software personalizados que utiliza la investigación de operaciones y tecnologías de mapas. Estas tecnologías permiten un acertado cumplimiento con respecto a la estrategia de negocios de la empresa (el mejor servicio y las tarifas más bajas) mediante la creación de la división  de soluciones de la cadena de suministros de otras empresas, ofreciéndoles un paquete completo de servicios estandarizados a una pequeña parte de lo que les costaría establecer sus propios sistemas e infraestructuras.</p>    
        <h3><BiAlbum/> Objetivos y Negosio</h3>
        <p>Trata con el control de información y de paquetería, así mismo como la optimización de carga y entrega a un precio más asequible para las empresas contratadoras del servicio.</p>
        <h2><BiCabinet/> Problemas Resueltos por los S.I</h2>
        <p><BiCheckDouble/> Resuelven problemas respecto a los retrasos en los envíos y la seguridad de los mismos gracias a su capacidad de seguimiento, automatización de la información, reducción de costos para las empresas que compren sus servicios y mayor agilización de las operaciones.
        </p><p><BiCheckDouble/> La ausencia o poca disponibilidad de estos sistemas provocaría que, tanto la empresa prestadora del servicio como la empresa que compra dicho servicio, presenten problemas en cuanto a seguridad se refiere ya sea de la información del cliente o del paquete haciendo que se generen retrasos significativos en la entrega de los mismos.</p>
        <h1><BiBox/> Casos Similares en Colombia</h1>
        <p><BiBookOpen/> Tecnelec: Ingeniería electrónica (soluciones de sistemas de alimentación ininterrumpida en redes eléctricas y mecatrónicas para diferentes industrias): Esta empresa colombiana lleva más de 30 años en el mercado de la tecnología para la automatización de servicios y la alimentación ininterrumpida de las ndustrias; proveen, al mercado nacional, soluciones en UPS online, interactiva, monofasicas, bifasicas y trifasicas de las marcas CDP, además de ofrecer a empresas de todos los tamaños la posibilidad de realizar automatización y monitoreos generales a sus estructuras. </p>
        <p>Estos sistemas que manejan son accesibles, confiables y efectivos para las organizaciones que los requieran (contraten el servicio).
        </p>
        <p>En Tecnelec nos esmeramos por prestar un servicio rápido, espontáneo y satisfactorio a nuestros clientes, sumado a la máxima calidad de los productos  que tenemos a su disposición. No dude en solicitarnos la información que necesite sobre las UPS para empresas así como el soporte técnico que le ofrecemos (Tecnelec, 1987).</p>
    </div>
}