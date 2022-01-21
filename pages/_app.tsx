import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {logEvent} from 'firebase/analytics';
import {analytics} from 'configs/firebase';
import Router from 'next/router';

Router.events.on('routeChangeComplete', (pathname) =>{
  logEvent(analytics, 'page-view', {
    firebase_screen: pathname,
    firebase_screen_class: pathname,
  });
});

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} ></Component>;
}

export default MyApp;
