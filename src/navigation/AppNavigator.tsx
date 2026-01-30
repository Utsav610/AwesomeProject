import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { APP_SCREENS } from './screenNames';
import type { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={APP_SCREENS.HOME} component={} />
    </Stack.Navigator>
  );
};
