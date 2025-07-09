import * as SC from "./NavListStyled"

const NavList:React.FC = () => {
    return ( 
        <SC.NavListStyled>
            <SC.NavItem>
                <a href="#">About</a>
            </SC.NavItem>
            <SC.NavItem>
                <a href="#">Career</a>
            </SC.NavItem>
            <SC.NavItem>
                <a href="#">Events</a>
            </SC.NavItem>
            <SC.NavItem>
                <a href="#">Products</a>
            </SC.NavItem>
            <SC.NavItem>
                <a href="#">Support</a>
            </SC.NavItem>
        </SC.NavListStyled>
     );
}
 
export default NavList;