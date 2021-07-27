import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button, Typography} from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const useStyles= makeStyles((theme) => ({
    root:{
        
      height: '100vh',
      backgroundColor: theme.palette.secondary.main,
      boxShadow: 'none',
    },
    grow:{
        flexGrow: 1
    },
    grow2:{
        flexGrow: 20
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
    buttonProximo:{
        backgroundColor:theme.palette.primary.main,
        color: theme.palette.secondary.main,
        borderRadius: '4px',
        height: '5vh',
    },
    buttonVoltar:{
        backgroundColor:theme.palette.secondary.main,
        borderRadius: '4px',
        height: '5vh',
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
            <Box mx="auto" p={5}>
                <Typography variant='caption' >
                    Como você gostaria que a gente lhe chame
                </Typography>
                <Toolbar>

                    <TextField
                        id="outlined-name"
                        variant="outlined"
                        placeholder="Seu nome"
                        style={{ margin: 8 }}
                        fullWidth

                        />
                </Toolbar>
                
                <div className={classes.grow2}/>
                
                <Box pt={20}>
                    <div >
                        <button className={classes.buttonVoltar}>
                        <IconButton>
                                <ArrowBackIosIcon fontSize="small"></ArrowBackIosIcon>
                            </IconButton>
                            
                            Voltar
                        </button>
                        
                        <button className={classes.buttonProximo}>
                            Próximo
                            <IconButton>
                                <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
                            </IconButton>
                            
                        </button>
                    </div>
                </Box>
            </Box>
        </div>

        
    );

}

export default Home;