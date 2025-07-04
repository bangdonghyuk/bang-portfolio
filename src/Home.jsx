import { useRef } from 'react';

import Navbar from './components/Navbar';
import Main from './sections/Main';
import Power from './sections/Power';
import Skills from './sections/Skills';
import Career from './sections/Career';
import Projects from './sections/Projects';
import About from './sections/About';
import Feedbacks from './sections/Feedbacks';

function Home() {
  const mainRef = useRef();
  const skillsRef = useRef();
  const careerRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const feedbackRef = useRef();

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-[#0f182a]'>
      <section ref={mainRef}><Main /></section>
      <Navbar
        onScrollTo={{
          main: () => scrollTo(mainRef),
          skills: () => scrollTo(skillsRef),
          career: () => scrollTo(careerRef),
          projects: () => scrollTo(projectsRef),
          about: () => scrollTo(aboutRef),
          feedbacks: () => scrollTo(feedbackRef),
        }}
      />
      <section ref={aboutRef}><About /></section>
      <section ref={feedbackRef}><Feedbacks /></section>
      <section ref={skillsRef}><Power /></section>
      <section><Skills /></section>
      <section ref={careerRef}><Career /></section>
      <section ref={projectsRef}><Projects /></section>
    
    </div>
  );
}

export default Home;
