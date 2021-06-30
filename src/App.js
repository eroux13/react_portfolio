import './App.css';
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import Header Component
import Header from "./components/Header/Header";
// Import Jumbotron Component
import Jumbotron from './components/Jumbotron/Jumbotron';
// Import Particles Component
import Particles from 'react-particles-js';
// Import About Me Component
import AboutMe from './components/AboutMe/AboutMe';
// Import Skills Component
import Skills from './components/Skills/Skills';
// Import Experience Component
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "square",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Header/>
      <Jumbotron/>
      <AboutMe/>
      <Skills/>
      <Experience/>
    </>
  );
}

export default App;
