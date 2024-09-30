import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (peso && altura) {
      const pesoNum = parseFloat(peso);
      const alturaNum = parseFloat(altura);
      const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(imc.toFixed(2));
    } else {
      Alert.alert("Preencha todos os campos");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC!</Text>
      <StatusBar style="auto" />
         
      <View style={styles.inpg}>      
        <FontAwesome5 name="weight" size={32} color="black" />
        <Text>Peso (kg)</Text>
        <View style={styles.inp1}>
          <TextInput
            style={styles.caixa1}
            placeholder='KG'
            keyboardType='numeric'
            value={peso}
            onChangeText={setPeso}
          />
        </View>

        <MaterialCommunityIcons name='human-male-height' size={32} color="black" />
        <Text>Altura (m)</Text>
        <View style={styles.inp2}>
          <TextInput
            style={styles.caixa2}
            placeholder='m'
            keyboardType='numeric'
            value={altura}
            onChangeText={setAltura}
          />
        </View>
      </View>

      <TouchableOpacity onPress={calcularIMC} style={styles.button}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      
      {resultado && (
        <Text style={styles.resultado}>Seu IMC é: {resultado}</Text>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  titulo: {
    width: 356,
    height: 47,
    paddingTop: 12,
    paddingLeft: 100,
    backgroundColor: '#4A4FAA',
    bottom: 0,
    color: '#ffff',
  },
      
  inpg: {
    backgroundColor: "#fff",
    width: 400,
    height: 300,
    alignItems: 'center',
    paddingTop: 25,
    margin: 30,
    bottom: 30,
  },

  inp1: {
    marginBottom: 20,
  },
  
  caixa1: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: 100,
    textAlign: 'center',
  },

  inp2: {
    marginBottom: 20,
  },

  caixa2: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: 100,
    textAlign: 'center',
  },

  button: {
    bottom:130,
    backgroundColor: '#B10242', // Cor de fundo do botão
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10, // Bordas arredondadas
    marginTop: 20,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff', 
    
    fontSize: 18,
    fontWeight: 'bold',
  },

  resultado: {
     bottom:100,
    fontSize: 24,
    color: '#4A4FAA',
    marginTop: 20,
  }
});