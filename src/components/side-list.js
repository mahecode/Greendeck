import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ViewModule from '@material-ui/icons/ViewModule';
import List from '@material-ui/core/List';
import { makeStyles, Divider } from '@material-ui/core';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

const SideList = (props) => {
  const classes = useStyles();
    return (
      <div
        className={classes.list}
        role="presentation"
      >
        <List>
        <ListItem onClick={() => props.history.push('/')} button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem onClick={() => props.history.push('/feeds')} button>
                <ListItemIcon>
                    <ViewModule />
                </ListItemIcon>
                <ListItemText primary="Neo - Feed" />
          </ListItem>
          <Divider />
          <ListItem onClick={() => props.history.push(`/search`)} button>
                <ListItemIcon>
                    <FindInPageIcon />
                </ListItemIcon>
                <ListItemText primary="Neo Search" />
          </ListItem>
        </List>
      </div>
    );
};

  export default withRouter(SideList);