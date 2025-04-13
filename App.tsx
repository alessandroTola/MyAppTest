/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// Schermata Calcolatore di Proporzioni
function ProportionCalculator({ onBack }: { onBack: () => void }) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const calculateProportion = () => {
    if (a && b && c) {
      const x = (Number(b) * Number(c)) / Number(a);
      setResult(x.toFixed(2));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Indietro</Text>
        </TouchableOpacity>
        <Text style={styles.calculatorTitle}>Proporzioni</Text>
      </View>
      <View style={styles.calculatorContainer}>
        <Text style={styles.proportionText}>a : b = c : x</Text>
        
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={a}
            onChangeText={setA}
            placeholder="a"
          />
          <Text style={styles.operator}>:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={b}
            onChangeText={setB}
            placeholder="b"
          />
          <Text style={styles.operator}>=</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={c}
            onChangeText={setC}
            placeholder="c"
          />
          <Text style={styles.operator}>:</Text>
          <Text style={styles.result}>{result || 'x'}</Text>
        </View>

        <TouchableOpacity 
          style={styles.calculateButton}
          onPress={calculateProportion}>
          <Text style={styles.calculateButtonText}>Calcola</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Schermata Home
function HomeScreen({ onNavigate }: { onNavigate: () => void }) {
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
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: '#E6E9FF' }]}
            onPress={onNavigate}>
            <Text style={styles.cardTitle}>Proporzioni</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: '#FFE6A6' }]}>
            <Text style={styles.cardTitle}>App 2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: '#D6F5E0' }]}>
            <Text style={styles.cardTitle}>App 3</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: '#FFE6E6' }]}>
            <Text style={styles.cardTitle}>App 4</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'calculator'>('home');

  return (
    <>
      {currentScreen === 'home' ? (
        <HomeScreen onNavigate={() => setCurrentScreen('calculator')} />
      ) : (
        <ProportionCalculator onBack={() => setCurrentScreen('home')} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  calculatorContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  calculatorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  proportionText: {
    fontSize: 20,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  operator: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  calculateButton: {
    backgroundColor: '#E6E9FF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  calculateButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007AFF',
  },
});

export default App;
