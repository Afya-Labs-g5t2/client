import React from 'react';
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar: React.FC = () => {
    return (
        <div className="calendar">
            <FullCalendar
                plugins={[daygridPlugin]}
            />
        </div>
    )
}

export default Calendar;