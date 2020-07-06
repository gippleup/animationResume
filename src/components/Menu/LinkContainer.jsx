import React from 'react';
import styled from 'styled-components';
import LinkButton from './LinkButton';
import githubIcon from './LinkButton/githubIcon.svg';
import pencilIcon from './LinkButton/pencil.png';


const Container = styled.div`
    position: absolute;
    width: 100%;
    background-color: lightgrey;
    display: flex;
    bottom: 0;
    height: 40%;
`;

const ButtonBox = styled.div`
    padding: 20px;
    display: flex;
`;

const LinkContainer = () => {
    return (
        <Container>
            <ButtonBox>
                <LinkButton src={githubIcon} href="https://github.com/gippleup" color="white" />
                <LinkButton src={pencilIcon} href="https://gippleup.github.io" color="white" needSpace />
            </ButtonBox>
        </Container>
    )
}

export default LinkContainer
