import React, { useCallback, useRef } from 'react';
import { DivComponent } from './styles'

function Calendar() {
    
    return (
        <div className="calendar-container">
            <DivComponent>
                <h1>Agenda</h1>
            </DivComponent>
        </div>
    );
  }

export default Calendar;