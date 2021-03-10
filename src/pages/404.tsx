import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Button } from 'gatsby-theme-material-ui';
import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import { LocalHotel as LocalHotelIcon } from '@material-ui/icons';
import { NotFoundPageQuery } from '../types';
import { Layout } from '../components';

const useStyles = makeStyles(theme => ({
  icon: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const NotFound: React.FC<PageProps<NotFoundPageQuery>> = () => {
  const classes = useStyles();
  const { t } = useI18next();
  return (
    <Layout>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box textAlign="center">
          <LocalHotelIcon className={classes.icon} />
          <Typography variant="h4" component="h1" paragraph>
            {t('not-found.title')}
          </Typography>
          <Typography variant="body1">{t('not-found.description')}</Typography>
        </Box>
        <Box marginTop={4} textAlign="center">
          <Button variant="contained" to="/">
            {t('not-found.back-to-home')}
          </Button>
        </Box>
      </Grid>
    </Layout>
  );
};

export default NotFound;

export const query = graphql`
  query NotFoundPage($language: String!) {
    # 原稿を取得する
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
