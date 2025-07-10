import * as SC from "./BurgerMenuStyled";

import Logo from "../Logo/Logo";
import MenuPortal from "../MenuPortal/MenuPortal";
import NavList from "../NavList/NavList";

const BurgerMenu: React.FC = () => {
  return (
    <MenuPortal>
      <SC.BurgerMenuCon>
        
          <SC.BurgerMenuHeader>
            <Logo />
            <SC.CloseBtn></SC.CloseBtn>
          </SC.BurgerMenuHeader>
     
        <NavList />
      </SC.BurgerMenuCon>
    </MenuPortal>
  );
};

export default BurgerMenu;
