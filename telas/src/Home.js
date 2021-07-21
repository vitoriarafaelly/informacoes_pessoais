import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button} from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const useStyles= makeStyles((theme) => ({
    root:{
        
      height: '100vh',
      backgroundColor: theme.palette.secondary.main,
      boxShadow: 'none',
    },
    grow:{
        flexGrow: 1
    },
    btcancelar:{
        color: theme.palette.primary.main,
        backgroundColor:theme.palette.secondary.main,
        padding: 2,
        fontSize: 13,
        padding: 3,
        textTransform: 'none',
        borderRadius: '4px',
        height: '5vh',
    },
    icons:{
        color:theme.palette.primary.main,   
    },
    textCancel:{
        paddingRight: '1px',
    },
  
  }));

function Home() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar >
            <Toolbar>
                <img src="/images/logo_empresa.png"/>
                <div className={classes.grow}/>
                <Button className={classes.btcancelar} variant="contained" >
                    <IconButton size="medium">
                        <CloseRoundedIcon className={classes.icons}/>
                    </IconButton>
                    <div className={classes.textCancel}>
                        Cancelar
                    </div>
                    
                </Button>
            </Toolbar>
            </AppBar>

        </div>
    );

}

export default Home;