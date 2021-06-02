import React from 'react';
import Calendar from '../../../components/Calendar'
import Menu from '../../../components/Menu'

import { DivComponent } from './styles'

const Agenda: React.FC = () => {
    return (
        <DivComponent >
        <div className="agenda">
            <div className="top">TOP</div>
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