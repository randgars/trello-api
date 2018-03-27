import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const dw = (value, addPx) => `${(width * Number(value) / 100)}${addPx ? 'px' : ''}`;
const dh = (value, addPx) => `${(height * Number(value) / 100)}${addPx ? 'px' : ''}`;

export default (v, addPx = true) => {
  if (v) {
    v += '';
    const value = v.substr(0, v.length - 2);
    const dw2 = v.search('dw') !== -1 && dw(value, addPx);
    const dh2 = v.search('dh') !== -1 && dh(value, addPx);
    return dh2 || dw2 || v;
  }

  return v;
};
