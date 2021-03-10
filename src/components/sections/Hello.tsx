import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Typography, Grid, Button, makeStyles, Paper, CardHeader } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { BicstoneIcon } from '../';
import { useBreakPoint } from '../../hooks';
import { HelloDataQuery } from '../../types';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
  icon: {
    textAlign: 'center',
  },
}));

export const Hello: React.FC = () => {
  const classes = useStyles();
  const { t, language } = useI18next();
  const width = useBreakPoint();
  const BUTTON_SMALL_WIDTH: Breakpoint[] = ['xs'];
  const { allContentfulHello }: HelloDataQuery = useStaticQuery(
    graphql`
      query HelloData {
        allContentfulHello(sort: { fields: sortKey, order: ASC }) {
          edges {
            node {
              id
              node_locale
              name
              href
            }
          }
        }
      }
    `,
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} sm={3} md={2} className={classes.icon}>
        <BicstoneIcon width={100} height={100} />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <Paper>
          <CardHeader
            disableTypography
            title={
              <Typography component="p" variant="h6" gutterBottom>
                {t('hello.title')}
              </Typography>
            }
            subheader={
              <>
                <Typography variant="body1" color="textPrimary" paragraph>
                  {t('hello.description')}
                </Typography>

                {allContentfulHello.edges.map(
                  ({ node }) =>
                    node.node_locale === language && (
                      <Button
                        href={node.href || ''}
                        variant="outlined"
                        color="secondary"
                        size={BUTTON_SMALL_WIDTH.includes(width) ? 'small' : 'medium'}
                        rel="external noreferrer noopener nofollow"
                        className={classes.button}
                        key={node.id}
                      >
                        {node.name}
                      </Button>
                    ),
                )}
              </>
            }
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
