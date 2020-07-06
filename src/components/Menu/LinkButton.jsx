import React from 'react'
import styled from 'styled-components';

const Link = styled.a`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    cursor: pointer;
    background-color: ${(props) => props.color};
    border-radius: ${(props) => props.size}px;
    transition: opacity 0.2s, transform 0.2s;
    align-items: center;
    margin: 10px;
    justify-content: center;
    display: flex;
    &:hover {
        opacity: 0.5;
        transform: scale(1.2);
    }
    user-select: none;
`;

const Icon = styled.img`
    display: flex;
    width: ${(props) => props.needSpace ? '80%' : '100%'};
    height: ${(props) => props.needSpace ? '80%' : '100%'};
`;

const LinkButton = ({src, href, color, needSpace}) => {
    return (
        <Link target="_blank" href={href} color={color} size="50">
            <Icon src={src} size="50" needSpace={needSpace}/>
        </Link>
    )
}

export default LinkButton
