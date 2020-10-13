import  React  from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

const VideoList = () => {
    const videos = ['Video 1', 'Video 2',  'Video 3']
    return (
        <>
            <List>
                {videos.map(item => (
                    <ListItemText primary={item}></ListItemText>
                ))}
            </List>
        </>
    );

}

export default VideoList;
