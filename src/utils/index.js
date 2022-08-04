import {Platform} from 'react-native';

export {endPoints} from './endPoints';

export const shadow = (color = 'black') => {
  return {
    ...Platform.select({
      ios: {
        shadowColor: color,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  };
};
