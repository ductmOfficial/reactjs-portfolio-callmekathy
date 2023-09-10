import React from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

// project imports
import { Link, Typography } from '@mui/material';
import Head from './Head';
import Header from './Header';
import MainContent from './MainContent';

const MainLayout = () => (
  <React.Fragment>
    <Head />
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* header */}
      <Header />

      {/* main content */}
      <MainContent>
        <Outlet />

        <Box sx={{ py: 2, textAlign: 'center' }}>
          <Typography color="text.secondary" variant="body2">
            Designed & Built by{' '}
            <Link href="https://ductran.vercel.app/" target="_blank" underline="none">
              Duc Tran
            </Link>
          </Typography>
        </Box>
      </MainContent>
    </Box>
  </React.Fragment>
);

export default MainLayout;
