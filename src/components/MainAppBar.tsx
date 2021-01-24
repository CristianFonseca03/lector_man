import React from "react";
//Libraries
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
//Context
//import {useData} from "../context/DataContext";
//Styles
const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    },
}));

const MainAppBar = (): any => {
    const classes = useStyles();
    return <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Lector_man
            </Typography>
        </Toolbar>
    </AppBar>
}

export default MainAppBar;
