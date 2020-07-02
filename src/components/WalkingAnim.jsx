import React from 'react'
import Ground from './Ground';
import Player from './Player';
import styled from 'styled-components';
import utils from './WalkingAnim/utils';

const AnimBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 600px;
  height: 600px;
  transform-origin: 0px 600px;
  clip-path: polygon(0 300px, 0 599px, 600px 599px, 600px 300px);
`;

const WalkingAnim = () => {
  const animBoxRef = React.useRef(null);
  React.useEffect(() => {
    utils.fitToWindow(animBoxRef);
    const fitAnimBoxtoWindow = () => utils.fitToWindow(animBoxRef);
    window.addEventListener('resize', fitAnimBoxtoWindow)
  })

  return (
    <AnimBox ref={animBoxRef}>
      <Ground style={{ position: 'relative', top: 131 }} />
      <Player style={{ position: 'absolute', top: 300, left: 150, width: '200px' }} />
    </AnimBox>
  )
}

export default WalkingAnim
