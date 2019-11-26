import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Grid } from '@material-ui/core';

export default function DatePicker(props) {

  return (
    <Grid item xs>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label={props.label}
            format="MM/dd/yyyy"
            value={props.selectedDate}
            onChange={date => props.handleDateChange(date)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
      </MuiPickersUtilsProvider>
    </Grid>
  );
}