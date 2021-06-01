import React from 'react';
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import { DivComponent } from './styles'

const Calendar: React.FC = () => {

    

    const handleDateClick = (dateClickInfo: any) => {
        alert(dateClickInfo.dateStr)
    }

    return (
        <DivComponent>
            <div className="calendar">
                
                    <FullCalendar
                        plugins={[daygridPlugin, interactionPlugin ]}
                        dateClick={handleDateClick}
                        headerToolbar={{left: 'dayGridMonth,timeGridWeek,timeGridDay custom1', center: 'title', right: 'custom2 prevYear,prev,next,nextYear'}}
                        events={[
                            { title: 'event 1', date: '2021-05-01' },
                            { title: 'event 2', date: '2021-05-02' }
                        ]}
                    />
                
            </div>
        </DivComponent>
    )
}

export default Calendar;