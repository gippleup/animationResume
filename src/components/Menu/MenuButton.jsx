import React from 'react';
import lottie from 'lottie-web';
import buttonAnim from './MenuButton/menuButton.json';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  left: 10px;
  top: 10px;
  margin: 10px;
  border: 0;
  outline: 0;
  z-index: 20;
  cursor: pointer;
`;

const MenuButton = React.forwardRef(function ({onClick}, ref) {
  const toggled = React.useRef(false); // toggled means arrow shape;
  const prevAnim = React.useRef('toggle');
  const curAnim = React.useRef('complete');

  const toggleCurAnim = () => curAnim.current = curAnim.current === 'complete' ? 'toggle' : 'complete';
  const updatePrevAnim = () => prevAnim.current = curAnim.current;

  React.useEffect(() => {
    const menuButton = ref.current;
    const loadAnim = (animData) => {
      return lottie.loadAnimation({
        container: ref.current,
        animationData: animData,
        renderer: 'svg',
        autoplay: false,
        loop: false,
      });
    }

    const controller = loadAnim(buttonAnim);
    controller.addEventListener('complete', () => {
      toggleCurAnim();
    })

    const toggleOnClick = () => {
      toggled.current = toggled.current ? false : true;
      if (onClick) onClick(toggled.current);

      updatePrevAnim();

      const targetSegment = toggled.current ? [0, 30] : [30, 61];

      if (controller.isPaused) {
        controller.playSegments(targetSegment, true);
        controller.setSpeed(2);
      } else {
        if (controller.playSpeed > 0) {
          controller.setSpeed(-2);
        } else {
          controller.setSpeed(2);
        }
      }
    };

    MenuButton.toggleOnClick = toggleOnClick;

    menuButton.addEventListener('click', toggleOnClick)
    return () => {
      menuButton.removeEventListener('click', toggleOnClick);
      controller.destroy();
    }
  }, [])

  return (
    <ButtonContainer ref={ref} />
  )
})

MenuButton.propTypes = {
  onClick: PropTypes.func,
}

export default MenuButton
