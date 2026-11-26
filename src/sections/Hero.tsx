import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { contactMailto, profile, useContent } from "../content";

export function Hero() {
  const { hero, labels, resumeUrl } = useContent();

  return (
    <Box component="section" id="hero" sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 1000 }}>
          <Typography sx={{ color: "primary.main" }}>{hero.greeting}</Typography>
          <Typography variant="largeHeading" component="h1" sx={{ color: "text.primary" }}>
            {`${profile.firstName} ${profile.lastName}`}
          </Typography>
          <Typography
            variant="mediumHeading"
            component="h2"
            gutterBottom
            sx={{ color: "text.secondary" }}
          >
            {hero.tagline}
          </Typography>
          <Box sx={{ maxWidth: 760 }}>
            <Typography variant="lead" component="p">
              {hero.intro}
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button size="large" target="_blank" variant="contained" href={contactMailto}>
              {hero.action}
            </Button>
            <Button size="large" variant="outlined" target="_blank" href={resumeUrl}>
              {labels.downloadCv}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
