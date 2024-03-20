import { Fragment } from "react";
import Main from "./component/Main";
import About from "./component/About";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Project from "./component/Project";
import SmoothScrollWrapper from "./component/SmoothScrollWrapper";

export default function Home() {
  return (
    <Fragment>
      <SmoothScrollWrapper>
      <Main/>
      </SmoothScrollWrapper>
      <SmoothScrollWrapper>
      <About/>
      </SmoothScrollWrapper>
      <SmoothScrollWrapper>
      <Project/>
      </SmoothScrollWrapper>
      <SmoothScrollWrapper>
      <Skills/>
      </SmoothScrollWrapper>
      <SmoothScrollWrapper>
      <Contact/>
      </SmoothScrollWrapper>
      <Footer/>
    </Fragment>
     );
}
