import React from 'react'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'

const StyledCard = (props)=>{
    const { name, absolute_magnitude_h, estimated_diameter, close_approach_data } = props.data;
    console.log(props)
    return (
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              title={`Asteroid: ${name}`}
              subheader={`Estimated Diamter : ${estimated_diameter.kilometers.estimated_diameter_max}`}
            />
            <CardContent>
            {close_approach_data[0] && <Typography variant="h5" gutterBottom>
            Closest approach date: {close_approach_data[0].close_approach_date_full}
              </Typography>}
              <Typography variant="h5" gutterBottom>
                Magnitude: {absolute_magnitude_h}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    );
}

export default StyledCard;