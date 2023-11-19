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
import { useState, useRef, useEffect } from "react";

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
const DrumPad = styled.div`
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
  &:active {
    box-shadow: none;
    background-color: orange;
  }
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
//currently not bold

const Drum = () => {
  const focusRef = useRef("");

  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(30);
  const [kit, setKit] = useState("Heater Kit");
  const [key, setKey] = useState("");

  const switchPower = () => setPower((prev) => !prev);

  const changeVolume = (e) => {
    setVolume(e.target.value);
    focusRef.current = `Volume: ${volume}`;
  };
  //volume doesn't seem to be able to reach 0 or 100

  const handleBank = () => {
    if (kit === "Heater Kit") {
      setKit("Smooth Piano Kit");
      focusRef.current = "Smooth Piano Kit";
    } else {
      setKit("Heater Kit");
      focusRef.current = "Heater Kit";
    }
  };

  const playPadQ = () => {
    setKey("Q");
    document.getElementById("Q").play();
    document.getElementById("Q").currentTime = 0;
    document.getElementById("Q").volume = volume / 100;
    if (kit === "Heater Kit") {
      focusRef.current = "Heater 1";
    } else {
      focusRef.current = "Chord 1";
    }
  };
  const playPadW = () => {
    setKey("W");
    document.getElementById("W").play();
    document.getElementById("W").currentTime = 0;
    document.getElementById("W").volume = volume / 100;
    if (kit === "Heater Kit") {
      focusRef.current = "Heater 2";
    } else {
      focusRef.current = "Chord 2";
    }
  };
  const playPadE = () => {
    setKey("E");
    document.getElementById("E").play();
    document.getElementById("E").currentTime = 0;
    document.getElementById("E").volume = volume / 100;
    if (kit === "Heater Kit") {
      focusRef.current = "Heater 3";
    } else {
      focusRef.current = "Chord 3";
    }
  };
  const playPadA = () => {
    setKey("A");
    document.getElementById("A").play();
    document.getElementById("A").currentTime = 0;
    document.getElementById("A").volume = volume / 100;
    if (kit === "Heater Kit") {
      focusRef.current = "Heater 4";
    } else {
      focusRef.current = "Shaker";
    }
  };
  const playPadS = () => {
    setKey("S");
    document.getElementById("S").play();
    document.getElementById("S").currentTime = 0;
    document.getElementById("S").volume = volume / 100;
    if (kit === "Heater Kit") {
      focusRef.current = "Clap";
    } else {
      focusRef.current = "Open HH";
    }
  };
  const playPadD = () => {
    setKey("D");
    document.getElementById("D").play();
    document.getElementById("D").currentTime = 0;
    document.getElementById("D").volume = volume / 100;
    if (kit === "Heater Kit") {
      focusRef.current = "Open HH";
    } else {
      focusRef.current = "Closed HH";
    }
  };
  const playPadZ = () => {
    setKey("Z");
    document.getElementById("Z").play();
    document.getElementById("Z").currentTime = 0;
    document.getElementById("Z").volume = volume / 100;
    if (kit === "Heater Kit") {
      focusRef.current = "Kick n' Hat";
    } else {
      focusRef.current = "Punchy Kick";
    }
  };
  const playPadX = () => {
    setKey("X");
    document.getElementById("X").play();
    document.getElementById("X").currentTime = 0;
    document.getElementById("X").volume = volume / 100;
    if (kit === "Heater Kit") {
      focusRef.current = "Kick";
    } else {
      focusRef.current = "Side Stick";
    }
  };
  const playPadC = () => {
    setKey("C");
    document.getElementById("C").play();
    document.getElementById("C").currentTime = 0;
    document.getElementById("C").volume = volume / 100;
    if (kit === "Heater Kit") {
      focusRef.current = "Closed HH";
    } else {
      focusRef.current = "Snare";
    }
  };

  const clickPad = (e) => {
    if (power) {
      if (e.target.innerText === "Q") {
        playPadQ();
      } else if (e.target.innerText === "W") {
        playPadW();
      } else if (e.target.innerText === "E") {
        playPadE();
      } else if (e.target.innerText === "A") {
        playPadA();
      } else if (e.target.innerText === "S") {
        playPadS();
      } else if (e.target.innerText === "D") {
        playPadD();
      } else if (e.target.innerText === "Z") {
        playPadZ();
      } else if (e.target.innerText === "X") {
        playPadX();
      } else if (e.target.innerText === "C") {
        playPadC();
      }
    }
  };

  const pressKey = (e) => {
    if (e?.code === "KeyQ") {
      playPadQ();
      // document
      //   .getElementById("pad-q")
      //   .style.setProperty("background-color", "orange");
    } else if (e?.code === "KeyW") {
      playPadW();
    } else if (e?.code === "KeyE") {
      playPadE();
    } else if (e?.code === "KeyA") {
      playPadA();
    } else if (e?.code === "KeyS") {
      playPadS();
    } else if (e?.code === "KeyD") {
      playPadD();
    } else if (e?.code === "KeyZ") {
      playPadZ();
    } else if (e?.code === "KeyX") {
      playPadX();
    } else if (e?.code === "KeyC") {
      playPadC();
    }
  };

  const keysArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  const pads = keysArr.map((key) => {
    const audioSrc =
      key === "Q" && kit === "Heater Kit"
        ? Heater1
        : key === "Q" && kit === "Smooth Piano Kit"
        ? Chord1
        : key === "W" && kit === "Heater Kit"
        ? Heater2
        : key === "W" && kit === "Smooth Piano Kit"
        ? Chord2
        : key === "E" && kit === "Heater Kit"
        ? Heater3
        : key === "E" && kit === "Smooth Piano Kit"
        ? Chord3
        : key === "A" && kit === "Heater Kit"
        ? Heater4
        : key === "A" && kit === "Smooth Piano Kit"
        ? Shaker
        : key === "S" && kit === "Heater Kit"
        ? Clap
        : key === "S" && kit === "Smooth Piano Kit"
        ? DryOhh
        : key === "D" && kit === "Heater Kit"
        ? OpenHH
        : key === "D" && kit === "Smooth Piano Kit"
        ? BldH1
        : key === "Z" && kit === "Heater Kit"
        ? KickNHat
        : key === "Z" && kit === "Smooth Piano Kit"
        ? PunchyKick
        : key === "X" && kit === "Heater Kit"
        ? Kick
        : key === "X" && kit === "Smooth Piano Kit"
        ? SideStick
        : key === "C" && kit === "Heater Kit"
        ? ClosedHH
        : Snare;

    const playPad = (key) => {
      setKey(key);
      const audio = document.getElementById(key);
      audio.play();
      audio.currentTime = 0;
      audio.volume = volume / 100;
    };

    const clickPad2 = (e, key) => {
      if (power) {
        if (e.target.innerText === key) {
          playPad(key);
        }
      }
    };

    const pressKey2 = (e, key) => {
      if (e?.code === `Key${key}`) {
        playPad(key);
      }
    };

    return (
      <DrumPad
        key={key}
        className="drum-pad"
        id={`pad-${key.toLowerCase()}`}
        onClick={clickPad2}
      >
        {key}
        <audio src={audioSrc} className="clip" id={key} />
      </DrumPad>
    );
  });

  useEffect(() => {
    document.addEventListener("keydown", pressKey);
    pressKey();
    return () => document.removeEventListener("keydown", pressKey);
  }, []);

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
