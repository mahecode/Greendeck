import React  from 'react';
import Drawer from '@material-ui/core/Drawer';
import SideList from './side-list';


const LeftDrawer = (props) => {
   
    return(
        <Drawer open={props.open} onClose={() => props.setOpenDrawer(false)}>
            <SideList  />
        </Drawer>
    )
}

export default LeftDrawer;