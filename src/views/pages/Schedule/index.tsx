import React from 'react';
import Calendar from '../../../components/Calendar'

const Schedule: React.FC = () => {
    return (
        <div className="schedule">
            <div className="top">TOP</div>
            <div className="mid">
                <Calendar />
            </div>
            <div className="bot">BOTTOM</div>
        </div>
    )
}

export default Schedule;