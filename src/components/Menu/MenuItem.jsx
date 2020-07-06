import React from 'react'
import styled from 'styled-components'
import MenuButton from './MenuButton';
import { withRouter } from 'react-router-dom';

const Link = styled.div`
  display: flex;
  flex-basis: 100%;
`;


const MenuItemContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  padding: 20px;
  background-color: black;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: white;
  outline: 0;
  border: 0;
  font-size: 1.5rem;
  font-weight: bolder;
  font-family: 'Noto Sans KR', sans-serif;
  transition: background-color 0.2s;
  user-select: none;
  ${Link}:hover & {
    background-color: grey;
  }
  ${Link}:active & {
    transition: background-color 0s;
    background-color: red;
  }
`;

const MenuItem = ({routeTo, name, history}) => {
  const linkRef = React.useRef(null);
  const pushHistory = () => history.push(routeTo);

  React.useEffect(() => {
    const onClick = () => {
      pushHistory();
      MenuButton.toggleOnClick();
    }
    const currentLinkRef = linkRef.current;
    currentLinkRef.addEventListener('click', onClick);
    return () => {
      currentLinkRef.removeEventListener('click', pushHistory);
    };
  }, [])

  return (
    <Link ref={linkRef}>
        <MenuItemContainer>
            {name}
        </MenuItemContainer>
    </Link>
  )
}

export default withRouter(MenuItem);
