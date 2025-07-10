import { useScreenSize } from "@/hooks/useScreenSize";
import * as SC from "./AboutStyled"

const About:React.FC = () => {

    const {isDesktop} = useScreenSize()

    return ( 
        <SC.AboutCon>
            <SC.AboutDeskFleskCon>
            <h3>our creations</h3>
            {isDesktop && <SC.AboutBtn>see all</SC.AboutBtn>}
            </SC.AboutDeskFleskCon>
            <SC.AboutList>
                <SC.AboutItem>
                    <h4>deep earth</h4>
                </SC.AboutItem>
                <SC.AboutItem>
                    <h4>nigth arcade</h4>
                </SC.AboutItem>
                <SC.AboutItem>
                    <h4>soccer tream vr</h4>
                </SC.AboutItem>
                <SC.AboutItem>
                    <h4>the grid</h4>
                </SC.AboutItem>
                <SC.AboutItem>
                    <h4>from up above vr</h4>
                </SC.AboutItem>
                <SC.AboutItem>
                    <h4>pocket borealis</h4>
                </SC.AboutItem>
                <SC.AboutItem>
                    <h4>the curiosity</h4>
                </SC.AboutItem>
                <SC.AboutItem>
                    <h4>make it fisheye</h4>
                </SC.AboutItem>
            </SC.AboutList>
            {!isDesktop && <SC.AboutBtn>see all</SC.AboutBtn>}
            
        </SC.AboutCon>
     );
}
 
export default About;