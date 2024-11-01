import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/apolloClient';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <Toaster />
  </ApolloProvider>,
  document.getElementById('root')
);