import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const MenuItemContainer = () => {
  return (
    <Container>
      <MenuItem routeTo="/" name="홈" />
      <MenuItem routeTo="/who" name="누구?" />
      <MenuItem routeTo="/works" name="경력은?" />
      <MenuItem routeTo="/level" name="잘해요?" />
    </Container>
  )
}

export default MenuItemContainer
