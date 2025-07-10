import styled from "@emotion/styled";

export const IntroCon = styled.div`
  margin-top: 96px;
  margin-bottom: 96px;

  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 1280px) {
    position: relative;

    margin-top: 160px;
    margin-bottom: 184px;

    padding-left: 164px;
    padding-right: 164px;
  }
`;

export const IntroPicThumb = styled.div`
  margin-bottom: 48px;

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const IntroContentCon = styled.div`
  text-align: center;

  & > h3 {
    margin-bottom: 16px;

    text-transform: uppercase;

    font-size: 32px;
    font-weight: 300;
    font-family: "Josephine";

    @media (min-width: 1280px){
        font-size: 48px;
    }
  }

  & > p {
    font-size: 15px;
    font-weight: 400;
    font-family: "Alata";
  }

  @media (min-width: 1280px) {
    position: absolute;

    bottom: 0;
    right: 0;

transform: translate(-30%, 0);

    width: 38%;

    padding-top: 96px;
    padding-left: 96px;

    text-align: left;

    background-color: #fff;
  }
`;
