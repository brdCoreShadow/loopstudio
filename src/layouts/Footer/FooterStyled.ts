import styled from "@emotion/styled";

export const FooterCon = styled.footer`
padding-top: 56px;
padding-bottom: 56px;
padding-left: 52px;
padding-right: 52px;

text-align: center;

background-color: #000;

@media (min-width: 1280px){
    padding-top: 44px;
    padding-bottom: 32px;
    padding-left: 164px;
    padding-right: 164px;
}

& img{
margin-left: auto;
margin-right: auto;

@media (min-width: 1280px){
    margin-bottom: 16px;
    margin-left: 0;
    margin-right: 0;
}
}
`

export const FooterDeskFlexCon = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
`