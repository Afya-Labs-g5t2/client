import React from 'react';
import Calendar from '../../../components/Calendar'

const Agenda: React.FC = () => {
    return (
        <div className="agenda">
            <div className="top">TOP</div>
            <div className="mid">
                <Calendar />
            </div>
            <div className="bot">BOTTOM</div>
        </div>
    )
}

export default Agenda;