import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from "./screens/home/homeScreen";
import Contato from "./components/contato/contato";
function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomeScreen/>}></Route>
                <Route exact path='/contato' element={<Contato/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas