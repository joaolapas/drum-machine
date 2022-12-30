
import { useEffect } from 'react';
import React from 'react';
import './App.css';

function App() {

  const drumPads = [
    {
      keyCode: 81,
      desc: 'Heater-1',
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      desc: 'Heater-2',
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      desc: 'Heater-3',
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      desc: 'Heater-4',
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      desc: 'Heater-6',
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      desc: 'Dsc_Oh',
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      desc: 'Kick_n_Hat',
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      desc: 'RP4_KICK_1',
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      desc: 'Cev_H2',
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  useEffect(() =>{
    document.addEventListener('keydown', (event) =>{
      play(event.key.toUpperCase())
    })
  }, [])


  const[desc, setDesc] = React.useState()

  const play = (id, desc) =>{
    const audio = document.getElementById(id)
    disp(id)
    audio.play()
    audio.addEventListener('ended', () => setDesc())

  }
  const disp = (id) => {
    drumPads.map((drumPad) => {
      
      if(drumPad.text==id){setDesc(drumPad.desc)}
    })
  }
  

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div id='drum-machine'>
        <div id='display'>{desc}</div>
        <div id='drum-pads'>
          {drumPads.map((drumPad) =>  <button 
                                        key={drumPad.src}
                                        className='drum-pad' 
                                        id={drumPad.src} 
                                        onClick={() => {play(drumPad.text, drumPad.desc)}}
                                      >
                                        {drumPad.text}
                                        <audio 
                                          className='clip' 
                                          src={drumPad.src} 
                                          id={drumPad.text}
                                        />
                                      </button>
            )}
        
        </div>
      </div>
      <div id='by'>by João Lapas</div>
    </div>
    
  );
}

export default App;
