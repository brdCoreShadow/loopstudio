import styled from "@emotion/styled";

export const NavListStyled = styled.ul`
  margin-top: 32px;
  margin-bottom: 48px;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: 0;
  }
`;

export const NavItem = styled.li`
  padding-bottom: 8px;

  &:not(:last-of-type) {
    margin-bottom: 16px;

    @media (min-width: 1280px) {
      margin-bottom: 0;
      margin-right: 32px;

      &:hover,
      &:focus,
      &:active {
        border-bottom: 1px solid #fff;
      }
    }
  }

  & > a {
    font-family: "Alata";
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;

    color: #fff;
  }
`;
