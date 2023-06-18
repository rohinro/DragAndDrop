import styled from "styled-components"

export const HeaderContainer = styled.div`
    display:flex;
    max-width:100%;
    position: sticky; top 0;
    height:40px;
    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
    padding:20px;
    justify-content:space-between;
    >img{
        cursor:pointer;
        border-radius: 30px
    }
    >button{
        padding:5px 30px;
        color:white;
        background-color: #5D8AA8;
        border:1px solid white;
        border-radius:6px;
        cursor: pointer;
        :hover{
            background-color: #acacac;
            color:black;
        }
    }
`;


