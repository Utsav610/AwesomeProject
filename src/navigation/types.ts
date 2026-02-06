import { APP_SCREENS, AUTH_SCREENS } from './ScreenNames';

export type AuthStackParamList = {
  [AUTH_SCREENS.SPLASH]: undefined;
  [AUTH_SCREENS.LOGIN]: undefined;
};

export type AppStackParamList = {
  [APP_SCREENS.HOME]: undefined;
};
