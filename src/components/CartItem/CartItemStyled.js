import styled from "styled-components";

export const CartItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 15px;
    margin: 15px;
    border: 1px solid black;
    border-radius: 3px;
    button {
        padding: 5px 10px;
        background-color: #4cc724;
        border: 0 !important;
        border-radius: 3px;
        cursor: pointer;
        :hover{
            background-color: #79e755;
        }
    }
`