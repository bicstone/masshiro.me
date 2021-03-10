import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { makeStyles, Container, Typography } from '@material-ui/core';
import { IndexPageQuery } from '../types';
import {
  Layout,
  Hello,
  Projects,
  WhatICanDos,
  Skills,
  Contacts,
  Histories,
  OSSes,
  Qualifications,
} from '../components';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

const home: React.FC<PageProps<IndexPageQuery>> = () => {
  const { t } = useI18next();
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container} component="section">
        <Hello />
      </Container>
      <Container maxWidth="lg" className={classes.container} component="section">
        <WhatICanDos />
      </Container>
      <Container maxWidth="lg" className={classes.container} component="section">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.projects-title')}
        </Typography>
        <Projects />
      </Container>
      <Container maxWidth="lg" className={classes.container} component="section">
        <Typography component="h2" variant="h4" align="center">
          {t('home.histories-title')}
        </Typography>
        <Histories />
      </Container>
      <Container maxWidth="lg" className={classes.container} component="section">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.osses-title')}
        </Typography>
        <OSSes />
      </Container>
      <Container maxWidth="lg" className={classes.container} component="section">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.skills-title')}
        </Typography>
        <Skills />
      </Container>
      <Container maxWidth="lg" className={classes.container} component="section">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.qualifications-title')}
        </Typography>
        <Qualifications />
      </Container>
      {/* 問い合わせへのアンカーリンク設置するためのID指定、仮対応 */}
      <Container maxWidth="lg" className={classes.container} component="section" id="contact">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.contacts-title')}
        </Typography>
        <Contacts />
      </Container>
    </Layout>
  );
};

export default home;

export const query = graphql`
  query IndexPage($language: String!) {
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
