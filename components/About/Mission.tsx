import React from 'react';
import { useWindowSize } from '../../utils/utils';
import Image from 'next/image';
import { Container } from '../../styles/components/layout';
import { Title, MissionSteps, BlueSquare, MissionText, ImageWrap } from './styles';
import Fade from 'react-reveal';


const Mission = () => {

  const size = useWindowSize();

  const calcSizes = (num: number) => {
    if ( size.width! <= 769 ) {
      if ( num < 0 ) num += 20;
      num -= 10;

    }
    return num;
  };

  return (
    <Container>
      <Title>We're On A Mission</Title>
      <section>
        <MissionSteps>
          <Fade left duration={500} distance="100px">
            <ImageWrap>
              <BlueSquare height={25} width={25} left={calcSizes(-50)} top={calcSizes(50)} />
              <Image src="/assets/images/vasily-koloda.jpg" height={227} width={627} />
            </ImageWrap>
          </Fade>
          <Fade right duration={500} distance="100px">
            <MissionText>
              <h2>Save Time and Money</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue euismod elit cursus odio diam porta aliquet.
                Blandit elementum, fermentum nisl purus egestas.</p>
            </MissionText>
          </Fade>
        </MissionSteps>
        <MissionSteps>
          <Fade left duration={500} distance="100px">
            <MissionText>
              <h2>Bring Awareness</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue euismod elit cursus odio diam porta aliquet.
                Blandit elementum, fermentum nisl purus egestas.</p>
            </MissionText>
          </Fade>
          <Fade right duration={500} distance="100px">
            <ImageWrap>
              <BlueSquare height={33} width={28} right={calcSizes(-50)} top={calcSizes(-50)} />
              <Image src="/assets/images/john-schnobrich.jpg" height={227} width={627} />
            </ImageWrap>
          </Fade>
        </MissionSteps>
        <MissionSteps>
          <Fade left duration={500} distance="100px">
            <ImageWrap>
              <BlueSquare height={24} width={35} right={-80} top={60} />
              <Image src="/assets/images/helena-lopes.jpg" height={227} width={627} />
            </ImageWrap>
          </Fade>
          <Fade right duration={500} distance="100px">
            <MissionText>
              <h2>Build Confidence</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue euismod elit cursus odio diam porta aliquet.
                Blandit elementum, fermentum nisl purus egestas.</p>
            </MissionText>
          </Fade>
        </MissionSteps>
      </section>
    </Container>
  );
};

export default Mission;
