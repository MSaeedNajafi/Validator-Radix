import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const ServicesElements = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={icon1} />
            <ServicesH2>Validating Transtions</ServicesH2>
            <ServicesP>
              We help to validate your transafctions and increase your overal
              value.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={icon2} />
            <ServicesH2>Get Rewards</ServicesH2>
            <ServicesP>
              You will get montly rewards based on your tranactions, this will
              be in a safe platform.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={icon3} />
            <ServicesH2>Increase Profit</ServicesH2>
            <ServicesP>
              You can keep your reward and or sell it, evetually you profit will
              be increased.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default ServicesElements;
