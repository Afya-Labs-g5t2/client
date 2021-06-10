import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { compareAsc, format } from 'date-fns'
import { DivComponent } from './styles'

function Calendar() {

  const [selectedDay, setSelectedDay] = useState<any>(null)

  const WEEKDAYS_SHORT = {
    pt: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa'],
  };

  const MONTHS  = {
    pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  };

  const WEEKDAYS_LONG = {
    pt: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  };

  const FIRST_DAY_OF_WEEK = {
    pt: 1,
  };

  const LABELS = {
    pt: { nextMonth: 'Próximo mês', previousMonth: 'Mês anterior' },
  };

  function handleDayClick(day: {}, { selected }: any) {

    selected ? setSelectedDay(undefined) : setSelectedDay(day)
    
    console.log(typeof(day))
    console.log(typeof(selected))
  }
    
  return (
      <div className="calendar-container">
          <DivComponent>
              <h1>Agenda</h1>
              <DayPicker
                months={MONTHS['pt']}
                weekdaysLong={WEEKDAYS_LONG['pt']}
                weekdaysShort={WEEKDAYS_SHORT['pt']}
                firstDayOfWeek={FIRST_DAY_OF_WEEK['pt']}
                labels={LABELS['pt']}
                showOutsideDays
                month={new Date()}
                selectedDays={selectedDay}
                onDayClick={handleDayClick}
              />
              <p>
              {selectedDay
                ? format(selectedDay, 'yyyy-MM-dd')
                : 'Please select a day 👻'}
            </p>
          </DivComponent>
      </div>
  );
}

export default Calendar;