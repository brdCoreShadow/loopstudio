import About from "./components/About/About";
import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Logo from "./components/Logo/Logo";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

function App() {
  return (
    <div>
      <Header>
        <div>
          <Logo />
          <BurgerBtn />
        </div>
        <Hero />
      </Header>
      <SharedLayout>
        <Intro/>
        <About/>
      </SharedLayout>
    </div>
  );
}

export default App;
