import { StyleSheet } from 'react-native';
import { ColorKey, theme } from './theme';
import { fontSizes, fontWeights } from './typography';
import { wp, hp } from './scale';

const styles = StyleSheet.create({
  /* ---- margin (vertical = hp, horizontal = wp) ---- */
  'm-0': { margin: hp(0) },
  'm-2': { margin: hp(2) },
  'm-4': { margin: hp(4) },
  'm-8': { margin: hp(8) },
  'm-12': { margin: hp(12) },
  'm-16': { margin: hp(16) },
  'm-20': { margin: hp(20) },

  'mt-0': { marginTop: hp(0) },
  'mt-2': { marginTop: hp(2) },
  'mt-4': { marginTop: hp(4) },
  'mt-8': { marginTop: hp(8) },
  'mt-12': { marginTop: hp(12) },
  'mt-16': { marginTop: hp(16) },
  'mt-20': { marginTop: hp(20) },

  'mb-0': { marginBottom: hp(0) },
  'mb-2': { marginBottom: hp(2) },
  'mb-4': { marginBottom: hp(4) },
  'mb-8': { marginBottom: hp(8) },
  'mb-12': { marginBottom: hp(12) },
  'mb-16': { marginBottom: hp(16) },
  'mb-20': { marginBottom: hp(20) },

  'ml-0': { marginLeft: wp(0) },
  'ml-2': { marginLeft: wp(2) },
  'ml-4': { marginLeft: wp(4) },
  'ml-8': { marginLeft: wp(8) },
  'ml-12': { marginLeft: wp(12) },
  'ml-16': { marginLeft: wp(16) },
  'ml-20': { marginLeft: wp(20) },

  'mr-0': { marginRight: wp(0) },
  'mr-2': { marginRight: wp(2) },
  'mr-4': { marginRight: wp(4) },
  'mr-8': { marginRight: wp(8) },
  'mr-12': { marginRight: wp(12) },
  'mr-16': { marginRight: wp(16) },
  'mr-20': { marginRight: wp(20) },

  'mx-0': { marginHorizontal: wp(0) },
  'mx-2': { marginHorizontal: wp(2) },
  'mx-4': { marginHorizontal: wp(4) },
  'mx-8': { marginHorizontal: wp(8) },
  'mx-12': { marginHorizontal: wp(12) },
  'mx-16': { marginHorizontal: wp(16) },
  'mx-20': { marginHorizontal: wp(20) },

  'my-0': { marginVertical: hp(0) },
  'my-2': { marginVertical: hp(2) },
  'my-4': { marginVertical: hp(4) },
  'my-8': { marginVertical: hp(8) },
  'my-12': { marginVertical: hp(12) },
  'my-16': { marginVertical: hp(16) },
  'my-20': { marginVertical: hp(20) },

  /* ---- padding ---- */
  'p-0': { padding: hp(0) },
  'p-2': { padding: hp(2) },
  'p-4': { padding: hp(4) },
  'p-8': { padding: hp(8) },
  'p-12': { padding: hp(12) },
  'p-16': { padding: hp(16) },
  'p-20': { padding: hp(20) },

  'pl-0': { paddingLeft: wp(0) },
  'pl-2': { paddingLeft: wp(2) },
  'pl-4': { paddingLeft: wp(4) },
  'pl-8': { paddingLeft: wp(8) },
  'pl-12': { paddingLeft: wp(12) },
  'pl-16': { paddingLeft: wp(16) },
  'pl-20': { paddingLeft: wp(20) },

  'pr-0': { paddingRight: wp(0) },
  'pr-2': { paddingRight: wp(2) },
  'pr-4': { paddingRight: wp(4) },
  'pr-8': { paddingRight: wp(8) },
  'pr-12': { paddingRight: wp(12) },
  'pr-16': { paddingRight: wp(16) },
  'pr-20': { paddingRight: wp(20) },

  'px-0': { paddingHorizontal: wp(0) },
  'px-2': { paddingHorizontal: wp(2) },
  'px-4': { paddingHorizontal: wp(4) },
  'px-8': { paddingHorizontal: wp(8) },
  'px-12': { paddingHorizontal: wp(12) },
  'px-16': { paddingHorizontal: wp(16) },
  'px-20': { paddingHorizontal: wp(20) },

  'py-0': { paddingVertical: hp(0) },
  'py-2': { paddingVertical: hp(2) },
  'py-4': { paddingVertical: hp(4) },
  'py-8': { paddingVertical: hp(8) },
  'py-12': { paddingVertical: hp(12) },
  'py-16': { paddingVertical: hp(16) },
  'py-20': { paddingVertical: hp(20) },

  'pt-0': { paddingTop: hp(0) },
  'pt-2': { paddingTop: hp(2) },
  'pt-4': { paddingTop: hp(4) },
  'pt-8': { paddingTop: hp(8) },
  'pt-12': { paddingTop: hp(12) },
  'pt-16': { paddingTop: hp(16) },
  'pt-20': { paddingTop: hp(20) },

  'pb-0': { paddingBottom: hp(0) },
  'pb-2': { paddingBottom: hp(2) },
  'pb-4': { paddingBottom: hp(4) },
  'pb-8': { paddingBottom: hp(8) },
  'pb-12': { paddingBottom: hp(12) },
  'pb-16': { paddingBottom: hp(16) },
  'pb-20': { paddingBottom: hp(20) },

  /* ---- radius ---- */
  'rounded-0': { borderRadius: wp(0) },
  'rounded-4': { borderRadius: wp(4) },
  'rounded-8': { borderRadius: wp(8) },
  'rounded-12': { borderRadius: wp(12) },
  'rounded-16': { borderRadius: wp(16) },
  'rounded-20': { borderRadius: wp(20) },
  'rounded-full': { borderRadius: 9999 },

  /* ---- layout ---- */
  'flex-1': { flex: 1 },
  'flex-row': { flexDirection: 'row' },
  'flex-col': { flexDirection: 'column' },
  'items-center': { alignItems: 'center' },
  'justify-center': { justifyContent: 'center' },
  'self-center': { alignSelf: 'center' },
  'self-start': { alignSelf: 'flex-start' },
  'self-end': { alignSelf: 'flex-end' },

  /* ---- width ---- */
  'w-0': { width: wp(0) },
  'w-10': { width: wp(10) },
  'w-20': { width: wp(20) },
  'w-40': { width: wp(40) },
  'w-60': { width: wp(60) },
  'w-80': { width: wp(80) },
  'w-100': { width: wp(100) },
  'w-160': { width: wp(160) },

  'min-w-0': { minWidth: wp(0) },
  'min-w-10': { minWidth: wp(10) },
  'min-w-20': { minWidth: wp(20) },
  'min-w-40': { minWidth: wp(40) },
  'min-w-60': { minWidth: wp(60) },
  'min-w-80': { minWidth: wp(80) },
  'min-w-100': { minWidth: wp(100) },
  'min-w-160': { minWidth: wp(160) },

  'max-w-0': { maxWidth: wp(0) },
  'max-w-10': { maxWidth: wp(10) },
  'max-w-20': { maxWidth: wp(20) },
  'max-w-40': { maxWidth: wp(40) },
  'max-w-60': { maxWidth: wp(60) },
  'max-w-80': { maxWidth: wp(80) },
  'max-w-100': { maxWidth: wp(100) },
  'max-w-160': { maxWidth: wp(160) },

  /* ---- height ---- */
  'h-0': { height: hp(0) },
  'h-10': { height: hp(10) },
  'h-20': { height: hp(20) },
  'h-40': { height: hp(40) },
  'h-60': { height: hp(60) },
  'h-80': { height: hp(80) },
  'h-100': { height: hp(100) },
  'h-160': { height: hp(160) },

  'min-h-0': { minHeight: hp(0) },
  'min-h-10': { minHeight: hp(10) },
  'min-h-20': { minHeight: hp(20) },
  'min-h-40': { minHeight: hp(40) },
  'min-h-60': { minHeight: hp(60) },
  'min-h-80': { minHeight: hp(80) },
  'min-h-100': { minHeight: hp(100) },
  'min-h-160': { minHeight: hp(160) },

  'max-h-0': { maxHeight: hp(0) },
  'max-h-10': { maxHeight: hp(10) },
  'max-h-20': { maxHeight: hp(20) },
  'max-h-40': { maxHeight: hp(40) },
  'max-h-60': { maxHeight: hp(60) },
  'max-h-80': { maxHeight: hp(80) },
  'max-h-100': { maxHeight: hp(100) },
  'max-h-160': { maxHeight: hp(160) },

  /* ---- border width ---- */
  'border-0': { borderWidth: wp(0) },
  'border-1': { borderWidth: wp(1) },
  'border-2': { borderWidth: wp(2) },
  'border-4': { borderWidth: wp(4) },

  /* ---- gap ---- */
  'gap-0': { gap: wp(0) },
  'gap-2': { gap: wp(2) },
  'gap-4': { gap: wp(4) },
  'gap-8': { gap: wp(8) },
  'gap-12': { gap: wp(12) },
  'gap-16': { gap: wp(16) },
  'gap-20': { gap: wp(20) },

  /* ---- position offsets ---- */
  'top-0': { top: hp(0) },
  'top-2': { top: hp(2) },
  'top-4': { top: hp(4) },
  'top-8': { top: hp(8) },
  'top-12': { top: hp(12) },
  'top-16': { top: hp(16) },
  'top-20': { top: hp(20) },
  'top-40': { top: hp(40) },
  'top-60': { top: hp(60) },
  'top-80': { top: hp(80) },
  'top-100': { top: hp(100) },
  'top-160': { top: hp(160) },

  'bottom-0': { bottom: hp(0) },
  'bottom-2': { bottom: hp(2) },
  'bottom-4': { bottom: hp(4) },
  'bottom-8': { bottom: hp(8) },
  'bottom-12': { bottom: hp(12) },
  'bottom-16': { bottom: hp(16) },
  'bottom-20': { bottom: hp(20) },
  'bottom-40': { bottom: hp(40) },
  'bottom-60': { bottom: hp(60) },
  'bottom-80': { bottom: hp(80) },
  'bottom-100': { bottom: hp(100) },
  'bottom-160': { bottom: hp(160) },

  'left-0': { left: wp(0) },
  'left-2': { left: wp(2) },
  'left-4': { left: wp(4) },
  'left-8': { left: wp(8) },
  'left-12': { left: wp(12) },
  'left-16': { left: wp(16) },
  'left-20': { left: wp(20) },
  'left-40': { left: wp(40) },
  'left-60': { left: wp(60) },
  'left-80': { left: wp(80) },
  'left-100': { left: wp(100) },
  'left-160': { left: wp(160) },

  'right-0': { right: wp(0) },
  'right-2': { right: wp(2) },
  'right-4': { right: wp(4) },
  'right-8': { right: wp(8) },
  'right-12': { right: wp(12) },
  'right-16': { right: wp(16) },
  'right-20': { right: wp(20) },
  'right-40': { right: wp(40) },
  'right-60': { right: wp(60) },
  'right-80': { right: wp(80) },
  'right-100': { right: wp(100) },
  'right-160': { right: wp(160) },

  /* ---- z-index ---- */
  'z-0': { zIndex: 0 },
  'z-10': { zIndex: 10 },
  'z-20': { zIndex: 20 },
  'z-30': { zIndex: 30 },
  'z-40': { zIndex: 40 },
  'z-50': { zIndex: 50 },

  /* ---- text alignment ---- */
  'text-left': { textAlign: 'left' },
  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },

  /* ---- overflow ---- */
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-visible': { overflow: 'visible' },

  /* ---- position ---- */
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },

  /* ---- display ---- */
  hidden: { display: 'none' },
});

/* ================= CACHE ================= */

const cache = new Map<string, any>();

export const getStyles = (className: string) => {
  if (cache.has(className)) {
    return cache.get(className);
  }

  const tokens = className.trim().split(/\s+/);
  const result: any[] = [];

  for (const token of tokens) {
    let style;

    /* ---- FONT SIZE ---- */
    if (fontSizes[token]) {
      style = fontSizes[token];
    } else if (token.startsWith('bg-')) {
      /* ---- BACKGROUND COLOR ---- */
      const key = token.replace('bg-', '') as ColorKey;
      const color = theme.colors[key];
      if (color) style = { backgroundColor: color };
    } else if (token.startsWith('text-') && theme.colors[token.replace('text-', '') as ColorKey]) {
      /* ---- TEXT COLOR ---- */
      const key = token.replace('text-', '') as ColorKey;
      style = { color: theme.colors[key] };
    } else if (
      token.startsWith('border-') &&
      theme.colors[token.replace('border-', '') as ColorKey]
    ) {
      /* ---- BORDER COLOR ---- */
      const key = token.replace('border-', '') as ColorKey;
      const color = theme.colors[key];
      if (color) style = { borderColor: color };
    } else if ((styles as any)[token]) {
      /* ---- STATIC MAP ---- */
      style = (styles as any)[token];
    }

    /* ---- WARNING ---- */
    if (!style) {
      if (__DEV__) console.warn(`Unknown class: "${token}"`);
    } else {
      result.push(style);
    }
  }

  cache.set(className, result);
  return result;
};
