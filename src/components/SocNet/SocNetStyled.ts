import styled from "@emotion/styled";

export const SocNetList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

margin-bottom: 16px;

& > li:not(:last-of-type){
    margin-right: 16px;
}
`

export const IPNote = styled.p`
font-size: 15px;
line-height: 1.7;
font-family: "Alata";

color: rgb(255, 255, 255, 0.5)
;
`