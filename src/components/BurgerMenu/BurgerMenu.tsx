import * as SC from "./BurgerMenuStyled";

import Logo from "../Logo/Logo";
import MenuPortal from "../MenuPortal/MenuPortal";
import NavList from "../NavList/NavList";
import { useEffect } from "react";

type Props = {
    closeShare:()=> void;
    isShare:boolean;
}

const BurgerMenu: React.FC<Props> = ({closeShare, isShare}) => {

useEffect(() => {

if (isShare){
    document.body.style.overflow = "hidden"
} else {
    document.body.style.overflow = ""
}
return () => {
    document.body.style.overflow = ""
}
}, [isShare])

  return (
    <MenuPortal>
      <SC.BurgerMenuCon>
        <SC.BurgerMenuHeader>
          <Logo />
          <SC.CloseBtn onClick={closeShare}></SC.CloseBtn>
        </SC.BurgerMenuHeader>
        <SC.MenuLinksCon>
        <NavList />
        </SC.MenuLinksCon>
      </SC.BurgerMenuCon>
    </MenuPortal>
  );
};

export default BurgerMenu;
