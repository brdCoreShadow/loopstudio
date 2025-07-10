import { ChildrenProps } from "@/types/types";

import ReactDOM from "react-dom";

const MenuPortal:React.FC<ChildrenProps> = ({children}) => {
    const portalRoot = document.getElementById("menu-portal");
    if (!portalRoot) return null;

    return ReactDOM.createPortal(children, portalRoot)
}
 
export default MenuPortal;