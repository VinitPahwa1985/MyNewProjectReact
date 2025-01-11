import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  useColorScheme
} from 'react-native';

function AppPro(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello World!!!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;