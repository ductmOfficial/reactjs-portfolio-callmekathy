import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconBriefcase } from "@tabler/icons-react";

import { LineText } from "../components/LineText";
import { useReveal } from "../components/useReveal";
import { useContent } from "../content";

import type { ExperienceItem } from "../content";

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const revealRef = useReveal<HTMLDivElement>(index * 100);

  return (
    <Card
      ref={revealRef}
      elevation={0}
      sx={{ height: 1, border: "1px solid", borderColor: "divider" }}
    >
      <CardContent>
        <Typography component="div" sx={{ color: "primary.main" }}>
          <IconBriefcase stroke={1} size="3.5rem" aria-hidden />
        </Typography>
        <Typography variant="overline">{item.company}</Typography>
        <Typography variant="h2" component="h3">
          {item.role}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: 2, mb: 1 }}>
          <Typography variant="caption">{item.period}</Typography>
          <Typography variant="caption">{item.place}</Typography>
        </Box>
        <Typography variant="body2">
          <LineText line={item.summary} />
        </Typography>
      </CardContent>
    </Card>
  );
}

export function Experience() {
  const { experience } = useContent();
  const revealRef = useReveal<HTMLHeadingElement>();

  return (
    <Box component="section" id="experience" sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        <Typography
          ref={revealRef}
          variant="numberedHeading"
          component="h2"
          sx={{ display: "block", textAlign: "center", mb: 4 }}
        >
          {experience.title}
        </Typography>
        <Grid container spacing={2}>
          {experience.items.map((item, index) => (
            <Grid key={item.role} size={{ xs: 12, lg: 4 }}>
              <ExperienceCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
