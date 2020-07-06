import React from 'react';
import styled, {css} from 'styled-components';
import MenuButton from './Menu/MenuButton';
import LinkContainer from './Menu/LinkContainer';
import MenuItemContainer from './Menu/MenuItemContainer';

const Curtain = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 0;
  background-color: transparent;
  transition-duration: 500ms;
  ${(props) => props.toggled && css`
    background-color: rgba(255,255,255,0.6);
  `}
`;

const MenuContainer = styled.div`
  background-color: white;
  position: fixed;
  width: ${(props) => props.size === 'md' ? 300 + 'px' : `100%`};
  height: 100%;
  top: 0;
  z-index: 10;
  transition-duration: 500ms;
  left: ${(props) => props.size === 'md' ? -300 + 'px' : `-100%`};
  box-shadow: none;
  ${(props) => props.toggled && css`
    left: 0;
    box-shadow: 5px 0px 10px rgba(0,0,0,0.5);
  `}
`;

const Menu = () => {
  const [toggled, setToggled] = React.useState(false);
  const menuContainer = React.useRef(null);
  const menuButton = React.useRef(null);
  const [curSize, setCurSize] = React.useState(window.innerWidth > 600 ? 'md' : 'sm');

  React.useEffect(() => {
    let menuClicked = false;
    const checkIfClickedMenuContainer = () => {
      if (!toggled) return;
      if (!menuClicked) {
        setToggled(false);
        MenuButton.toggleOnClick();
      } else {
        menuClicked = false;
      }
    }
    const currentMenuContainer = menuContainer.current;
    const currentMenuButton = menuButton.current;
    const setMenuClicked = () => menuClicked = true;
    const onResize = () => {
      const windowSize = window.innerWidth > 600 ? 'md' : 'sm';
      if (windowSize !== curSize) {
        setCurSize(windowSize);
      }
    }
    window.addEventListener('resize', onResize);
    currentMenuContainer.addEventListener('click', setMenuClicked);
    currentMenuButton.addEventListener('click', setMenuClicked);
    window.addEventListener('click', checkIfClickedMenuContainer);
    return () => {
      currentMenuContainer.removeEventListener('click', setMenuClicked);
      currentMenuButton.removeEventListener('click', setMenuClicked);
      window.removeEventListener('click', checkIfClickedMenuContainer);
    }
  }, [toggled, curSize])

  return (
    <Curtain toggled={toggled}>
      <MenuContainer size={curSize} ref={menuContainer} toggled={toggled}>
        <MenuItemContainer />
        <LinkContainer />
      </MenuContainer>
      <MenuButton ref={menuButton} onClick={(toggled) => setToggled(toggled)} />
    </Curtain>
  )
}

export default Menu
