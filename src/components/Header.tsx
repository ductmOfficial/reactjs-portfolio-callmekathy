import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import { profile, sections } from "../content/profile";
import { HideOnScroll } from "./HideOnScroll";
import { Logo } from "./Logo";

export function Header() {
  return (
    <HideOnScroll>
      <AppBar
        elevation={0}
        position="fixed"
        color="default"
        sx={{ bgcolor: "background.paper", color: "text.primary" }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <ButtonBase disableRipple href="/">
              <Logo />
            </ButtonBase>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", gap: 1.5 }}>
            <Stack
              component="nav"
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", ml: 3, display: { xs: "none", lg: "flex" } }}
            >
              {sections.map(({ id, title }) => (
                <Button key={id} href={`#${id}`} sx={{ color: "inherit", whiteSpace: "nowrap" }}>
                  {title}
                </Button>
              ))}
            </Stack>

            <Button variant="contained" color="primary" target="_blank" href={profile.resumeUrl}>
              Download CV
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
