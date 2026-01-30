import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './AuthNavigator';
import { AppNavigator } from './AppNavigator';
import { useState } from 'react';

export const RootNavigator = () => {
  //TODO: later this will come from auth state
  const [isLoggedIn] = useState(false);

  return (
    <NavigationContainer>{isLoggedIn ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};
