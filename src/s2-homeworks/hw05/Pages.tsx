import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import {Layout} from "./layout/Layout";

export const PATH = {
    PRE_JUNIOR: '/pre_junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus',
}

function Pages() {

    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={'*'} element={<Error404/>} />
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>} />
                <Route path={PATH.JUNIOR} element={<Junior/>} />
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>} />
            </Routes>
        </div>
    )
}

export default Pages
