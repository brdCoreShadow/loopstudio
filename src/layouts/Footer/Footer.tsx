import * as SC from "./FooterStyled"

import { ChildrenProps } from "@/types/types";

const Footer:React.FC<ChildrenProps> = ({children}) => {
    return ( 
        <SC.FooterCon>
            {children}
        </SC.FooterCon>
     );
}
 
export default Footer;