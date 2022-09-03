import styled from 'styled-components';

export const LoaderWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Spinner = styled.span`
width: 16px;
height: 16px;
& svg {
    animation: icon-spin 2s infinite linear;
}
@keyframes icon-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(359deg);
    }
}
`

export const Message = styled.span`
    margin-left: 10px;
`