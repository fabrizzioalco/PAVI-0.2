import {
    createStyles,
    Divider,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Theme,
    useTheme
} from '@material-ui/core';
import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {makeStyles} from "@material-ui/core/styles";

export const SideBar = () =>{

    const classes = useStyles();
    const theme = useTheme();
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['Video 1', 'Video 2', 'Video 3', 'Video 4'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText className={classes.text} primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    )
    // @ts-ignore
    // const container = window === undefined ? undefined : () => window().document.body;
    return(


        <>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('lg')]: {
                width: 600,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${600}px)`,
                marginLeft: 100,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('lg')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: 300,
            background: "#040F16"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        text:{
            color: "#FFFFFF"
        }
    }),
);
