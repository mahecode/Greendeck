import React from 'react';
import { Typography, Container, Grid, Fab, makeStyles } from '@material-ui/core';
import DatePicker from '../components/date-picker';
import RightArrowIcon from '@material-ui/icons/KeyboardArrowRight';
import { convertDate } from "../utils/utils";
import { getFeedsByDate } from '../utils/fetch';
import StyledCard from '../components/card';
import SnackBars from '../components/snack';
import Loader from '../components/loader';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

const Feeds = () => {
    const [startDate, setstartDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [endDate, setEndDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [feeds, setFeeds] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const submit = () => {
        setLoading(true);
        setError('');
        getFeedsByDate(convertDate(startDate), convertDate(endDate))
        .then( res => {
            if(res.code === 400)  {
                setError(res.error_message);
                setOpen(true);
                setLoading(false);
                return;
            }
            setFeeds(res.near_earth_objects);
            setLoading(false);
        })
        .catch(err => {
            console.log(err)
            setLoading(false);
        });
    }
   
    return (
      <Container>
        <Typography
          style={{ paddingTop: 20 }}
          align="center"
          variant="h3"
          gutterBottom
        >
          Browse feeds by date
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <DatePicker
            label="Start Date"
            selectedDate={startDate}
            handleDateChange={date => setstartDate(date)}
          />
          <DatePicker
            label="End Date"
            selectedDate={endDate}
            handleDateChange={setEndDate}
          />
          <Grid>
            <Fab
              color="primary" 
              aria-label="add" 
              className={classes.margin}
              onClick={submit}
            >
              <RightArrowIcon className={classes.extendedIcon} />
            </Fab>
          </Grid>
        </Grid>
            {!error ? <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {
                        Object.keys(feeds).length !== 0 
                        && 
                        Object.keys(feeds).map(ele => {
                            return feeds[ele].map((data, index) => <StyledCard key={index} data={data} />)
                        })
                    }
                </Grid>
            </div>
            :
                <SnackBars
                    message={error}
                    setOpen={setOpen}
                    open={open}
                />
            }
            {
                loading && <Loader />
            }
      </Container>
    );
}

export default Feeds;