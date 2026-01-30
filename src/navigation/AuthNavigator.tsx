import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AUTH_SCREENS } from './screenNames';
import type { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AUTH_SCREENS.LOGIN} component={''} />
    </Stack.Navigator>
  );
};
