import React from 'react';


import { DivComponent } from './styles'

const Calendar: React.FC = () => {

    const handleDateClick = (dateClickInfo: any) => {
        alert(dateClickInfo.dateStr)
    }

    return (
        <DivComponent>
            <div className="calendar-container">
                    {/* <FullCalendar
                        locale={'pt'}
                        plugins={[daygridPlugin, interactionPlugin ]}
                        dateClick={handleDateClick}
                        headerToolbar={{left: 'title', center: 'today', right: 'prev,next'}} //right: 'prevYear,prev,next,nextYear'
                        events={[
                            { title: 'event 1', date: '2021-05-01' },
                            { title: 'event 2', date: '2021-05-02' }
                        ]}
                        
                    />   */}
            </div>
        </DivComponent>
    )
}

export default Calendar;