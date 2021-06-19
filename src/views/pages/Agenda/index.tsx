import React, { useState } from 'react';
import Menu from '../../../components/Menu'
import Calendar from '../../../components/Calendar'
import NavBar from '../../../components/NavBar'
import ModalAgendamento from '../../../components/ModalAgendamento'

import { DivComponent } from './styles'
import Loading from '../../../components/Loading';

const Agenda: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    
    return (
        <DivComponent >
        <div className="agenda-container page-container">
            <div className="top top-container">
                <NavBar />
            </div>
            <div className="mid content-container">
                <Calendar />
            </div>
            <div className="bot bot-container">
                <Menu />    
            </div>
        </div>
        </DivComponent>
    )
}

export default Agenda;