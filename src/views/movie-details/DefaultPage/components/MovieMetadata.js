// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

// third-party
import { IconFlame, IconHistory, IconStar, IconTrendingUp } from '@tabler/icons';

// project imports
import { Statistic } from 'components/shared';
import { TMovieDetails } from 'types';
import { formatNumber } from 'utils/number';

const MovieMetadata = ({ ...props }) => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={6} lg={3}>
          <Statistic
            variant="iv2"
            primary="Rated"
            secondary={formatNumber(props.vote_count)}
            icon={<IconStar size="3rem" stroke={2} color={theme.palette.warning.main} />}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <Statistic
            variant="iv2"
            primary="Popularity"
            secondary={formatNumber(props.popularity)}
            icon={<IconFlame size="3rem" stroke={2} color={theme.palette.error.main} />}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <Statistic
            variant="iv2"
            primary="Runtime"
            secondary={`${props.runtime}m`}
            icon={<IconHistory size="3rem" stroke={2} color={theme.palette.info.main} />}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <Statistic
            variant="iv2"
            primary="Profit"
            secondary={`${formatNumber(props.popularity)}`}
            icon={<IconTrendingUp size="3rem" stroke={2} color={theme.palette.success.main} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieMetadata;

MovieMetadata.propTypes = TMovieDetails;
