import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css"
import { TotalP } from './pieDePrecentacion';
import { Nav } from './nav';
import { Primera } from './proyectos';
import { Aviso } from './Waning';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <div className='main'>
                <Nav/>
                <div className='Pagina'>
                        

                        <TotalP/>
                        
                        
                </div>
                <div className='Pagina'> 
                        
                        <Primera/>
                </div>
                <Aviso/>
        </div>
);
