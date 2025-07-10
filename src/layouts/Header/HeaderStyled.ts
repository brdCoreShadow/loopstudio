import styled from "@emotion/styled";

import mobHeroPic from "../../assets/images/mobile/image-hero.jpg"
import deskHeroPic from "../../assets/images/desktop/image-hero.jpg"

export const HeaderCon = styled.header`
padding-top: 40px;
padding-bottom: 228px;
padding-left: 24px;
padding-right: 24px;

background-image: url(${mobHeroPic});
background-size: cover;

@media (min-width: 1280px){
    padding-top: 64px;
    padding-bottom: 146px;
    padding-left: 164px;
    padding-right: 164px;

    background-image: url(${deskHeroPic});
    background-size: cover;
}

& > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
`