import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import logo from "./logo.svg";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const rnd = n => Math.floor((n + 1) * Math.random())
const rndDay = () => rnd(30) + 1
const rndHour = () => rnd(14) + 6
const rndDuration = () => rnd(3) + 1

const events = []
for(let id = 1 ; id <= 200 ; id++) {
  const day = rndDay()
  const stHour = rndHour()
  const endHour = stHour + rndDuration()
  events.push({
    id,
    allDay: false,
    title: 'Event ' + id,
    start: new Date(2018, 4, day, stHour, 0, 0, 0),
    end: new Date(2018, 4, day, endHour, 0, 0, 0)
  })
}

class App extends Component {
  state = {
    events
    // : [
    //   // {
    //   //   start: new Date(),
    //   //   end: new Date(moment().add(1, "days")),
    //   //   title: "Some title"
    //   // },
    //   {
    //     id: 1,
    //     title: 'Meeting',
    //     allDay: false,
    //     start: new Date(2018, 4, 23, 10, 30, 0, 0),
    //     end: new Date(2018, 4, 23, 15, 30, 0, 0),
    //     desc: 'Pre-meeting meeting, to prepare for the meeting',
    //   },
    //   {
    //     id: 2,
    //     title: 'Concert',
    //     allDay: false,
    //     start: new Date(2018, 4, 23, 11, 30, 0, 0),
    //     end: new Date(2018, 4, 23, 14, 30, 0, 0),
    //     desc: 'Pre-meeting meeting, to prepare for the meeting',
    //   },
    //   {
    //     id: 3,
    //     title: 'After work',
    //     allDay: false,
    //     start: new Date(2018, 4, 23, 11, 30, 0, 0),
    //     end: new Date(2018, 4, 23, 23, 30, 0, 0),
    //     desc: 'Pre-meeting meeting, to prepare for the meeting',
    //   }
    // ]
  };

  render() {
    return (
      <div className="App">
        <Calendar
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default App;
