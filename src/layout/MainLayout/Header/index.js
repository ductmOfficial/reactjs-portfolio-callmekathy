// material-ui
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

// third-party
import { IconBrandSkype, IconSunMoon } from '@tabler/icons-react';

// project imports
import HideOnScroll from 'components/HideOnScroll';
import config from 'config';
import { useUI } from 'context/uiContext';
import LogoSection from './LogoSection';
import NavMenu from './NavMenu';

const Header = () => {
  const theme = useTheme();
  const { isDarkMode, onModeToggle } = useUI();
  const { userProfile: profile = {} } = config;

  return (
    <HideOnScroll>
      <AppBar
        elevation={0}
        position="fixed"
        color="default"
        sx={{ bgcolor: 'background.paper', color: 'text.primary' }}
        enableColorOnDark={isDarkMode}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            <LogoSection />
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', gap: 1.5 }}>
            <NavMenu sx={{ ml: 3, display: { xs: 'none', lg: 'flex' } }} />

            <Tooltip title="Skype me" arrow>
              <IconButton
                color="primary"
                aria-label="skype me"
                href={`skype:${profile.social.skype}?chat`}
                sx={{ bgcolor: 'background.default' }}
              >
                <IconBrandSkype stroke={1.5} size="1.3rem" />
              </IconButton>
            </Tooltip>
            <Tooltip title={theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'} arrow>
              <IconButton
                color="primary"
                aria-label="dark mode"
                onClick={onModeToggle}
                sx={{ bgcolor: 'background.default', display: 'none' }}
              >
                <IconSunMoon stroke={1.5} size="1.3rem" />
              </IconButton>
            </Tooltip>
            <Button variant="contained" color="primary" target="_blank" href="/resume.pdf">
              Download CV
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
