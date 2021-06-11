import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { compareAsc, format } from 'date-fns'
import { DivComponent } from './styles'

function Calendar() {

  const [selectedDay, setSelectedDay] = useState<any>(null)

  const birthdays: any = {
    3: ['Mirko', 'Gianni', 'Mirko', 'Gianni', 'Gianni', 'Mirko', 'Gianni'],
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
      bottom: 0,
      right: 0,
      fontSize: '1rem',
      wordWrap: 'break-word',
    } as const;
    const birthdayStyle = { fontSize: '0.6em', textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'center' } as const;
    const cellStyle = {
      height: '100%',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid lightgray'
    } as const;
    return (
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
        {birthdays[date] &&
          birthdays[date].map((name: any, i: number) => (
            <div key={i} style={birthdayStyle}>
              <div className="circle-agendamento"></div>
              {name}
            </div>
          ))}
      </div>
    );
  }

  const cardConsulta =
    <div className="consulta-paciente-card">
      <div className="top-section-wrapper">
        <div className="time-wrapper">
          <span className="time-value">10:20</span>
        </div>
        <div className="especialista-container">
          <span className="especialista-nome">Renato da Silva</span>
        </div>
      </div>
      <div className="paciente-container">
        <span>Paciente: </span>
        <span>Joao Aparecido</span>
      </div>
    </div>
    
  return (
    <DivComponent>
      <div className="calendar-container">
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
        <div className="consultas-selecionadas-container">
          {cardConsulta}
          {cardConsulta}
        </div>
        
      </div>
    </DivComponent>
  );
}

export default Calendar;