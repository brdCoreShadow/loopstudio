import  * as SC from "./BurgerBtnStyled"

type Props = {
    openShare: ()=> void;
}

const BurgerBtn:React.FC<Props> = ({openShare}) => {


    return ( 
        <SC.BurgerBtnStyled onClick={openShare}></SC.BurgerBtnStyled>
     );
}
 
export default BurgerBtn;