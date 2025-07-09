import * as SC from "./IntroStyled"

import interactivePic from "../../assets/images/mobile/image-interactive.jpg";

const Intro:React.FC = () => {
  return (
    <SC.IntroCon>
      <SC.IntroPicThumb>
        <img src={interactivePic} alt="interactivePic" />
      </SC.IntroPicThumb>
      <SC.IntroContentCon>
        <h3>The leader in interactive VR</h3>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </SC.IntroContentCon>
    </SC.IntroCon>
  );
};

export default Intro;
