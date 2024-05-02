import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import { Text, View, Image, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://github.com/robbliebob/amplofi/blob/main/logo.png?raw=true"
        />
      </View>
    );
  },
};

export default function App() {
  return (
    <div>
      <components.Header />
      <Authenticator socialProviders={['google', 'amazon']}>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}