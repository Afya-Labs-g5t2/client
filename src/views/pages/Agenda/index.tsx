import React, { useState } from 'react';
import Menu from '../../../components/Menu'
import Calendar from '../../../components/Calendar'
import NavBar from '../../../components/NavBar'
import ModalAgendamento from '../../../components/ModalAgendamento'

import { DivComponent } from './styles'

const Agenda: React.FC = () => {
    const [showModal, setShowModal] = useState(false)

    
    return (
        <DivComponent >
        <div className="agenda-container">
            {/* {showModal ?
            <ModalAgendamento showModal={showModal} setShowModal={setShowModal} />
            :
            null
            } */}
            <div className="top">
                <NavBar />
            </div>
            <div className="mid">
                <Calendar />
            </div>
            <div className="bot">
                <Menu />    
            </div>
        </div>
        </DivComponent>
    )
}

export default Agenda;