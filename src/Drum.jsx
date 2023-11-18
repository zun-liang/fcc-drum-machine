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
import Chord1 from "./assets/sounds/Chord_1.mp3";
import Chord2 from "./assets/sounds/Chord_2.mp3";
import Chord3 from "./assets/sounds/Chord_3.mp3";
import Shaker from "./assets/sounds/Give_us_a_light.mp3";
import DryOhh from "./assets/sounds/Dry_Ohh.mp3";
import BldH1 from "./assets/sounds/Bld_H1.mp3";
import PunchyKick from "./assets/sounds/punchy_kick_1.mp3";
import SideStick from "./assets/sounds/side_stick_1.mp3";
import Snare from "./assets/sounds/Brk_Snr.mp3";

import { useState } from "react";

const DrumContainer = styled.div`
  width: 660px;
  height: 320px;
  border: 5px solid orange;
  background-color: #b3b3b3;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
`;
const PadsContainer = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const DrumPad = styled.button`
  width: 100px;
  height: 80px;
  border: none;
  border-radius: 8px;
  background-color: #8d8d8d;
  box-shadow: 3px 3px 5px black;
  font-family: "Russo One", sans-serif;
  font-size: 1rem;
`;
const ControlsContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const ControlName = styled.p`
  margin-bottom: -1rem;
`;
const PowerControl = styled.div`
  width: 54px;
  height: 24px;
  background-color: black;
  padding: 3px;
  display: flex;
  justify-content: flex-end;
  & > div {
    width: 23px;
    height: 18px;
    background-color: blue;
  }
`;
const BankControl = styled(PowerControl)`
  justify-content: flex-start;
`;
const ClipString = styled.p`
  width: 200px;
  height: 50px;
  background-color: #8d8d8d;
`;
const VolumeSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  border: 1px solid black;
  box-shadow: 1px 1px 1px black;
  background: #3d3c3c;
  margin: 0.5rem 0;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    border: 1px solid black;
    box-shadow: 1px 1px 3px black;
    background: #3d3c3c;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 26px;
    background: blue;
    box-shadow: 1px 1px 1px black;
    cursor: pointer;
    position: relative;
    bottom: 10px;
  }

  /* Firefox */
  &::-moz-range-track {
    width: 100%;
    height: 5px;
    border: 1px solid black;
    box-shadow: 1px 1px 3px black;
    background: #3d3c3c;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 25px;
    background: blue;
    box-shadow: 1px 1px 1px black;
    cursor: pointer;
  }
`;

const Drum = () => {
  const [clipName, setClipName] = useState("");
  const [volume, setVolume] = useState("");
  const [power, setPower] = useState(true);
  const [kit, setKit] = useState("Heater Kit");
  return (
    <DrumContainer id="drum-machine">
      <PadsContainer>
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
      </PadsContainer>
      <ControlsContainer>
        <ControlName>Power</ControlName>
        <PowerControl onClick={() => setPower((prev) => !prev)}>
          <div></div>
        </PowerControl>
        <ClipString id="display">{clipName}</ClipString>
        <VolumeSlider
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
        />
        <ControlName>Bank</ControlName>
        <BankControl onClick={() => setKit("Smooth Piano Kit")}>
          <div></div>
        </BankControl>
      </ControlsContainer>
    </DrumContainer>
  );
};

export default Drum;
