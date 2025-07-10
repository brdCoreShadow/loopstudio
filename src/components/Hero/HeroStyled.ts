import styled from "@emotion/styled";

export const HeroCon = styled.div`
  margin-top: 188px;

  padding-top: 26px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  border: 1px solid #fff;

  @media (min-width: 1280px) {
    width: 45%;

    margin-top: 124px;

    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }

  & > h3 {
    font-size: 40px;
    line-height: 0.95;
    font-family: "Josephine";
    font-weight: 300;

    color: #fff;

    @media (min-width: 1280px) {
      font-size: 72px;
    }
  }
`;
