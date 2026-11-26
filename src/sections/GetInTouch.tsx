import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useReveal } from "../components/useReveal";
import { getInTouch, hireMeMailto } from "../content/profile";

export function GetInTouch() {
  const revealRef = useReveal<HTMLElement>();

  return (
    <Box
      ref={revealRef}
      component="section"
      id="get-in-touch"
      sx={{ bgcolor: "background.paper", py: 8 }}
    >
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <Typography variant="numberedHeading" component="h2" gutterBottom>
            Get In Touch
          </Typography>
          <Typography variant="lead" component="p" sx={{ mb: 4 }}>
            {getInTouch.text}
          </Typography>
          <Button variant="contained" size="large" target="_blank" href={hireMeMailto}>
            Say Hello
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
