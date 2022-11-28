import '../styles/globals.css'

import { ApolloClient } from "@apollo/client";
import client from '../apollo-client';
import { ApolloProvider } from './../../node_modules/@apollo/client/react/context/ApolloProvider';
import React  from 'react';
function MyApp({ Component, pageProps }) {
  return( 
  <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
  )
}

export default MyApp
