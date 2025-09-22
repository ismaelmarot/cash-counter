import styled from 'styled-components';
import { Card } from '../../App.styled';

export const CardStyled = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ResumeContainer = styled.div`
    width: 95vw;
    height: 72vh;
    padding: 1rem;
    border-radius: 1rem;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);

    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgb(136, 136, 136) rgb(34, 34, 34);

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: rgb(34, 34, 34);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(136, 136, 136);
        border-radius: 4px;
    }
`;

export const H3 = styled.h3`
    padding-bottom: .7rem;
    color: rgb(128, 128, 128);
    border-bottom: 2px solid rgb(128, 128, 128);
`;

export const Amount = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.5rem
`;

export const Quantity = styled.span`
    color: rgb(255, 255, 255);
    font-size: 2rem;
`;

export const NumberStyled = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ButtonStyled = styled.button`
    border-radius: 5px;
    padding: .5rem 1rem;
    color: rgb(2, 0, 0);
    background-color: rgb(131,227,99);
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    font-weight: bold;
`;

export const Total = styled.div`
    width: 100%;
    text-align: end;
`;

export const IntegerPart = styled.span`
    font-size: 3rem;
    color: rgb(131,227,99);
`;

export const DecimalPart = styled.span`
    font-size: 2rem;
    color: rgb(128, 128, 128);
`;