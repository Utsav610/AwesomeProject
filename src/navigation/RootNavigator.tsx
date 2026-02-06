import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { AuthNavigator } from './AuthNavigator';
import { AppNavigator } from './AppNavigator';

export const RootNavigator = () => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // TODO: replace with real token check
    const timer = setTimeout(() => {
      setCheckingAuth(false);
      setLoggedIn(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {checkingAuth ? <AuthNavigator /> : loggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
