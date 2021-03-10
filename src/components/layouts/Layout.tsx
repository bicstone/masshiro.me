import React from 'react';
import { makeStyles } from '@material-ui/core';
import { CookieAlert, Head, Header, Footer } from '../';

type Props = {
  title?: string;
  description?: string;
  image?: string;
  cookieAlertShow?: boolean;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    cursor: 'default',
    backgroundImage: `url(${require('./background.svg')})`,
    backgroundSize: '400px 400px',
    backgroundRepeat: 'repeat',
  },
  main: {
    marginTop: theme.spacing(8),
  },
}));

export const Layout: React.FC<Props> = ({ children, cookieAlertShow, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <Head {...props} />
      <div className={classes.root}>
        <CookieAlert show={cookieAlertShow} />
        <Header />
        <main className={classes.main} role="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
