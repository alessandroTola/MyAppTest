/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

function AppCard({ title, backgroundColor }: { title: string; backgroundColor: string }) {
  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor }]}
      onPress={() => console.log(`${title} pressed`)}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>↗</Text>
      </View>
    </TouchableOpacity>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={[
      styles.container,
      {backgroundColor: isDarkMode ? '#000' : '#fff'}
    ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#fff'}
      />
      
      <View style={styles.header}>
        <Text style={[
          styles.headerTitle,
          {color: isDarkMode ? '#fff' : '#000'}
        ]}>
          Le mie App
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <AppCard title="App 1" backgroundColor="#E6E9FF" />
          <AppCard title="App 2" backgroundColor="#FFE6A6" />
        </View>
        <View style={styles.row}>
          <AppCard title="App 3" backgroundColor="#D6F5E0" />
          <AppCard title="App 4" backgroundColor="#FFE6E6" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  arrowContainer: {
    alignSelf: 'flex-end',
  },
  arrow: {
    fontSize: 24,
    color: '#000',
  },
});

export default App;
