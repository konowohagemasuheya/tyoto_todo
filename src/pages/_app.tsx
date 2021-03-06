import { AppProps } from 'next/app';
import Head from 'next/head';
import firebase from 'firebase';
import 'firebase/analytics';

import CssBaseline from '@material-ui/core/CssBaseline';
import ButtonAppBar from 'src/containers/ButtonAppBar';
import FloatingActionButton from 'src/containers/FloatingActionButton';
import { AuthProvider } from 'src/modules/hooks/useAuth';

import '../styles/globals.css';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <ButtonAppBar />
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <FloatingActionButton />
      </AuthProvider>
    </>
  );
};

export default MyApp;
