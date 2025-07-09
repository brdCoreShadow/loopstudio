import styled from "@emotion/styled";

import mobHeroPic from "../../assets/images/mobile/image-hero.jpg"

export const HeaderCon = styled.header`
padding-top: 40px;
padding-bottom: 228px;
padding-left: 24px;
padding-right: 24px;

background-image: url(${mobHeroPic});
background-size: cover;

& > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
`