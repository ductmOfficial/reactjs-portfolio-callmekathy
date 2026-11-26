import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import { useContent } from "../content";
import { HideOnScroll } from "./HideOnScroll";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";

export function Header() {
  const { nav, labels, resumeUrl } = useContent();

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
              {nav.map(({ id, title }) => (
                <Button key={id} href={`#${id}`} sx={{ color: "inherit", whiteSpace: "nowrap" }}>
                  {title}
                </Button>
              ))}
            </Stack>

            <LanguageSwitch />
            <Button variant="contained" color="primary" target="_blank" href={resumeUrl}>
              {labels.downloadCv}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
