import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';

const Header = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={undefined} />
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" onPress={undefined} />
        <Appbar.Action icon="dots-vertical" onPress={undefined} />
      </Appbar.Header>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
