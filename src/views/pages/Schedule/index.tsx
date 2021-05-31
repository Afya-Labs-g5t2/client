import React from 'react';
import Calendar from '../../../components/Calendar'

const Schedule: React.FC = () => {
    return (
        <div className="schedule">
            <div className="top"></div>
            <div className="mid">
                <Calendar />
            </div>
            <div className="bot"></div>
        </div>
    )
}

export default Schedule;