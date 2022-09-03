import styled from 'styled-components';

export const ContactItem = styled.li`
height: 30px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid black;

:first-child {
    border-top: 1px solid black;
}
`;

export const ContactWrapper = styled.span`
width: 190px;
`;

export const DeleteButton = styled.button`
transition: color 300ms ease-in-out;

:hover, :focus {
    color: #ffffff;
}
`;