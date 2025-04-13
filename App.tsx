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

  // Funzione per calcolare quando cambiano i valori
  React.useEffect(() => {
    if (a && b && c) {
      const x = (Number(b) * Number(c)) / Number(a);
      setResult(x.toFixed(2));
    } else {
      setResult('');
    }
  }, [a, b, c]); // Si attiva quando uno qualsiasi dei valori cambia

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#E6E9FF' }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Indietro</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.calculatorContainer}>
        <Text style={styles.calculatorTitle}>CALCOLA PROPORZIONE</Text>
        <Text style={styles.subtitle}>INSERISCI I VALORI</Text>
        
        <View style={styles.inputContainer}>
          <View style={styles.inputGroup}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>A</Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                value={a}
                onChangeText={setA}
              />
            </View>
          </View>
          
          <Text style={styles.operator}>:</Text>
          
          <View style={styles.inputGroup}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>B</Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                value={b}
                onChangeText={setB}
              />
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputGroup}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>C</Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                value={c}
                onChangeText={setC}
              />
            </View>
          </View>
          
          <Text style={styles.operator}>:</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        </View>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    width: '100%',
  },
  inputGroup: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    padding: 0,
  },
  operator: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
    height: 50,
    lineHeight: 50,
  },
  calculateButton: {
    backgroundColor: '#E6E9FF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
