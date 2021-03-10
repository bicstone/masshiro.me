import React from 'react';
import parse from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  makeStyles,
  Typography,
  Grid,
  CardHeader,
  CardContent,
  CardActionArea,
  Card,
  Avatar,
  CardMedia,
  SvgIcon,
  Chip,
} from '@material-ui/core';
import { OssDataQuery } from '../../types';
import { ExpandCardContent } from '../../components';

const useStyles = makeStyles(() => ({
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardHeader: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export const OSSes: React.FC = () => {
  const classes = useStyles();
  const { language } = useI18next();

  const { allContentfulOss }: OssDataQuery = useStaticQuery(
    graphql`
      query OssData {
        allContentfulOss(sort: { fields: startDate, order: DESC }) {
          edges {
            node {
              id
              node_locale
              name
              tags {
                name
              }
              icon {
                name
                svg {
                  svg
                }
              }
              image {
                title
                file {
                  url
                }
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              subName
              detail {
                childMarkdownRemark {
                  html
                }
              }
              startDate(formatString: "yyyy/MM")
              href
            }
          }
        }
      }
    `,
  );

  return (
    <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
      {allContentfulOss.edges.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id} component="section">
              <Card>
                <CardActionArea
                  title={node.name || ''}
                  href={node.href || ''}
                  rel="external noreferrer noopener nofollow"
                  target="_blank"
                >
                  <CardMedia>
                    {node?.image?.localFile?.childImageSharp?.gatsbyImageData && (
                      <GatsbyImage
                        image={node.image.localFile.childImageSharp.gatsbyImageData}
                        alt={node.name ?? ''}
                        className={classes.cardMedia}
                      />
                    )}
                  </CardMedia>
                </CardActionArea>
                <ExpandCardContent
                  id={node.id}
                  defaultExpanded={false}
                  title={
                    <CardHeader
                      className={classes.cardHeader}
                      avatar={
                        node?.icon?.svg?.svg && (
                          <Avatar
                            role="img"
                            aria-label={node.icon.name || ''}
                            title={node.icon.name || ''}
                          >
                            <SvgIcon>{parse(node.icon.svg.svg)}</SvgIcon>
                          </Avatar>
                        )
                      }
                      title={
                        <>
                          <Typography variant="body2" component="div" color="textSecondary">
                            {node?.startDate}～
                          </Typography>
                          <Typography component="h2" variant="h6">
                            {node.name}
                          </Typography>
                          <Typography variant="body2" component="div" color="textSecondary">
                            {node.tags &&
                              node.tags.map(
                                tag =>
                                  tag?.name && (
                                    <Chip
                                      variant="outlined"
                                      size="small"
                                      key={tag.name}
                                      label={tag.name}
                                    />
                                  ),
                              )}
                          </Typography>
                        </>
                      }
                    />
                  }
                  detail={
                    <CardContent>
                      <Typography variant="body2" component="div">
                        {node?.detail?.childMarkdownRemark?.html &&
                          parse(node.detail.childMarkdownRemark.html)}
                      </Typography>
                    </CardContent>
                  }
                />
              </Card>
            </Grid>
          ),
      )}
    </Grid>
  );
};
