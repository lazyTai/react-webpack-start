import React, { Component } from 'react'
import { Calendar } from './svg'
import {
  pick_calendar,
  icon_calendar, 
  calendar_time
} from './css/index.css'

export default class App extends Component {
  render() {
    return (
      <div className={pick_calendar}>
        <span className={icon_calendar}>
          <Calendar width="21" height="21" />
        </span>
        <span className={calendar_time}>2017-11-06</span>
      </div>
    )
  }
}
