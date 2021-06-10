import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { compareAsc, format } from 'date-fns'
import { DivComponent } from './styles'

function Calendar() {

  const [selectedDay, setSelectedDay] = useState<any>(null)

  const birthdays: any = {
    3: ['Mirko', 'Gianni'],
    8: ['Elena'],
    9: ['Irene'],
    12: ['Paolo', 'Giorgia'],
    18: ['Claudia'],
    22: ['Maria', 'Luigi'],
    25: ['Simone'],
    26: ['Marta'],
  };

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

  function renderDay(day: Date) {
    const date = day.getDate();
    const dateStyle = {
      position: 'absolute',
      color: 'lightgray',
      bottom: 0,
      right: 0,
      fontSize: 20,
    } as const;
    const birthdayStyle = { fontSize: '0.8em', textAlign: 'left' } as const;
    const cellStyle = {
      height: 50,
      width: 50,
      position: 'relative',
    } as const;
    return (
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
        {birthdays[date] &&
          birthdays[date].map((name: any, i: number) => (
            <div key={i} style={birthdayStyle}>
              🎁 {name}
            </div>
          ))}
      </div>
    );
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
                className="Birthdays"
                renderDay={renderDay}
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