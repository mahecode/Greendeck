import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function FormInput(props) {
  const classes = useStyles();
  const { error, helperText, handleInput } = props;
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
            style={{width: 280}}
            error={error}
            id="outlined-error-helper-text"
            label={`${error ? 'error': 'Search'}`}
            helperText={helperText}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={(e) => handleInput(e.target.value)}
        />
      </div>
    </form>
  );
}
