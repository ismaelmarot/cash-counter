import styled from 'styled-components';
import backgroundImage from '../src/assets/background_png.png';

export const ContainerStyled = styled.div`
    border: 5px solid rgb(51,51,51);
    padding-top: 1rem;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
export const H2 = styled.h2`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    color: rgb(255, 255, 255);
`
export const DivStyled = styled.div`
    padding: 1rem;
`;
