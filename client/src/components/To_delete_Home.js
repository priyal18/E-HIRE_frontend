import React, { useState, useEffect } from "react";
import ReactDOM, { render } from 'react-dom';
import { v4 as uuidV4 } from "uuid";
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import "../css/Home.css";
import Join from "./Join";
import Create from "./Create";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));



const createSession=(roomId)=>{
   const joinHandler =(roomId) => {
     window.location.href = `/${roomId}`;
   }; 

  // const element = <div>
  //                   <p>Create</p>
  //                   <div>
  //                     <label>{roomId}</label>
  //                     <div>
  //                       <button>Share</button>
  //                       <button onClick={window.location.href = `/${roomId}`}>Join</button>
  //                       <a href="window.location.href = `/${roomId}`">Join</a>
  //                     </div>
  //                   </div>

  //                   <p className='back' onClick={() => (window.location.href = "/")}>
  //                     Back
  //                   </p>
  //                 </div>;

  const element = <button onClick = {joinHandler}>Join</button>;
  ReactDOM.render(element, document.getElementById('root'));
    
  
}



function Home() {

  const classes = useStyles();
   const [roomId, setRoomId] = useState("");
   const [onClickedCreate, setOnClickedCreate] = useState("");
   const [onClickedJoin, setOnClickedJoin] = useState("");

   useEffect(() => {
    setRoomId(uuidV4());
  }, []);
   
  function initial_ui() {
    
      <div>
        <p className='join' onClick={() => setOnClickedJoin(onClickedJoin = true)}>
          Join a session
        </p>
        {/* <p className='create' onClick={() => this.state.onClicked && <Create/>}>
          Create new session
        </p> */}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          onClick={() => {createSession(roomId)}}
        >
          Create a new Sessionb nbn
        </Button>
        {/* <button className='create' onClick={() => {
        createSession(roomId)}}>
          Create new session
        </button> */}
      </div>
    
  }

  useEffect(() => {
    function createSession(roomId){
      const joinHandler =(roomId) => {
        window.location.href = `/${roomId}`;
      }; 
   
     // const element = <div>
     //                   <p>Create</p>
     //                   <div>
     //                     <label>{roomId}</label>
     //                     <div>
     //                       <button>Share</button>
     //                       <button onClick={window.location.href = `/${roomId}`}>Join</button>
     //                       <a href="window.location.href = `/${roomId}`">Join</a>
     //                     </div>
     //                   </div>
   
     //                   <p className='back' onClick={() => (window.location.href = "/")}>
     //                     Back
     //                   </p>
     //                 </div>;
   
     return <button onClick = {joinHandler}>Join</button>;
     //ReactDOM.render(element, document.getElementById('root'));
       
     
   }
  })

  const joinSession = () => {
    window.location.href = "/join";
  };
  //  const createSession = () => {
     
  //  };

  return (
    <div>
        <CssBaseline/>
        
        <p className='join' onClick={() => setOnClickedJoin(onClickedJoin = true)}>
          Join a session
        </p>
        {/* <p className='create' onClick={() => this.state.onClicked && <Create/>}>
          Create new session
        </p> */}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          onClick={() => {createSession(roomId)}}
        >
          Create a new Session
        </Button>
        {/* <button className='create' onClick={() => {
        createSession(roomId)}}>
          Create new session
        </button> */}
      
      </div>
  );
  
}

export default Home;





