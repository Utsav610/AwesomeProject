import { APP_SCREENS, AUTH_SCREENS } from './screenNames';

export type AuthStackParamList = {
  [AUTH_SCREENS.LOGIN]: undefined;
};

export type AppStackParamList = {
  [APP_SCREENS.HOME]: undefined;
};
