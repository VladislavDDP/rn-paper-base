import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
