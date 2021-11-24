import styled from "styled-components";

export const ProductItemStyled = styled.div`
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
`
export const ItemPrice = styled.div`

`
export const ItemTitle = styled.div`

`
export const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    background-color: #2db300;
    color: whitesmoke;
    border: 0 !important;
    border-radius: 3px;
    :hover{
            background-color: #79e755;
            color: #262626;
        }


`
export const ImageWrapper = styled.div`
    img{
        width: 100px;
    }
`