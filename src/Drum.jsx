import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import ClosedHH2 from "./assets/sounds/Bld_H1.mp3";
import Snare from "./assets/sounds/Brk_Snr.mp3";
import ClosedHH from "./assets/sounds/Cev_H2.mp3";
import Chord1 from "./assets/sounds/Chord_1.mp3";
import Chord2 from "./assets/sounds/Chord_2.mp3";
import Chord3 from "./assets/sounds/Chord_3.mp3";
import OpenHH2 from "./assets/sounds/Dry_Ohh.mp3";
import OpenHH from "./assets/sounds/Dsc_Oh.mp3";
import Shaker from "./assets/sounds/Give_us_a_light.mp3";
import Heater1 from "./assets/sounds/Heater-1.mp3";
import Heater2 from "./assets/sounds/Heater-2.mp3";
import Heater3 from "./assets/sounds/Heater-3.mp3";
import Heater4 from "./assets/sounds/Heater-4_1.mp3";
import Clap from "./assets/sounds/Heater-6.mp3";
import KickNHat from "./assets/sounds/Kick_n_Hat.mp3";
import PunchyKick from "./assets/sounds/punchy_kick_1.mp3";
import Kick from "./assets/sounds/RP4_KICK_1.mp3";
import SideStick from "./assets/sounds/side_stick_1.mp3";

const DrumContainer = styled.div`
  width: 90%;
  border: 5px solid orange;
  background-color: #b3b3b3;
  padding: 2.5rem 2rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (min-width: 700px) {
    width: 660px;
    height: 320px;
    padding: 1.5rem;
  }
`;
const PadsContainer = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  @media (min-width: 700px) {
    gap: 10px;
  }
`;
const DrumPad = styled.div`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: ${({ $power, $isActive }) =>
    $isActive && $power ? "orange" : "#8d8d8d"};
  box-shadow: ${({ $power, $isActive }) =>
    $isActive && $power
      ? "none"
      : !$isActive && $power
      ? "3px 3px 5px black"
      : $isActive && !$power
      ? "none"
      : "3px 3px 5px black"};
  font-family: "Russo One", sans-serif;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 700px) {
    width: 100px;
    height: 80px;
  }
`;
const ControlsContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  @media (min-width: 700px) {
    width: 40%;
    gap: 1rem;
  }
`;
const ControlName = styled.p`
  margin-bottom: -0.7rem;
  @media (min-width: 700px) {
    margin-bottom: -1rem;
  }
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
  width: 100%;
  background-color: #8d8d8d;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  @media (min-width: 700px) {
    width: 200px;
    height: 50px;
  }
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
  top: 7px;
  right: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  & > span {
    font-size: 1.3rem;
    font-style: italic;
    font-weight: bold;
  }
`;
const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.3rem;
  border-bottom: 1px solid black;
  transform: skewX(-15deg);
`;

const Drum = () => {
  const focusRef = useRef(null);

  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(30);
  const [kit, setKit] = useState("Heater Kit");
  const [key, setKey] = useState("");
  const switchPower = () => setPower((prev) => !prev);
  const [activePad, setActivePad] = useState(null);

  const changeVolume = (e) => {
    setVolume(parseInt(e.target.value, 10));
    focusRef.current = `Volume: ${parseInt(e.target.value, 10)}`;
  };

  const handleBank = () => {
    if (kit === "Heater Kit") {
      setKit("Smooth Piano Kit");
      focusRef.current = "Smooth Piano Kit";
    } else {
      setKit("Heater Kit");
      focusRef.current = "Heater Kit";
    }
  };

  const keysArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  const padLabels = {
    Q: {
      "Heater Kit": "Heater 1",
      "Smooth Piano Kit": "Chord 1",
      "Heater Kit Src": Heater1,
      "Smooth Piano Kit Src": Chord1,
    },
    W: {
      "Heater Kit": "Heater 2",
      "Smooth Piano Kit": "Chord 2",
      "Heater Kit Src": Heater2,
      "Smooth Piano Kit Src": Chord2,
    },
    E: {
      "Heater Kit": "Heater 3",
      "Smooth Piano Kit": "Chord 3",
      "Heater Kit Src": Heater3,
      "Smooth Piano Kit Src": Chord3,
    },
    A: {
      "Heater Kit": "Heater 4",
      "Smooth Piano Kit": "Shaker",
      "Heater Kit Src": Heater4,
      "Smooth Piano Kit Src": Shaker,
    },
    S: {
      "Heater Kit": "Clap",
      "Smooth Piano Kit": "Open HH",
      "Heater Kit Src": Clap,
      "Smooth Piano Kit Src": OpenHH2,
    },
    D: {
      "Heater Kit": "Open HH",
      "Smooth Piano Kit": "Closed HH",
      "Heater Kit Src": OpenHH,
      "Smooth Piano Kit Src": ClosedHH2,
    },
    Z: {
      "Heater Kit": "Kick n' Hat",
      "Smooth Piano Kit": "Punchy Kick",
      "Heater Kit Src": KickNHat,
      "Smooth Piano Kit Src": PunchyKick,
    },
    X: {
      "Heater Kit": "Kick",
      "Smooth Piano Kit": "Side Stick",
      "Heater Kit Src": Kick,
      "Smooth Piano Kit Src": SideStick,
    },
    C: {
      "Heater Kit": "Closed HH",
      "Smooth Piano Kit": "Snare",
      "Heater Kit Src": ClosedHH,
      "Smooth Piano Kit Src": Snare,
    },
  };

  const playPad = (key) => {
    if (power) {
      setKey(key);
      const audio = document.getElementById(key);
      if (audio) {
        audio.play();
        audio.currentTime = 0;
        audio.volume = volume / 100;
      }
      focusRef.current = padLabels[key]?.[kit];
    }
  };

  const clickPad = (e, key) => {
    setActivePad(key);
    if (power) {
      if (e.target.innerText === key) {
        playPad(key);
      }
    }
    setTimeout(() => {
      setActivePad(null);
    }, 100);
  };

  const getAudioSrc = (key, kit) => padLabels[key]?.[`${kit} Src`];

  const pads = keysArr.map((key) => {
    const isActive = activePad === key;
    return (
      <DrumPad
        key={key}
        className="drum-pad"
        id={`pad-${key.toLowerCase()}`}
        onClick={(e) => clickPad(e, key)}
        $power={power}
        $isActive={isActive}
      >
        {key}
        <audio src={getAudioSrc(key, kit)} className="clip" id={key} />
      </DrumPad>
    );
  });

  const pressKey = (e) => {
    const key = e?.code.slice(3); /* e.code for example, "KeyQ" */
    const padStyle = document.getElementById(
      `pad-${key?.toLowerCase()}`
    )?.style;

    if (power) {
      playPad(key);
      padStyle?.setProperty("background-color", "orange");
      padStyle?.setProperty("box-shadow", "none");
    } else {
      padStyle?.setProperty("box-shadow", "none");
    }
  };

  const releaseKey = (e) => {
    const key = e?.code.slice(3);
    const padStyle = document.getElementById(
      `pad-${key?.toLowerCase()}`
    )?.style;
    if (power) {
      padStyle?.setProperty("background-color", "#8d8d8d");
      padStyle?.setProperty("box-shadow", "3px 3px 5px black");
    } else {
      padStyle?.setProperty("box-shadow", "3px 3px 5px black");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", pressKey);
    document.addEventListener("keyup", releaseKey);
    pressKey();
    releaseKey();
    return () => {
      document.removeEventListener("keydown", pressKey);
      document.removeEventListener("keyup", releaseKey);
    };
  }, [power]);

  return (
    <DrumContainer id="drum-machine">
      <PadsContainer>{pads}</PadsContainer>
      <ControlsContainer>
        <ControlName>Power</ControlName>
        <PowerControl onClick={switchPower} $power={power}>
          <div />
        </PowerControl>
        <DisplayString id="display">
          {power ? focusRef.current : ""}
        </DisplayString>
        <VolumeSlider
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          step="1"
          value={volume}
          onChange={changeVolume}
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
