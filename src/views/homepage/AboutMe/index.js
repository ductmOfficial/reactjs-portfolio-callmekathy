import { useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandSkype } from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';
import Pic from './Pic';

// assets
import ImageAvatar from 'assets/images/avatar.jpg';

// const avatarJPG =
// 'https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-6/270119985_2109344799219883_8385049583524957214_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Nfr-rbqmBqEAX9VNNfJ&_nc_ht=scontent.fsgn12-1.fna&oh=00_AfAVlmPWdXPbaYuWbZpUcgOg2wAhbXnn_n2bHrjyiyAIWA&oe=64EF81A3';

const AboutMe = () => {
  const revealContainer = useRef(null);
  const { userProfile: profile = {}, srConfig } = config;

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, [srConfig]);

  return (
    <Box ref={revealContainer} component="section" id="about-me" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Box maxWidth={1200} margin="0 auto">
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  mb: { xs: 4, lg: 0 },
                }}
              >
                <Pic sx={{ maxWidth: { xs: 400, lg: 320 } }}>
                  <div className="wrapper">
                    <img src={ImageAvatar} alt="Avatar" className="img" />
                  </div>
                </Pic>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box sx={{ textAlign: { lg: 'right' } }}>
                <Typography variant="numberedHeading" component="h2" gutterBottom>
                  About me
                </Typography>
                <Typography gutterBottom>
                  Hello there! I’m Khue, and I work as an English teacher. Undoubtedly, I am proficient in English. Recently, I have a keen
                  interest in technology environment and the software development process. I am particularly drawn to opportunities for
                  learning, communication, and collaboration within teams. Quality assurance is my passion, and I have found my niche in the
                  Software Testing field.
                </Typography>
                <Typography gutterBottom>
                  Currently, I am actively seeking opportunities as a Manual Tester, preferably starting with website testing. I am eager
                  for a chance to prove myself and take on new challenges in this domain.
                </Typography>
                <Typography gutterBottom>
                  I have acquired fundamental knowledge in Software testing, including ISTQB Foundation Level certification, API Testing
                  using Postman, SQL Foundation, and more. I believe that my proficiency in English can also be a valuable asset in this
                  role.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box>
                <Typography
                  variant="numberedHeading"
                  component="h2"
                  gutterBottom
                  sx={{ visibility: 'hidden', display: { xs: 'none', lg: 'block' } }}
                >
                  About me
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={12}>
                    <Box>
                      <Typography variant="h5">Phone</Typography>
                      <Typography color="text.secondary">{profile.phoneNumber}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={12}>
                    <Box>
                      <Typography variant="h5">Email</Typography>
                      <Typography color="text.secondary">{profile.email}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={12}>
                    <Box>
                      <Typography variant="h5">Location</Typography>
                      <Typography color="text.secondary">{`${profile.address.city}, ${profile.address.country}`}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={12}>
                    <Box>
                      <Typography variant="h5">Skype</Typography>
                      <Typography color="text.secondary">{profile.social.skype}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={12}>
                    <Box>
                      <Typography variant="h5" gutterBottom>
                        You can follow me also here:
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <IconButton
                          color="primary"
                          href={profile.social.facebook}
                          target="_blank"
                          sx={{
                            color: 'common.white',
                            bgcolor: 'primary.main',
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          <IconBrandFacebook stroke={1.5} size="1.3rem" />
                        </IconButton>
                        <IconButton
                          color="primary"
                          href={profile.social.linkedin}
                          target="_blank"
                          sx={{
                            color: 'common.white',
                            bgcolor: 'primary.main',
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          <IconBrandLinkedin stroke={1.5} size="1.3rem" />
                        </IconButton>
                        <IconButton
                          color="primary"
                          href={`skype:${profile.social.skype}?chat`}
                          sx={{
                            color: 'common.white',
                            bgcolor: 'primary.main',
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          <IconBrandSkype stroke={1.5} size="1.3rem" />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
