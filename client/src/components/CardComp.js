import React,{ useState, useEffect} from 'react';
//NAVBAR or APPBAR
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';


//BUTTON CARD
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import Popper from '@material-ui/core/Popper';
import ShareIcon from '@material-ui/icons/Share';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Icon from '@material-ui/icons/Send';
import CssBaseLine from '@material-ui/core/CssBaseline';
import './cardcomp.css';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';

//CUSTOM STYLES
import useStyles from './HomeStyles';
import HideOnScroll from "./HideOnScroll"
import { Typography } from '@material-ui/core';
import { v4 as uuidV4 } from "uuid";
import Logo from './62.svg';
import backgroundFeatures from './productCurvyLines.png';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const font_header = createMuiTheme({
  typography: {
    fontFamily: [
      'Texturina',
      'serif',
    ].join(','),
  },});

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'blue',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blue',
      },
      '&:hover fieldset': {
        borderColor: 'cyan',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
      
    },
  },
})(TextField);

// function([string1, string2],target id,[color1,color2])    
const options = ['Join a interview','Create a session'];

export default function ButtonComp() {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [RoomId,setRoomId] =useState("");
  const classes = useStyles();
   const handleTextChange = (event) => {
    setRoomId(event.target.value);
  };

  //TEXT ANIMATION
  useEffect(() => {
    consoleText(['Collaborative', 'Easy', 'A bit fun'], 'text',['tomato','rebeccapurple','lightblue']);

    function consoleText(words, id, colors) {
      if (colors === undefined) colors = ['#fff'];
      var visible = true;
      var con = document.getElementById('console');
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id)
      target.setAttribute('style', 'color:' + colors[0])
      window.setInterval(function() {

        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function() {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function() {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount)
          letterCount += x;
        }
      }, 120)
      window.setInterval(function() {
        if (visible === true) {
          con.className = 'console-underscore hidden'
          visible = false;

        } else {
          con.className = 'console-underscore'

          visible = true;
        }
      }, 400)
    }
  })

  //CARD FUNCTIONING
  useEffect(() => {
    document.getElementById('meeting_id').disabled = true;
  }, []);


  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
    if(selectedIndex === 1)
    {
      setRoomId(uuidV4());
      document.getElementById('meeting_id').value = RoomId;
    }
    else if(selectedIndex === 0)
    {
      console.info('join');
    }
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setRoomId("");
    document.getElementById('meeting_id').value =RoomId;
    if(selectedIndex === 0)
    {
      console.info('create');
      document.getElementById('meeting_id').disabled = true;

    }
    else if(selectedIndex === 1)
    {
      console.info('join');
      document.getElementById('meeting_id').disabled = false;
    }

    setOpen(false); 
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const joinHandler = () => {
    window.location.href = `/${RoomId}`;
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={font_header}>
        <div className = {classes.parentFragment}>
        <CssBaseLine/>
          <HideOnScroll>
              <AppBar className={classes.appbar}>
                <Toolbar className={classes.appToolbar}>
                  <Typography variant="h4" color="inherit" className={classes.title}>
                    E-HIRE
                  </Typography>
                  <Typography variant="h6" color="inherit">Login</Typography>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
          </HideOnScroll>
          <Toolbar /> 
          <main>
            <div >
          
              <Grid direction="row" style={{minWidth:0,minHeight:0}} container>
              
                <Grid item container xs = {12} md={4} style={{justifyContent:"center",alignItems:"center"}}>
                  <Container maxWidth="xs" justify="center">
                  <div class='console-container'>
                    <span>Online Interviews made,</span><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
                  {/* <Typography variant="h4" className={classes.title}>
                    Online Interviews can now be Collaborative
                  </Typography>
                  <Toolbar/>*/}
                  <Typography variant="h5" className={classes.title}>
                    Have a chat and collaborate on your code at the same time.
                  </Typography> 
                  {/*ANCHOR FOR CARD COMP */}
                  <a href="#createSession"><button>Let's get started</button></a>
                  
                    {/* <Card className={classes.cardContainer} variant="outlined" raised>
                      <Grid className = {classes.root} container direction="column" alignItems="center">
                        <Grid item xs={12}>
                          <ButtonGroup size="medium" variant="outlined" color="primary" ref={anchorRef} aria-label="split button">
                            <Button size="medium" className={classes.button} onClick={handleClick}>{options[selectedIndex]}</Button>
                            <Button
                                className={classes.button}
                                color="primary"
                                size="medium"
                                aria-controls={open ? 'split-button-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-label="select merge strategy"
                                aria-haspopup="menu"
                                onClick={handleToggle}
                            >
                              <ArrowDropDownIcon />
                            </Button>
                          </ButtonGroup>
                          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                              <Grow
                                {...TransitionProps}
                                  style={{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                              >
                                <Paper elevation = {7} style={{zIndex:1,background:'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',}}>
                                  <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" >
                                      {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                          {option}
                                        </MenuItem>
                                      ))}
                                    </MenuList>
                                  </ClickAwayListener>
                                </Paper>
                              </Grow>
                            )}
                          </Popper>
                        </Grid>
                        <Grid item xs={12}>
                          <form  noValidate>
                            <CssTextField
                                  className={classes.margin}
                                  label="Meeting Link"
                                  variant="outlined"
                                  required
                                  size="small"
                                  value={RoomId} onChange={handleTextChange}
                                  id="meeting_id"
                            />
                          </form>
                        </Grid>
                        <Grid item xs={12}>
                          <ButtonGroup size="medium" variant="outlined" color="primary">
                            <Button
                                  variant="outlined"
                                  color="primary"
                                  className={classes.button}
                                  endIcon={<Icon></Icon>}
                                  onClick = {joinHandler}
                            >
                              Join
                            </Button>
                            <Button
                                  variant="outlined"
                                  color="primary"
                                  className={classes.button}
                                  endIcon={<ShareIcon/>}
                                  disabled
                            >
                              Share
                            </Button>
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                    </Card> */}
                  </Container>
                </Grid>
                <Grid item container xs={12} md={8}>
                    <img src={Logo} width="100%"></img>
                </Grid>
                
              </Grid>
            </div>
            <div className={classes.features} style={{backgroundImage:`url(${backgroundFeatures})`}}>
            <Typography variant="h4" align="center">FEATURES</Typography>
              <Toolbar/>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Grid spacing={2} container>
                    <Grid item xs={12} container>
                      <Avatar variant="circular" className={classes.square}>
                        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                      </Avatar>
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container className={classes.features_title}>
                    <Grid item xs={12} container>
                      <Typography variant="h6">Built for everyone</Typography>
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container>
                    <Grid item xs={12} container>
                      <Typography variant="body1" align="left">TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Grid spacing={2} container>
                    <Grid item xs={12} container>
                      <Avatar variant="circular" className={classes.square}>
                        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                      </Avatar>
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container className={classes.features_title}>
                    <Grid item xs={12} container>
                      <Typography variant="h6">Collaborative</Typography>
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container>
                    <Grid item xs={12} container>
                      <Typography variant="body1" align="left">TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Grid spacing={2} container>
                    <Grid item xs={12} container>
                      <Avatar variant="circular" className={classes.square}>
                        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                      </Avatar>
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container className={classes.features_title}>
                    <Grid item xs={12} container>
                      <Typography variant="h6">Remote Accessibility</Typography>
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container>
                    <Grid item xs={12} container>
                      <Typography variant="body1" align="left">TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Toolbar/>
              <Grid container spacing={2} alignItems="center" alignContent="center" justify="space-evenly">
                <Grid container item xs={12} sm={4} spacing={1}>
                  <Grid spacing={2} container>
                    <Grid item xs={12} container>
                      <Avatar variant="circular" className={classes.square}>
                        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                      </Avatar>
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container className={classes.features_title}>
                    <Grid item xs={12} container>
                      <Typography variant="h6">Free to Use</Typography>
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container>
                    <Grid item xs={12} container>
                      <Typography variant="body1" align="left">TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Grid spacing={2} container>
                    <Grid item xs={12} container>
                      <Avatar variant="circular" className={classes.square}>
                        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                      </Avatar>
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container className={classes.features_title}>
                    <Grid item xs={12} container>
                      <Typography variant="h6">Code With Your Team</Typography>
                    </Grid>
                  </Grid>
                  <Grid spacing={2} container>
                    <Grid item xs={12} container>
                      <Typography variant="body1" align="left">TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>

            <a name = "createSession"></a>
            <Grid item container xs = {12} style={{justifyContent:"center",alignItems:"center"}}>
                  <Container maxWidth="xs" justify="center">
                  
                    <Card className={classes.cardContainer} variant="outlined" raised>
                      <Grid className = {classes.root} container direction="column" alignItems="center">
                        <Grid item xs={12}>
                          <ButtonGroup size="medium" variant="outlined" color="primary" ref={anchorRef} aria-label="split button">
                            <Button size="medium" className={classes.button} onClick={handleClick}>{options[selectedIndex]}</Button>
                            <Button
                                className={classes.button}
                                color="primary"
                                size="medium"
                                aria-controls={open ? 'split-button-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-label="select merge strategy"
                                aria-haspopup="menu"
                                onClick={handleToggle}
                            >
                              <ArrowDropDownIcon />
                            </Button>
                          </ButtonGroup>
                          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                              <Grow
                                {...TransitionProps}
                                  style={{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                              >
                                <Paper elevation = {7} style={{zIndex:1,background:'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',}}>
                                  <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" >
                                      {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                          {option}
                                        </MenuItem>
                                      ))}
                                    </MenuList>
                                  </ClickAwayListener>
                                </Paper>
                              </Grow>
                            )}
                          </Popper>
                        </Grid>
                        <Grid item xs={12}>
                          <form  noValidate>
                            <CssTextField
                                  className={classes.margin}
                                  label="Meeting Link"
                                  variant="outlined"
                                  required
                                  size="small"
                                  value={RoomId} onChange={handleTextChange}
                                  id="meeting_id"
                            />
                          </form>
                        </Grid>
                        <Grid item xs={12}>
                          <ButtonGroup size="medium" variant="outlined" color="primary">
                            <Button
                                  variant="outlined"
                                  color="primary"
                                  className={classes.button}
                                  endIcon={<Icon></Icon>}
                                  onClick = {joinHandler}
                            >
                              Join
                            </Button>
                            <Button
                                  variant="outlined"
                                  color="primary"
                                  className={classes.button}
                                  endIcon={<ShareIcon/>}
                                  disabled
                            >
                              Share
                            </Button>
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                    </Card>
                  </Container>
                </Grid>

            <div className="testimonials">

            </div>
          </main>
          <footer className={classes.footer}>
            
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <Typography variant="h3">E-HIRE</Typography>
                <Typography variant="subtitle1"> Want to give or take interviews remotely and not loose the collaborative essence of it.</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Contact Us:</Typography>
                <br/>
                <Typography variant="subtitle1">Email :</Typography>  pr***********@gmail.com
                <br/>
                <Typography variant="subtitle1">Phone :</Typography> +919999999999
              </Grid>
            </Grid>
            
          </footer>
        </div>
      </ThemeProvider>
      
    </React.Fragment>
  );
}

//background: 'linear-gradient(-180deg,#30353e 30%,#4d76ba 90%)',