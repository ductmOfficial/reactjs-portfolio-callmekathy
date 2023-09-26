// material-ui
import Box from '@mui/material/Box';

// project imports
import AboutMe from './AboutMe';
import Education from './Education';
import FunFacts from './FunFacts';
import GetInTouch from './GetInTouch';
import Hero from './Hero';
import Skills from './Skills';

const Homepage = () => (
  <Box component="article">
    <Hero />
    {Boolean(0) && <FunFacts />}
    <AboutMe />
    <Skills />
    <Education />
    <GetInTouch />
  </Box>
);

export default Homepage;
