import styled from 'styled-components';
import { Card } from '../../App.styled';
import { flex } from '../../mixins/setFlex';
import { size } from '../../mixins/setSize';
import { Colors } from '../../constants/colors';
import { Col } from 'react-bootstrap';
import { C } from 'vitest/dist/chunks/reporters.d.BFLkQcL6.js';

export const CardStyled = styled(Card)`
    ${flex('column', 'center', 'center')};
`;

export const ResumeContainer = styled.div`
    ${size('95vw', '72vh')};
    padding: 1rem;
    border-radius: 1rem;
    color: ${Colors.white};
    background-color: ${Colors.black};

    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${Colors.grey} ${Colors.lightBlack};

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: ${Colors.lightBlack};
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${Colors.grey};
        border-radius: 4px;
    }
`;

export const H3 = styled.h3`
    padding-bottom: .7rem;
    color: ${Colors.grey};
    border-bottom: 2px solid ${Colors.grey};
`;

export const Amount = styled.span`
    ${flex('row', 'center', 'center')};
    font-size: 1.5rem
`;

export const Quantity = styled.span`
    color: ${Colors.white};
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