import React from 'react'
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const Videos  = () =>{
    const video = ["video 1", "video 2", "video 3", "video 4", "video 5", "video 6"];
    return(
        <div>
            <List>
                {video.map(vid => {
                   return(
                       <ListItem button>
                           <ListItemIcon>
                               <PlayCircleFilledIcon />
                           </ListItemIcon>
                           <ListItemText>{vid}</ListItemText>
                       </ListItem>
                   )
                }) }
            </List>
        </div>
    )
}


export default Videos;