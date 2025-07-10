import About from "./components/About/About";
import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Logo from "./components/Logo/Logo";
import NavList from "./components/NavList/NavList";
import SocNet from "./components/SocNet/SocNet";
import { useToggle } from "./hooks/useToggle";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

function App() {
  const { isShare, openShare, closeShare } = useToggle();

  return (
    <div>
      {isShare && <BurgerMenu closeShare={closeShare} isShare={isShare}/>}
      <Header>
        <div>
          <Logo />
          <BurgerBtn openShare={openShare}/>
        </div>
        <Hero />
      </Header>
      <SharedLayout>
        <Intro />
        <About />
      </SharedLayout>
      <Footer>
        <Logo />
        <NavList />
        <SocNet />
      </Footer>
    </div>
  );
}

export default App;
