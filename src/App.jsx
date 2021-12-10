//import React, { useState } from 'react'
import React from 'react'
import Inicio from './components/Inicio'
import Otro from './components/Otro'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

const esty ={
    padding: 6
}

// const App = ()=>{

//     const [pagina, setPagina] = useState('inicio')

//     const estado = ()=>{
//         if(pagina === 'inicio'){
//             return <Inicio />
//         }else if(pagina === 'otro'){
//             return <Otro />
//         }
//     }

//     const topage = (page)=>{
//         // console.log(page);
//         window.history.pushState(null,'',`/${page}`)
//         setPagina(page)
//     }

//     return(
//         <div>
//             <Link href="#" onClick={()=>topage('inicio')} style={esty}> Inicio</Link>
//             <Link href="#" onClick={()=>topage('otro')} style={esty}>Otra</Link>

//             {estado()}
//         </div>
        
//     )
// }

/////////////////////// router react ////////////////////

const App = ()=>{

   

    return(
        <BrowserRouter>
            <Link to="/inicio"  style={esty}> Inicio</Link>
            <Link to="/otro"  style={esty}>Otro</Link>

            {/* inicio navbar bootstrap  */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to='/inicio' className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to='/inicio' className="nav-link active" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/otro' className="nav-link" href="#">Otro</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/otro' className="nav-link" href="#">Pricing</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/otro' className="nav-link disabled">Disabled</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            {/* fin navbar bootstrap  */}

            <Routes>
                <Route path='/otro' element={<Otro />}/>
                <Route path='/inicio' element={<Inicio />}/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default App