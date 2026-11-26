import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { IconBrandSkype } from "@tabler/icons-react";

import { profile, sections, skypeChatUrl } from "../content/profile";
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

            <Tooltip title="Skype me" arrow>
              <IconButton
                color="primary"
                aria-label="skype me"
                href={skypeChatUrl}
                sx={{ bgcolor: "background.default" }}
              >
                <IconBrandSkype stroke={1.5} size="1.3rem" />
              </IconButton>
            </Tooltip>
            <Button variant="contained" color="primary" target="_blank" href={profile.resumeUrl}>
              Download CV
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
