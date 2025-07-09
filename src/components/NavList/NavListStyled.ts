import styled from "@emotion/styled";

export const NavListStyled = styled.ul`
  margin-top: 32px;
  margin-bottom: 48px;
`;

export const NavItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  & > a {
    font-family: "Alata";
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;

    color: #fff;
  }
`;
