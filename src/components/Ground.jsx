import React from 'react';
import lottie from 'lottie-web';
import groundAnim from './Ground/walkingScene1.json'
import styled from 'styled-components';
import utils from './AnimUtils/utils';
import stylePropType from 'react-style-proptype';

const GroundContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Ground = (props) => {
  const {style} = props;
  const lottieContainer = React.useRef(null);
  const scrollCount = React.useRef(0);

  const createLottieController = () => {
    const controller = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: groundAnim,
    })
    return controller
  }

  React.useEffect(() => {
    const controller = createLottieController();
    const speedController = (e) => utils.controlSpeed(e, scrollCount, controller);
    window.addEventListener('wheel', speedController)
    return () => window.removeEventListener('wheel', speedController)
  }, [])

  return (
    <GroundContainer style={style} ref={lottieContainer} />
  )
}

Ground.propTypes = {
  style: stylePropType,
}

export default Ground
