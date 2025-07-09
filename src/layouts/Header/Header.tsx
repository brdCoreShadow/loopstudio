import * as SC from "./HeaderStyled"

import { ChildrenProps } from "@/types/types";

const Header:React.FC<ChildrenProps> = ({children}) => {
    return ( 
        <SC.HeaderCon>
            {children}
        </SC.HeaderCon>
     );
}
 
export default Header;