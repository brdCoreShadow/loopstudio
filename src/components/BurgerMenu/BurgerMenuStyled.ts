import styled from "@emotion/styled";

export const BurgerMenuCon = styled.div`
position: absolute;
top: 0;
left: 0;

width: 100%;

padding-top: 42px;
padding-bottom: 224px;
padding-left: 24px;
padding-right: 24px;

background-color: #000;
`

export const BurgerMenuHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;


`

export const CloseBtn = styled.button`
width: 20px;
height: 20px;

background-color: transparent;
background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E");

`

export const MenuLinksCon = styled.div`
margin-top: 128px;
& a{
    text-transform: uppercase;

    font-weight: 300;
    font-size: 24px;
    font-family: "Josephine";
}
`