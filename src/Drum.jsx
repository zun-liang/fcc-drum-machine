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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useState, useRef } from "react";

const DrumContainer = styled.div`
  width: 660px;
  height: 320px;
  border: 5px solid orange;
  background-color: #b3b3b3;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const PadsContainer = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const DrumPad = styled.label`
  width: 100px;
  height: 80px;
  border: none;
  border-radius: 8px;
  background-color: #8d8d8d;
  box-shadow: 3px 3px 5px black;
  font-family: "Russo One", sans-serif;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const RadioButton = styled.input`
  display: none;
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
  cursor: pointer;
  display: flex;
  justify-content: ${({ $power }) => ($power ? "flex-end" : "flex-start")};
  & > div {
    width: 23px;
    height: 18px;
    background-color: blue;
  }
`;
const BankControl = styled(PowerControl)`
  justify-content: ${({ $kit }) =>
    $kit === "Heater Kit" ? "flex-start" : "flex-end"};
`;
const DisplayString = styled.p`
  width: 200px;
  height: 50px;
  background-color: #8d8d8d;
  display: flex;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;

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
    bottom: 12px;
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
    border: none;
    border-radius: 0;
    box-shadow: 1px 1px 1px black;
    cursor: pointer;
  }
`;
const IconContainer = styled.div`
  height: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  & > span {
    font-size: 1.3rem;
    font-style: italic;
  }
`;
const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.3rem;
  border-bottom: 1px solid black;
`;
//currently not bold or italic

const Drum = () => {
  const focusRef = useRef("");
  const [volume, setVolume] = useState("");
  const handleVolume = (e) => {
    setVolume(e.target.value);
    focusRef.current = `Volume: ${volume}`;
  };
  //volume doesn't seem to be able to reach 0 or 100

  const [power, setPower] = useState(true);
  const handlePower = () => setPower((prev) => !prev);

  const [kit, setKit] = useState("Heater Kit");
  const handleBank = () => {
    if (kit === "Heater Kit") {
      setKit("Smooth Piano Kit");
      focusRef.current = "Smooth Piano Kit";
    } else {
      setKit("Heater Kit");
      focusRef.current = "Heater Kit";
    }
  };

  return (
    <DrumContainer id="drum-machine">
      <PadsContainer>
        <RadioButton type="radio" id="pad-q" name="drum-pad" />
        <DrumPad
          className="drum-pad"
          htmlFor="pad-q"
          onClick={() => {
            if (kit === "Heater Kit") {
              focusRef.current = "Heater 1";
            } else {
              focusRef.current = "Chord 1";
            }
          }}
        >
          Q
          <audio
            src={kit === "Heater Kit" ? Heater1 : Chord1}
            className="clip"
            id="Q"
          ></audio>
        </DrumPad>
        <RadioButton type="radio" id="pad-w" name="drum-pad" />
        <DrumPad
          className="drum-pad"
          htmlFor="pad-w"
          onClick={() => {
            if (kit === "Heater Kit") {
              focusRef.current = "Heater 2";
            } else {
              focusRef.current = "Chord 2";
            }
          }}
        >
          W
          <audio
            src={kit === "Heater Kit" ? Heater2 : Chord2}
            className="clip"
            id="W"
          ></audio>
        </DrumPad>
        <RadioButton type="radio" id="pad-e" name="drum-pad" />
        <DrumPad
          className="drum-pad"
          htmlFor="pad-e"
          onClick={() => {
            if (kit === "Heater Kit") {
              focusRef.current = "Heater 3";
            } else {
              focusRef.current = "Chord 3";
            }
          }}
        >
          E
          <audio
            src={kit === "Heater Kit" ? Heater3 : Chord3}
            className="clip"
            id="E"
          ></audio>
        </DrumPad>
        <RadioButton type="radio" id="pad-a" name="drum-pad" />
        <DrumPad
          className="drum-pad"
          htmlFor="pad-a"
          onClick={() => {
            if (kit === "Heater Kit") {
              focusRef.current = "Heater 4";
            } else {
              focusRef.current = "Shaker";
            }
          }}
        >
          A
          <audio
            src={kit === "Heater Kit" ? Heater4 : Shaker}
            className="clip"
            id="A"
          ></audio>
        </DrumPad>
        <RadioButton type="radio" id="pad-s" name="drum-pad" />
        <DrumPad
          className="drum-pad"
          htmlFor="pad-s"
          onClick={() => {
            if (kit === "Heater Kit") {
              focusRef.current = "Clap";
            } else {
              focusRef.current = "Open HH";
            }
          }}
        >
          S
          <audio
            src={kit === "Heater Kit" ? Clap : DryOhh}
            className="clip"
            id="S"
          ></audio>
        </DrumPad>
        <RadioButton type="radio" id="pad-d" name="drum-pad" />
        <DrumPad
          className="drum-pad"
          htmlFor="pad-d"
          onClick={() => {
            if (kit === "Heater Kit") {
              focusRef.current = "Open HH";
            } else {
              focusRef.current = "Closed HH";
            }
          }}
        >
          D
          <audio
            src={kit === "Heater Kit" ? OpenHH : BldH1}
            className="clip"
            id="D"
          ></audio>
        </DrumPad>
        <RadioButton type="radio" id="pad-z" name="drum-pad" />
        <DrumPad
          className="drum-pad"
          htmlFor="pad-z"
          onClick={() => {
            if (kit === "Heater Kit") {
              focusRef.current = "Kick n' Hat";
            } else {
              focusRef.current = "Punchy Kick";
            }
          }}
        >
          Z
          <audio
            src={kit === "Heater Kit" ? KickNHat : PunchyKick}
            className="clip"
            id="Z"
          ></audio>
        </DrumPad>
        <RadioButton type="radio" id="pad-x" name="drum-pad" />
        <DrumPad
          className="drum-pad"
          htmlFor="pad-x"
          onClick={() => {
            if (kit === "Heater Kit") {
              focusRef.current = "Kick";
            } else {
              focusRef.current = "Side Stick";
            }
          }}
        >
          X
          <audio
            src={kit === "Heater Kit" ? Kick : SideStick}
            className="clip"
            id="X"
          ></audio>
        </DrumPad>
        <RadioButton type="radio" id="pad-c" name="drum-pad" />
        <DrumPad
          className="drum-pad"
          htmlFor="pad-c"
          onClick={() => {
            if (kit === "Heater Kit") {
              focusRef.current = "Closed HH";
            } else {
              focusRef.current = "Snare";
            }
          }}
        >
          C
          <audio
            src={kit === "Heater Kit" ? ClosedHH : Snare}
            className="clip"
            id="C"
          ></audio>
        </DrumPad>
      </PadsContainer>
      <ControlsContainer>
        <ControlName>Power</ControlName>
        <PowerControl onClick={handlePower} $power={power}>
          <div />
        </PowerControl>
        <DisplayString id="display">{focusRef.current}</DisplayString>
        <VolumeSlider
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          onChange={handleVolume}
        />
        <ControlName>Bank</ControlName>
        <BankControl onClick={handleBank} $kit={kit}>
          <div />
        </BankControl>
      </ControlsContainer>
      <IconContainer>
        <span>FCC</span>
        <StyledIcon icon={faFreeCodeCamp} />
      </IconContainer>
    </DrumContainer>
  );
};

export default Drum;
