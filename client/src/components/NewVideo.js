import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const StyledVideo = styled.video`
  width:auto,
  height:auto,
`;

const Video = (props) => {
  const ref = useRef();

  useEffect(() => {
    props.peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <StyledVideo playsInline autoPlay ref={ref} />;
};

let myVideoStream;

const NewVideo = () => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const { id: roomID } = useParams();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:5000");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        myVideoStream = stream;
        userVideo.current.srcObject = stream;
        socketRef.current.emit("join room", roomID);
        socketRef.current.on("all users", (users) => {
          const peers = [];
          users.forEach((userID) => {
            const peer = createPeer(userID, socketRef.current.id, stream);
            peersRef.current.push({
              peerID: userID,
              peer,
            });
            peers.push(peer);
          });
          setPeers(peers);
        });

        socketRef.current.on("user joined", (payload) => {
          const peer = addPeer(payload.signal, payload.callerID, stream);
          peersRef.current.push({
            peerID: payload.callerID,
            peer,
          });

          setPeers((users) => [...users, peer]);
        });

        socketRef.current.on("receiving returned signal", (payload) => {
          const item = peersRef.current.find((p) => p.peerID === payload.id);
          item.peer.signal(payload.signal);
        });
      });
  }, []);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  const videoPlayPause = () => {
    let enabled = myVideoStream.getVideoTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getVideoTracks()[0].enabled = false;
    } else {
      myVideoStream.getVideoTracks()[0].enabled = true;
    }
  };

  const audioPlayPause = () => {
    const enabled = myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getAudioTracks()[0].enabled = false;
    } else {
      myVideoStream.getAudioTracks()[0].enabled = true;
    }
  };

  return (
    <div >
      <Grid container >
        <Grid item container xs={6}>
          <StyledVideo id="video" muted ref={userVideo} autoPlay playsInline />
        </Grid>

        {peers.map((peer, index) => {
          return (<Video width="auto" height="auto" key={index} peer={peer} />);
        })}
      </Grid>
      <div>
      <Grid container position = "absolute" xs = {12} >
        <Grid item container></Grid>
      </Grid>
        
        <div className="main__controls">
                    <div className="main__controls__block">
                    <div
                      style={{cursor: "pointer" }}
                      onClick={audioPlayPause}
                    >
                      Audio
                    </div>
                    <div
                      style={{cursor:"pointer"}}
                      onClick={videoPlayPause}
                    >
                      Video
                    </div>
                    </div>
                    <div className="main__controls__block">
                        <div className="main__controls__button inviteButton">
                            <i className="fas fa-user-plus"></i>
                            <span> Invite</span>
                        </div>
                        <div className="main__controls__button">
                            <i className="fas fa-user-friends"></i>
                            <span>Participants</span>
                        </div>
                        <div className="main__controls__button">
                            <i className="fas fa-comment-alt"></i>
                            <span>Chat</span>
                        </div>
                    </div>
                    <div className="main__controls__block">
                        <div className="main__controls__button">
                            <span className="leave_meeting">Leave Meeting</span>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
};

export default NewVideo;
