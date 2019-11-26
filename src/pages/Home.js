import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid, Container,
} from '@material-ui/core/'
import StyledCard from '../components/card';
import { getListAsteroids } from '../utils/fetch';
import Loader from '../components/loader';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

const Home = (props) => {
    const classes = useStyles();
    const [neoData, setNeoData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('insdie home useeffect')
        setLoading(true);
        getListAsteroids()
            .then( res => {
                setNeoData(res.near_earth_objects)
                setLoading(false);
            })
            .catch( err => console.log(err));
    },[setNeoData])
    return(
        <Container maxWidth="md">
             <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {
                        neoData && neoData.map((data, index) => <StyledCard key={index} data={data} /> )
                    }
                </Grid>
            </div>
            {
                loading && <Loader />
            }
        </Container>
    )
}

export default Home;