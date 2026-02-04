import { CommonSafeAreaView, Text } from '@components/base';

import { getStyles } from '@styles/getStyles';
import { Loader } from '@components/feedback';
import { locale } from '@locales/index';

export const SplashScreen = () => {
  return (
    <CommonSafeAreaView style={getStyles('flex-1 justify-center items-center')}>
      <Text style={getStyles('text-lg font-semibold mb-16')}>{locale?.common?.loading}</Text>
      <Loader visible={true} />
    </CommonSafeAreaView>
  );
};
