import React from 'react'
import imgs from '../img/react2.png'
import '../style/inicio.css'

const Inicio = ()=>{
    return(
        <div className='card mx-auto F-Card'>
            <div className='card-body'>
                <div className='row center'>
                    <div className='col-6'>
                        <img src={imgs} className='col-6' />
                    </div>
                    <div className='col-6 F-Cart-Info'>
                        <h1>React (también llamada React. ... js o ReactJS)</h1>
                        <p>es una biblioteca Javascript de código abierto diseñada para crear
                            interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Inicio