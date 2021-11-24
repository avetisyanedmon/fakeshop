import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    width: 100%;
    min-height: 50px;
    background-color: #2db300;
`
export const CartItemsCount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const SumWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    h1 {
        padding: 0 10px;
    }
`
export const AddBalance = styled.div`
    button {
        margin-right: 25px;
        padding: 5px 10px;
        cursor: pointer;
        background-color: #4cc724;
        border: 1px solid #262626;
        border-radius: 5px;
        :hover{
            background-color: #79e755;
        }
    }
`