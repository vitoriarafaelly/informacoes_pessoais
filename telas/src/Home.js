import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button, Typography} from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Box from '@material-ui/core/Box';


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
    backgroundBox:{
        backgroundColor:'#F8F8FF',
    }
  
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

            <Box p={8} className={classes.backgroundBox}>
                <Toolbar>
                    <Typography variant='h5' color='textPrimary'
                     style={{fontWeight:600}}
                      className={classes.icons}>
                        Nome social
                    </Typography>
                </Toolbar>

            </Box>

        </div>

        
    );

}

export default Home;