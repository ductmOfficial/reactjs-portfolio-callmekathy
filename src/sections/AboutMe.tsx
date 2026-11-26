import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandSkype } from "@tabler/icons-react";

import avatar from "../assets/avatar.jpg";
import { useReveal } from "../components/useReveal";
import { aboutMe, profile, skypeChatUrl } from "../content/profile";

import type { ReactNode } from "react";

// The photo sits on a tinted card with an offset outline behind it.
const Picture = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.primary.main, 0.5),

  img: {
    display: "block",
    position: "relative",
    borderRadius: "10px",
    maxWidth: "100%",
    height: "auto",
    zIndex: 2,
  },

  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    border: "3px solid",
    borderColor: theme.palette.primary.main,
    top: "20px",
    left: "20px",
  },
}));

const socialButton = {
  color: "common.white",
  bgcolor: "primary.main",
  "&:hover": { color: "primary.main" },
} as const;

function ContactItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Grid size={{ xs: 12, sm: 6, lg: 12 }}>
      <Typography variant="h5" component="h3">
        {label}
      </Typography>
      <Typography sx={{ color: "text.secondary" }}>{children}</Typography>
    </Grid>
  );
}

export function AboutMe() {
  const revealRef = useReveal<HTMLElement>();

  return (
    <Box
      ref={revealRef}
      component="section"
      id="about-me"
      sx={{ py: 8, bgcolor: "background.paper" }}
    >
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  mb: { xs: 4, lg: 0 },
                }}
              >
                {/* The outline sits 20px right of the photo; leave room for it on narrow screens. */}
                <Box
                  sx={{
                    position: "relative",
                    maxWidth: { xs: 400, lg: 320 },
                    mr: { xs: "20px", lg: 0 },
                  }}
                >
                  <Picture>
                    <img
                      src={avatar}
                      alt={`${profile.firstName} ${profile.lastName}`}
                      width={800}
                      height={800}
                    />
                  </Picture>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Box sx={{ textAlign: { lg: "right" } }}>
                <Typography variant="numberedHeading" component="h2" gutterBottom>
                  About me
                </Typography>
                {aboutMe.paragraphs.map((paragraph) => (
                  <Typography key={paragraph} gutterBottom>
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Typography
                variant="numberedHeading"
                component="div"
                aria-hidden
                gutterBottom
                sx={{ visibility: "hidden", display: { xs: "none", lg: "block" } }}
              >
                About me
              </Typography>
              <Grid container spacing={2}>
                <ContactItem label="Phone">{profile.phoneNumber}</ContactItem>
                <ContactItem label="Email">{profile.email}</ContactItem>
                <ContactItem label="Location">{profile.location}</ContactItem>
                <ContactItem label="Skype">{profile.social.skype}</ContactItem>
                <Grid size={{ xs: 12, sm: 6, lg: 12 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    You can follow me also here:
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      href={profile.social.facebook}
                      target="_blank"
                      aria-label="Facebook"
                      sx={socialButton}
                    >
                      <IconBrandFacebook stroke={1.5} size="1.3rem" />
                    </IconButton>
                    <IconButton
                      href={profile.social.linkedin}
                      target="_blank"
                      aria-label="LinkedIn"
                      sx={socialButton}
                    >
                      <IconBrandLinkedin stroke={1.5} size="1.3rem" />
                    </IconButton>
                    <IconButton href={skypeChatUrl} aria-label="Skype" sx={socialButton}>
                      <IconBrandSkype stroke={1.5} size="1.3rem" />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
