import React from 'react'
import * as lottie from 'lottie-web';
import walkingAnimData from './Player/walking.json';
import styled from 'styled-components';
import utils from './AnimUtils/utils';
import stylePropTypes from 'react-style-proptype';


const LottieContainer = styled.div`
  width: 300px;
  height: 300px;
`;

const Player = (props) => {
  const {style} = props;
  const lottieContainer = React.useRef(null);
  const scrollCount = React.useRef(50);
  
  const createLottieController = () => {
    const controller = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: walkingAnimData,
    })
    return controller;
  }

  React.useEffect(() => {
    const controller = createLottieController();
    const speedController = (e) => utils.controlSpeed(e, scrollCount, controller);
    window.addEventListener('wheel', speedController)
    return () => window.removeEventListener('wheel', speedController)
  }, [])
  
  return (
    <LottieContainer style={style} ref={lottieContainer} />
  )
}

Player.propTypes = {
  style: stylePropTypes,
}

export default Player
