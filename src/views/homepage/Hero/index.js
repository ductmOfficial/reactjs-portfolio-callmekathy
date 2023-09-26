// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// project imports
import config from 'config';

const Hero = () => {
  const { userProfile: profile = {} } = config;

  return (
    <Box component="section" id="hero" sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="xl">
        <Box maxWidth={1000}>
          <Typography color="primary.main">Hi, my name is</Typography>
          <Typography variant="largeHeading" component="h2" color="text.primary">
            {`${profile.firstName} ${profile.lastName}`}
          </Typography>
          <Typography variant="mediumHeading" component="h2" color="text.secondary" gutterBottom>
            I guarantee the quality of web.
          </Typography>
          <Box maxWidth={600}>
            <Typography variant="lead">
              I used to be an English teacher’s assistant at an international school for about 5 years. Currently, I am mainly working as an
              English tutor for primary students near my vicinity. Also, I am keeping it close to heart to move to a position in the IT
              field as a quality control or tester, so I give it a hundred percent to take some related courses for testing’s fundamental
              knowledge.
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button
              size="large"
              target="_blank"
              variant="contained"
              href={`mailto:${profile.email}?subject=An amazing job opportunity inside!`}
            >
              Hire me now
            </Button>
            <Button size="large" variant="outlined" target="_blank" href="/resume.pdf" aria-label="download cv">
              Download CV
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
