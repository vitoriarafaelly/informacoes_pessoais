import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button, Typography} from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';


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
        backgroundColor:'#EEEEE0',
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

            <Box p={7} className={classes.backgroundBox}>
                <Toolbar>
                    <Typography variant='h5' color='textPrimary'
                     style={{fontWeight:600}}
                      className={classes.icons}>
                        Nome social
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <Typography variant='h6' color='textPrimary'
                     style={{fontWeight:600}}
                      className={classes.icons}>
                        xxxxxxxxxxxx
                    </Typography>
                </Toolbar>

            </Box>
            <Box p={13}>
                <Toolbar>
                    <Typography variant='body2'>
                        Teste
                    </Typography>
                    <TextField
                        helperText="Como gostaria que a gente lhe chame"
                        id="outlined-password-input"
                        label="Seu nome"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        />
                </Toolbar>

            </Box>

        </div>

        
    );

}

export default Home;