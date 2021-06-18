import React, { useRef, useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { compareAsc, format, parse } from 'date-fns'
import { DivComponent } from './styles'
import mockData from '../../mockData'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

interface EspecialistaProps {
  nome: string
}

interface PacienteProps {
  nome: string
}

interface atendimentosProps {
  data_agendamento: string,
  data_atendimento: string,
  hora_atendimento: string,
  id: number,
  id_especialista: number,
  id_paciente: number,
  status: string,
  valor: number,
  paciente: PacienteProps,
  especialista: EspecialistaProps
}

function Calendar() {

  const [apiData, setApiData] = useState<[atendimentosProps] | []>([])
  const [selectedDay, setSelectedDay] = useState<any>(null)
  const [dataSent, setDataSent] = useState<boolean>(false)
  const [agendamento, setAgendamento] = useState<any>({})
  const [selectedMonth, setSelectedMonth] = useState<string>(format(new Date(), 'MMMM'))

  // useEffect(() => {
  //   api.get("atendimentos")
  //     .then(res => {
  //       setApiData(res.data)
  //     })
  //     .catch(console.error)
  // }, [])

  useEffect(() => {
    api.get('atendimentos')
      .then(res => {
        setApiData(res.data)
        setDataSent(true)
        let daysList: any = uniqueDays()
        let myObj = createTodayApointmentsObject(daysList)
        setAgendamento(addApointmentsToDayList(daysList, myObj))
      })
      .catch(console.error)
    
  }, [selectedDay, selectedMonth, dataSent])

  // const agendamento2: any = {
  //   1: ['Mirko', 'Gianni', 'Mirko', 'Gianni', 'Gianni', 'Mirko', 'Gianni'],
  //   8: ['Elena'],
  //   9: ['Irene'],
  //   12: ['Paolo', 'Giorgia'],
  //   18: ['Claudia'],
  //   22: ['Maria', 'Luigi'],
  //   25: ['Simone'],
  //   26: ['Marta'],
  // };

  // const agendamento2: any = mockData.agendamento.map(el => {
  //   Number(format(parse(el.data, 'YYYY-MM-DD', new Date()), 'd')) []
  // })

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
  }

  function uniqueDays() {
    let daysList: any = []
    for (let i=0; i < apiData.length; i++) {
      let parseValueToDate = parse(apiData[i].data_atendimento, 'yyyy-MM-dd', new Date())
      let formatedToMonth = format(parseValueToDate, 'MMMM')
      if (!daysList.includes(apiData[i].data_atendimento) && formatedToMonth === selectedMonth) {
        daysList.push(apiData[i].data_atendimento)
      }
    }
		return daysList
  }

  function createTodayApointmentsObject(myDates: []) {
    let obj: any = {}
    for (let i=0; i < myDates.length; i++) {
      let formatedDate = parse(myDates[i], "yyyy-MM-dd", new Date())
      let myKey = format((formatedDate), 'd')
      obj[myKey] = []
    }
    return obj
  }

  function addApointmentsToDayList(myDates: Array<any>, obj: any) {
    for (let i=0; i < myDates.length; i++) {
      for (let j =0; j < apiData.length; j++) {
        let formatedDate = parse(myDates[i], "yyyy-MM-dd", new Date())
        let dayOnlyDate = format((formatedDate), 'd')
        myDates[i].includes(apiData[j].data_atendimento) && obj[dayOnlyDate].push(apiData[j].especialista?.nome)
      }
    }
    return obj
  }

  function handleCardClick(e: any) {
    console.log(e.target.id)
  }

  
  function Navbar({
    nextMonth,
    previousMonth,
    onPreviousClick,
    onNextClick,
    className,
    localeUtils,
  }: any) {
    const months = localeUtils.getMonths();
    const prev = months[previousMonth.getMonth()];
    const next = months[nextMonth.getMonth()];
    function handleLeftClick() {
      setSelectedMonth(prev)
      onPreviousClick()
    }
    function handleRightClick() {
      setSelectedMonth(next)
      onNextClick()
    }
    return (
      <div className={className}>
        <span className='DayPicker-NavButton DayPicker-NavButton--prev' role="button" onClick={() => handleLeftClick()}>
        </span>
        <span className='DayPicker-NavButton DayPicker-NavButton--next' role="button" onClick={() => handleRightClick()}>
        </span>
      </div>
    );
  }

  function renderDay(day: Date) {
    const date = day.getDate();
    const dateStyle = {
      position: 'absolute',
      bottom: 0,
      right: 0,
      fontSize: '1rem',
      overflowWrap: 'break-word',
    } as const;
    const agendamentoStyle = { fontSize: '0.6rem', textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'center' } as const;
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
        {agendamento[date] &&
          agendamento[date].map((name: any, i: number) => (
            <div key={i} style={agendamentoStyle}>
              <div className="circle-agendamento"></div>
              <span className="especialista-nome" style={{overflowWrap: 'break-word', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{name}</span>
            </div>
          ))}
      </div>
    )
  }

  const cardConsulta = apiData.map((el: atendimentosProps) => el.data_atendimento === (selectedDay && format(selectedDay, 'yyyy-MM-dd')) ?
      <Link to={`agendamentos/${el.id}`} key={el.id} id={`${el.id}`} className="consulta-paciente-card" onClick={handleCardClick}>
        <div className="top-section-wrapper">
          <div className="time-wrapper">
            <span className="time-value">{el.hora_atendimento}</span>
          </div>
          <div className="especialista-container">
            <span className="especialista-nome">{el.especialista?.nome}</span>
          </div>
        </div>
        <div className="paciente-container">
          <span>Paciente: </span>
          <span>{el.paciente?.nome}</span>
        </div>
      </Link> : 
      null
     )
     
  return (
    <DivComponent>
      <div className="calendar-container">
        <DayPicker
          months={MONTHS['pt']}
          weekdaysLong={WEEKDAYS_LONG['pt']}
          weekdaysShort={WEEKDAYS_SHORT['pt']}
          firstDayOfWeek={FIRST_DAY_OF_WEEK['pt']}
          labels={LABELS['pt']}
          month={new Date()}
          selectedDays={selectedDay}
          showOutsideDays
          onDayClick={handleDayClick}
          className="Birthdays"
          renderDay={renderDay}
          navbarElement={<Navbar />}
        />
        <p>
        {selectedDay
          ? 'Agendamentos do dia'
          : 'Nenhum agendamento'}
        </p>
        <div className="consultas-selecionadas-container">
          {cardConsulta}
        </div>
        
      </div>
    </DivComponent>
  );
}

export default Calendar;