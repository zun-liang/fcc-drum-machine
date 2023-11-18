import styled from "styled-components";
import Heater1 from "./assets/sounds/Heater-1.mp3";
import Heater2 from "./assets/sounds/Heater-2.mp3";
import Heater3 from "./assets/sounds/Heater-3.mp3";
import Heater4 from "./assets/sounds/Heater-4_1.mp3";
import Clap from "./assets/sounds/Heater-6.mp3";
import OpenHH from "./assets/sounds/Dsc_Oh.mp3";
import KickNHat from "./assets/sounds/Kick_n_Hat.mp3";
import Kick from "./assets/sounds/RP4_KICK_1.mp3";
import ClosedHH from "./assets/sounds/Cev_H2.mp3";
import { useState } from "react";

const DrumContainer = styled.div`
  width: 600px;
  height: 400px;
  border: 3px solid orange;
  background-color: #b3b3b3;
`;
const ClipString = styled.p`
  background-color: #8d8d8d;
`;
const DrumPad = styled.button`
  width: 100px;
  height: 80px;
  background-color: #8d8d8d;
  box-shadow: 2px 2px 3px gray;
  font-family: "Russo One", sans-serif;
`;

const Drum = () => {
  const [clipName, setClipName] = useState("");
  return (
    <DrumContainer id="drum-machine">
      <DrumPad
        className="drum-pad"
        id="pad-q"
        onClick={() => setClipName("Heater 1")}
      >
        Q<audio src={Heater1} className="clip" id="Q"></audio>
      </DrumPad>
      <DrumPad
        className="drum-pad"
        id="pad-w"
        onClick={() => setClipName("Heater 2")}
      >
        W<audio src={Heater2} className="clip" id="W"></audio>
      </DrumPad>
      <DrumPad
        className="drum-pad"
        id="pad-e"
        onClick={() => setClipName("Heater 3")}
      >
        E<audio src={Heater3} className="clip" id="E"></audio>
      </DrumPad>
      <DrumPad
        className="drum-pad"
        id="pad-a"
        onClick={() => setClipName("Heater 4")}
      >
        A<audio src={Heater4} className="clip" id="A"></audio>
      </DrumPad>
      <DrumPad
        className="drum-pad"
        id="pad-s"
        onClick={() => setClipName("Clap")}
      >
        S<audio src={Clap} className="clip" id="S"></audio>
      </DrumPad>
      <DrumPad
        className="drum-pad"
        id="pad-d"
        onClick={() => setClipName("Open HH")}
      >
        D<audio src={OpenHH} className="clip" id="D"></audio>
      </DrumPad>
      <DrumPad
        className="drum-pad"
        id="pad-z"
        onClick={() => setClipName("Kick n' Hat")}
      >
        Z<audio src={KickNHat} className="clip" id="Z"></audio>
      </DrumPad>
      <DrumPad
        className="drum-pad"
        id="pad-x"
        onClick={() => setClipName("Kick")}
      >
        X<audio src={Kick} className="clip" id="X"></audio>
      </DrumPad>
      <DrumPad
        className="drum-pad"
        id="pad-c"
        onClick={() => setClipName("Closed HH")}
      >
        C<audio src={ClosedHH} className="clip" id="C"></audio>
      </DrumPad>
      <ClipString id="display">{clipName}</ClipString>
    </DrumContainer>
  );
};

export default Drum;
