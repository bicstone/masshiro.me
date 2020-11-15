import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useI18next } from 'gatsby-plugin-react-i18next';

import {
  Typography,
  Grid,
  Container,
  CardHeader,
  CardContent,
  Card,
  Avatar,
  CardMedia,
  Chip,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import DevicesIcon from '@material-ui/icons/Devices';
import { OsSesDataQuery } from '../types/graphqlTypes';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    paddingTop: 0,
  },
  cardMedia: {
    height: theme.spacing(20),
  },
}));

const OSSes: React.FC = () => {
  const classes = useStyles();
  const { t, language } = useI18next();
  const { allContentfulOsSes }: OsSesDataQuery = useStaticQuery(
    graphql`
      query OSSesData {
        allContentfulOsSes {
          edges {
            node {
              id
              node_locale
              name
              slug
              startDate
              during
              comment
              mainImage {
                title
                file {
                  url
                }
                localFile {
                  childImageSharp {
                    fluid {
                      sizes
                      src
                      srcSet
                      aspectRatio
                    }
                  }
                }
              }
              siteUrl
              sourceUrl
              roles {
                name
              }
              assigns {
                name
              }
              systems {
                name
              }
              languages {
                name
              }
              tools {
                name
              }
            }
          }
        }
      }
    `,
  );

  return (
    <Container maxWidth="lg">
      <Typography component="h2" variant="h4" align="center">
        {t('OSSes.title')}
      </Typography>
      <Grid container spacing={2} className={classes.mainGrid} justify="center" alignItems="center">
        {allContentfulOsSes.edges.map(
          ({ node }) =>
            node.node_locale === language && (
              <Grid item xs={12} sm={6} md={4} key={node.id}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar>
                        <DevicesIcon />
                      </Avatar>
                    }
                    title={
                      <Typography component="h3" variant="h6">
                        {node.name}
                      </Typography>
                    }
                    subheader={node.roles ? node.roles.map(role => role?.name).join(' / ') : ''}
                  />
                  <CardMedia>
                    {node?.mainImage?.localFile?.childImageSharp?.fluid && (
                      <Img
                        fluid={node.mainImage.localFile.childImageSharp.fluid}
                        alt={node.mainImage.title ?? ''}
                        className={classes.cardMedia}
                      />
                    )}
                  </CardMedia>
                  <CardContent>
                    {node?.languages?.map(language => (
                      <Chip label={language?.name} size="small" key={language?.name} />
                    ))}
                    {node?.systems?.map(system => (
                      <Chip label={system?.name} size="small" key={system?.name} />
                    ))}
                  </CardContent>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">{node.comment}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ),
        )}
      </Grid>
    </Container>
  );
};

export default OSSes;