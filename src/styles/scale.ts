import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 390;
const heightBaseScale = SCREEN_HEIGHT / 844;

const normalize = (size: number, based = 'width') => {
  const newSize = based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const wp = (size: number) => normalize(size, 'width');
const hp = (size: number) => normalize(size, 'height');
const fontPixel = (size: number) => wp(size);

export { wp, hp, fontPixel, SCREEN_WIDTH, SCREEN_HEIGHT };
