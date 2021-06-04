import React, { useCallback, useRef } from 'react';

import { DivComponent } from './styles'

import TUICalendar from "@toast-ui/react-calendar";
import { ISchedule, ICalendarInfo } from "tui-calendar";

import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));
const schedules: ISchedule[] = [
  {
    calendarId: "1",
    category: "time",
    isVisible: true,
    title: "Study",
    id: "1",
    body: "Test",
    start,
    end
  },
  {
    calendarId: "2",
    category: "time",
    isVisible: true,
    title: "Meeting",
    id: "2",
    body: "Description",
    start: new Date(new Date().setHours(start.getHours() + 1)),
    end: new Date(new Date().setHours(start.getHours() + 2))
  }
];

const calendars: ICalendarInfo[] = [
  {
    id: "1",
    name: "Joao",
    color: "#ffffff",
    bgColor: "#9e5fff",
    dragBgColor: "#9e5fff",
    borderColor: "#9e5fff"
  },
  {
    id: "2",
    name: "Felix",
    color: "#ffffff",
    bgColor: "#00a9ff",
    dragBgColor: "#00a9ff",
    borderColor: "#00a9ff"
  }
];

function Calendar() {
    const cal = useRef<any>(null);
  
    const onClickSchedule = useCallback((e) => {
      const { calendarId, id } = e.schedule;
      const el = cal.current.calendarInst.getElement(id, calendarId);
  
      console.log(e, el.getBoundingClientRect());
    }, []);
  
    const onBeforeCreateSchedule = useCallback((scheduleData) => {
      console.log(scheduleData);
  
      const schedule = {
        id: String(Math.random()),
        title: scheduleData.title,
        isAllDay: scheduleData.isAllDay,
        start: scheduleData.start,
        end: scheduleData.end,
        category: scheduleData.isAllDay ? "allday" : "time",
        dueDateClass: "",
        location: scheduleData.location,
        raw: {
          class: scheduleData.raw["class"]
        },
        state: scheduleData.state
      };
  
      cal.current.calendarInst.createSchedules([schedule]);
    }, []);
  
    const onBeforeDeleteSchedule = useCallback((res) => {
      console.log(res);
  
      const { id, calendarId } = res.schedule;
  
      cal.current.calendarInst.deleteSchedule(id, calendarId);
    }, []);
  
    const onBeforeUpdateSchedule = useCallback((e) => {
      console.log(e);
  
      const { schedule, changes } = e;
  
      cal.current.calendarInst.updateSchedule(
        schedule.id,
        schedule.calendarId,
        changes
      );
    }, []);
  
    function _getFormattedTime(time: any) {
      const date = new Date(time);
      const h = date.getHours();
      const m = date.getMinutes();
  
      return `${h}:${m}`;
    }
  
    function _getTimeTemplate(schedule: any, isAllDay: any) {
      var html = [];
  
      if (!isAllDay) {
        html.push("<strong>" + _getFormattedTime(schedule.start) + "</strong> ");
      }
      if (schedule.isPrivate) {
        html.push('<span class="calendar-font-icon ic-lock-b"></span>');
        html.push(" Private");
      } else {
        if (schedule.isReadOnly) {
          html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
        } else if (schedule.recurrenceRule) {
          html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
        } else if (schedule.attendees.length) {
          html.push('<span class="calendar-font-icon ic-user-b"></span>');
        } else if (schedule.location) {
          html.push('<span class="calendar-font-icon ic-location-b"></span>');
        }
        html.push(" " + schedule.title);
      }
  
      return html.join("");
    }
  
    const templates = {
      time: function (schedule: any) {
        console.log(schedule);
        return _getTimeTemplate(schedule, false);
      }
    };
  
    return (
        <div className="calendar-container">
            <DivComponent>
                <h1>Agenda</h1>
                <TUICalendar
                ref={cal}
                height="400px"
                view="week"
                useCreationPopup={true}
                useDetailPopup={true}
                template={templates}
                calendars={calendars}
                schedules={schedules}
                onClickSchedule={onClickSchedule}
                onBeforeCreateSchedule={onBeforeCreateSchedule}
                onBeforeDeleteSchedule={onBeforeDeleteSchedule}
                onBeforeUpdateSchedule={onBeforeUpdateSchedule}
                taskView={false}
                scheduleView={['time']}
                />
            </DivComponent>
        </div>
    );
  }

export default Calendar;