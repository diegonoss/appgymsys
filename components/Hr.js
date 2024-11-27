import React from 'react';
import { View, StyleSheet } from 'react-native';

const Hr = ({ borderBottomColor = '#868e96' }) => <View style={[styles.hr, { borderBottomColor }]} />;

const styles = StyleSheet.create({
  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    marginVertical: 15,
    width: '80%',
    marginHorizontal: 'auto'
  },
});

export default Hr;
