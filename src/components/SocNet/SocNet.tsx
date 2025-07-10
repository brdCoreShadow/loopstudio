import * as SC from "./SocNetStyled"

import fbIcon from "../../assets/images/icon-facebook.svg"
import twitterIcon from "../../assets/images/icon-twitter.svg"
import pinterestIcon from "../../assets/images/icon-pinterest.svg"
import isntagramIcon from "../../assets/images/icon-instagram.svg"

const SocNet:React.FC = () => {
    return ( 
        <SC.SocNetCon>
            <SC.SocNetList>
                <li>
                    <img src={fbIcon} alt="fbIcon" />
                </li>
                <li>
                    <img src={twitterIcon} alt="twitterIcon" />
                </li>
                <li>
                    <img src={pinterestIcon} alt="pinterestIcon" />
                </li>
                <li>
                    <img src={isntagramIcon} alt="instagramIcon" />
                </li>
            </SC.SocNetList>
            <SC.IPNote>© 2021 Loopstudios. All rights reserved.</SC.IPNote>
        </SC.SocNetCon>
     );
}
 
export default SocNet;