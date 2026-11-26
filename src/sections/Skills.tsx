import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconAward } from "@tabler/icons-react";

import { useReveal } from "../components/useReveal";
import { skills } from "../content/profile";
import { pastel } from "../theme";

function SkillCard({ title, index }: { title: string; index: number }) {
  const revealRef = useReveal<HTMLDivElement>(index * 100);

  return (
    <Card ref={revealRef} elevation={0} sx={{ height: 1 }}>
      <CardContent
        sx={{
          height: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: pastel.light,
          color: "text.primary",
        }}
      >
        <Avatar sx={{ width: 80, height: 80, bgcolor: pastel[300], color: "common.white", mb: 2 }}>
          <IconAward stroke={1} size="3.5rem" aria-hidden />
        </Avatar>
        <Typography variant="h3" align="center" sx={{ fontWeight: "light" }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <Box component="section" id="experiences-skills" sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="xl">
        <Box ref={revealRef} sx={{ maxWidth: 720, margin: "0 auto", textAlign: "center", mb: 4 }}>
          <Typography variant="numberedHeading" component="h2" gutterBottom>
            Valuable Skills
          </Typography>
          <Typography variant="lead">{skills.intro}</Typography>
        </Box>
        <Box sx={{ maxWidth: 640, margin: "0 auto" }}>
          <Grid container spacing={2}>
            {skills.items.map((title, index) => (
              <Grid key={title} size={{ xs: 6, lg: 4 }}>
                <SkillCard title={title} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
