import * as SC from "./AboutStyled"

const About:React.FC = () => {
    return ( 
        <SC.AboutCon>
            <h3>our creations</h3>
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
            <SC.AboutBtn>see all</SC.AboutBtn>
        </SC.AboutCon>
     );
}
 
export default About;