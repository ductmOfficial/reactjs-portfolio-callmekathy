import { forwardRef, useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import { IconAward } from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';
import { Avatar } from '@mui/material';

const skills = [
  { title: 'Fluent English' },
  { title: 'ISTQB Foundation' },
  { title: 'API Testing' },
  { title: 'SQL Foundation' },
  { title: 'Jira management' },
  { title: 'Something' },
];

const Skills = () => {
  const revealTitle = useRef(null);
  const revealCards = useRef([]);
  const { srConfig } = config;

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [srConfig]);

  return (
    <Box component="section" id="experiences-skills" sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center" mb={4}>
          <Typography variant="numberedHeading" component="h2" gutterBottom>
            Experiences and Skills
          </Typography>
          <Typography variant="lead">
            I have been an English teacher’s assistant at Vietnam Australia International School since 2018. I support foreign teachers,
            teach the lessons for students, connect expat teachers and parents, and work as a teacher sometimes.
          </Typography>
        </Box>
        <Box maxWidth={640} margin="0 auto">
          <Grid container spacing={2} justifyContent="stretch">
            {skills.map((item, index) => (
              <Grid key={index} item xs={6} lg={4}>
                {/* eslint-disable-next-line no-return-assign */}
                <SkillCard ref={(el) => (revealCards.current[index] = el)} {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const SkillCard = forwardRef((props, ref) => {
  const { ...item } = props;

  return (
    <Card ref={ref} elevation={0} sx={{ height: 1 }}>
      <CardContent
        sx={{
          height: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          bgcolor: 'primary.light',
          color: 'common.white',
        }}
      >
        <Avatar color="common.white" sx={{ width: 80, height: 80, bgcolor: 'primary.300', mb: 2 }}>
          <IconAward stroke={1} size="3.5rem" />
        </Avatar>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'light' }}>
          {item.title}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default Skills;
