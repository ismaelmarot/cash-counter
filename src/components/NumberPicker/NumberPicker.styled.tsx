import { styled } from 'styled-components';

export const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
`;

export const PopupContent = styled.div`
    background: #fff;
    width: 90%;
    max-width: 300px;
    max-height: 90%;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const CloseButton = styled.button`
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
`;

export const ZeroFixed = styled.div`
    text-align: center;
    font-size: 3rem;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    background: #fafafa;
    cursor: pointer;

    &:hover {
        background: #f0f0f0;
    }
`;

export const NumberList = styled.div`
    flex: 1;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
`;

export const NumberItem = styled.div`
    padding: 1rem;
    text-align: center;
    font-size: 3rem;
    scroll-snap-align: center;
    cursor: pointer;


    &:hover {
        background: #f0f0f0;
    }
`;

export const SelectedNumber = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    font-size: 10rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
    cursor: pointer;
`;