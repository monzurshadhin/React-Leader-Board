import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import img1 from './Top-Player-Image/player-1.png';
import img2 from './Top-Player-Image/player-2.png';
import img3 from './Top-Player-Image/player-3.png';
import img4 from './Top-Player-Image/player-4.png';
import img5 from './Top-Player-Image/player-5.png';
import img6 from './Top-Player-Image/player-6.png';
import './TopPlayer.css';

const topPlayers =[
    {
      "img": img1,
      "name": "John Smith"
    },
    {
      "img": img2,
      "name": "Pro Raasel"
    },
    {
      "img":img3,
      "name": "Abu Sufian"
    },
    {
      "img": img4,
      "name": "Shajedul Karim"
    },
    {
      "img": img5,
      "name": "Maruf Ahmed"
    },
    {
      "img": img6,
      "name": "Mujahid"
    }
  ]


const TopPlayer = () => {
    const [players,setPlayers]= useState([]);
    useEffect(()=>{
        setPlayers(topPlayers);
    },[]);

    console.log(players);

    return (
        <div className='top-player'>
            <h4 className='title'>Top Player</h4>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                   
                    players.map(player=> <Player img={player.img} name={player.name}></Player>)
                }
                {/* <div className="player d-flex align-items-center">
                    <img src={img1} alt="" />
                    <h4>Jhon Smith</h4>
                </div>
                <div className="player d-flex align-items-center">
                    <img src={img2} alt="" />
                    <h4>Pro Rasel</h4>
                </div>
                <div className="player d-flex align-items-center">
                    <img src={img3} alt="" />
                    <h4>Abu Sufian</h4>
                </div>
                <div className="player d-flex align-items-center">
                    <img src={img4} alt="" />
                    <h4>Shajedul Karim</h4>
                </div>
                <div className="player d-flex align-items-center">
                    <img src={img5} alt="" />
                    <h4>Maruf Ahmed</h4>
                </div>
                <div className="player d-flex align-items-center">
                    <img src={img6} alt="" />
                    <h4>Mujahid</h4>
                </div> */}
            </div>

            <hr  />
        </div>

        
    );
};

export default TopPlayer;