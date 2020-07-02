import React from 'react';
import styled, {css} from 'styled-components';
import MenuButton from './MenuButton';

const Curtain = styled.div`
  position: fixed;
  width: 100%;
  z-index: 0;
  background-color: transparent;
  transition-duration: 200ms;
  ${(props) => props.toggled && css`
    background-color: rgba(255,255,255,0.5);
  `}
`;

const MenuContainer = styled.div`
  background-color: white;
  position: fixed;
  height: 100%;
  width: ${window.innerWidth > 600 ? 300 : Math.min(window.innerWidth)}px;
  top: 0;
  z-index: 10;
  transition-duration: 500ms;
  left: ${window.innerWidth > 600 ? -300 : -Math.min(window.innerWidth)}px;
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
    currentMenuContainer.addEventListener('click', setMenuClicked);
    currentMenuButton.addEventListener('click', setMenuClicked);
    window.addEventListener('click', checkIfClickedMenuContainer);
    return () => {
      currentMenuContainer.removeEventListener('click', setMenuClicked);
      currentMenuButton.removeEventListener('click', setMenuClicked);
      window.removeEventListener('click', checkIfClickedMenuContainer);
    }
  }, [toggled])

  return (
    <Curtain toggled={toggled}>
      <MenuContainer ref={menuContainer} toggled={toggled}>
        <div>이게 메뉴냐</div>
      </MenuContainer>
      <MenuButton ref={menuButton} onClick={(toggled) => setToggled(toggled)} />
    </Curtain>
  )
}

export default Menu
