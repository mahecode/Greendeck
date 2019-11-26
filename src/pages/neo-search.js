import React, { useState } from 'react';
import { Typography, Container, Button, Grid, makeStyles, Icon } from '@material-ui/core';
import FormInput from '../components/form-input';
import { searchAsteroidById } from '../utils/fetch';
import Loader from '../components/loader';
import StyledCard from '../components/card';
import SnackBar from '../components/snack';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
}));

const NeoSearch = () => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);
    const [data, setData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const submit = () => {
        setLoading(true);
        if(!search) {
            setError(true);
            setLoading(false);
            return;
        }
        searchAsteroidById(search)
            .then(res => {
                if(res === 404 || res === 400) {
                    setOpen(true);
                    setErrorMessage('Please enter valid id.');
                    setLoading(false);
                    return;
                }
                setData(res);
                setLoading(false);
            })
            .catch(err => err);
    }
    return (
      <Container>
        <Typography
          style={{ paddingTop: 20 }}
          align="center"
          variant="h3"
          gutterBottom
        >
          Neo search
        </Typography>
        <Grid container direction="row" justify="center">
          <Grid item xs={3}>
            <FormInput 
                error={error}
                helperText={`${error ? 'Invalid Input': ''}`}
                handleInput={setSearch}
            />
          </Grid>
          <Grid style={{ paddingTop: 15 }} item xs={3}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
              onClick={submit}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {
                        Object.keys(data).length !== 0 && <StyledCard data={data} /> 
                    }
                </Grid>
            </div>
        {
            loading && <Loader />
        }
        {
            open && <SnackBar open={open} setOpen={setOpen} message={errorMessage} />
        }
      </Container>
    );
}

export default NeoSearch;