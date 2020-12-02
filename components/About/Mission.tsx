import React, { ReactElement } from 'react';
import Image from 'next/image';
import { Container } from '../../styles/components/layout';
import { Title, MissionWrapper, MissionSteps, MissionText } from './styles';
import Fade from 'react-reveal';
import { useWindowSize } from '../../utils/utils';
import Circles from './Circles';

const Mission = (): ReactElement => {
  const size = useWindowSize();
  return (
    <Container>
      <Title>We&apos;re On A Mission</Title>
      <div style={{ position: 'relative' }}>
        <Circles />
        <MissionWrapper>
          <MissionSteps>
            <Fade
              left={size.width! > 415}
              bottom={size.width! <= 415}
              duration={500}
              distance="100px"
            >
              <Image src="/assets/images/vasily-koloda.jpg" height={227} width={627} />
            </Fade>
            <Fade
              right={size.width! > 415}
              bottom={size.width! <= 415}
              duration={500}
              distance="100px"
            >
              <MissionText>
                <h2>Save Time and Money</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue euismod elit cursus
                  odio diam porta aliquet. Blandit elementum, fermentum nisl purus egestas.
                </p>
              </MissionText>
            </Fade>
          </MissionSteps>
          <MissionSteps className="second-mission">
            <Fade
              left={size.width! > 415}
              bottom={size.width! <= 415}
              duration={500}
              distance="100px"
            >
              <MissionText>
                <h2>Bring Awareness</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue euismod elit cursus
                  odio diam porta aliquet. Blandit elementum, fermentum nisl purus egestas.
                </p>
              </MissionText>
            </Fade>
            <Fade
              right={size.width! > 415}
              bottom={size.width! <= 415}
              duration={500}
              distance="100px"
            >
              <Image src="/assets/images/john-schnobrich.jpg" height={227} width={627} />
            </Fade>
          </MissionSteps>
          <MissionSteps>
            <Fade
              left={size.width! > 415}
              bottom={size.width! <= 415}
              duration={500}
              distance="100px"
            >
              <Image src="/assets/images/helena-lopes.jpg" height={227} width={627} />
            </Fade>
            <Fade
              right={size.width! > 415}
              bottom={size.width! <= 415}
              duration={500}
              distance="100px"
            >
              <MissionText>
                <h2>Build Confidence</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue euismod elit cursus
                  odio diam porta aliquet. Blandit elementum, fermentum nisl purus egestas.
                </p>
              </MissionText>
            </Fade>
          </MissionSteps>
        </MissionWrapper>
      </div>
    </Container>
  );
};

export default Mission;
