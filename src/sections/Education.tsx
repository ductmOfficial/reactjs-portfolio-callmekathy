import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconCertificate } from "@tabler/icons-react";

import { useReveal } from "../components/useReveal";
import { LineText } from "../components/LineText";
import { useContent } from "../content";

import type { EducationItem } from "../content";

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  const { labels } = useContent();
  const revealRef = useReveal<HTMLDivElement>(index * 100);

  return (
    <Card
      ref={revealRef}
      elevation={0}
      sx={{ height: 1, border: "1px solid", borderColor: "divider" }}
    >
      <CardContent>
        <Typography component="div" sx={{ color: "primary.main" }}>
          <IconCertificate stroke={1} size="5rem" aria-hidden />
        </Typography>
        <Typography variant="overline">{item.provider}</Typography>
        <Typography variant="h2" component="h3">
          {item.degree}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography variant="caption">
            <LineText line={item.date} />
          </Typography>
          {item.grade && (
            <Typography variant="caption">
              {labels.grade}: {item.grade}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export function Education() {
  const { education } = useContent();
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <Box component="section" id="education" sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        <Box ref={revealRef} sx={{ maxWidth: 740, margin: "0 auto", textAlign: "center", mb: 4 }}>
          <Typography variant="numberedHeading" component="h2" gutterBottom>
            {education.title}
          </Typography>
          <Typography variant="lead">{education.intro}</Typography>
        </Box>
        <Grid container spacing={2}>
          {education.items.map((item, index) => (
            <Grid key={item.degree} size={{ xs: 12, sm: 6, lg: 3 }}>
              <EducationCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
