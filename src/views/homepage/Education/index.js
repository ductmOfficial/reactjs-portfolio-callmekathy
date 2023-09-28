import { forwardRef, useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import { IconCertificate } from '@tabler/icons';

// project imports
import config from 'config';
import sr from 'lib/sr';

const education = [
  { id: 1, title: 'Bachelor Degree', provider: 'Can Tho University' },
  { id: 2, title: 'IELTS Certification 8.0', provider: 'IDP Education' },
  { id: 3, title: 'ISTQB Foundation Level', provider: 'ATSQA in the U.S.' },
];

const Education = () => {
  const revealTitle = useRef(null);
  const revealCards = useRef([]);
  const { srConfig } = config;

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [srConfig]);

  return (
    <Box component="section" id="education" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={740} margin="0 auto" textAlign="center" mb={4}>
          <Typography variant="numberedHeading" component="h2" gutterBottom>
            My Education
          </Typography>
          <Typography variant="lead">
            I’m an English Bachelor. I graduated with a 3.8 in GPA (out of 4) from Can Tho University. Recently, I have just obtained an
            ISTQB Foundation Level Certificate also.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {education.map((item, index) => (
              <Grid key={item.id} item xs={12} lg={4}>
                {/* eslint-disable-next-line no-return-assign */}
                <EducationCard ref={(el) => (revealCards.current[index] = el)} {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const EducationCard = forwardRef((props, ref) => {
  const { ...item } = props;

  return (
    <Card
      ref={ref}
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <CardContent>
        <Typography color="primary.main">
          <IconCertificate stroke={1} size="5rem" />
        </Typography>
        <Typography variant="overline">{item.provider}</Typography>
        <Typography variant="h2">{item.title}</Typography>
        <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
      </CardContent>
    </Card>
  );
});

export default Education;
