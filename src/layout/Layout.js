import {View} from 'react-native';
import React from 'react';
import {styles} from './style';

const Layout = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
export default Layout;
