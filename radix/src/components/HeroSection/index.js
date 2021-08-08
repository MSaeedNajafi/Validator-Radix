import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../video/video.mp4";
import { Button } from "../ButtonElemts";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Stake with us and earn
          <span style={{ color: "#00c389" }}>
            {/* <img
              sre="https://assets-global.website-files.com/6053f7fca5bf627283b582c2/606d99f3190d3a859603fbb5_r-symbol.svg"
              alt=""
            /> */}
            {/* <img src="url" alt="alternatetext">  */}R
          </span>
          adix (XRD) tokens.
        </HeroH1>
        <HeroP>You always remain control of your funds.</HeroP>
        <HeroP>Staking in Radix is non-custodial.</HeroP>
        <HeroP>99.9% uptime</HeroP>

        <HeroBtnWrapper>
          <Button
            to="id3"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Calculate your rewards {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
