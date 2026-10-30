import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Formulario() {
  // Estados para almacenar las selecciones y la respuesta al cotizar
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función al dar clic al botón Cotizar
  const cotizar = () => {
    setMensaje('Formulario creado');
  };

  return (
    <View style={styles.container}>
      {/* Moneda */}
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={moneda}
        onValueChange={(itemValue) => setMoneda(itemValue)}
        style={styles.pickerInput}
      >
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar USD" value="USD" />
        <Picker.Item label="Peso Mexicano MXN" value="MXN" />
        <Picker.Item label="Euro EUR" value="EUR" />
        <Picker.Item label="Libra Esterlina GBP" value="GBP" />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>
      <Picker
        selectedValue={criptomoneda}
        onValueChange={(itemValue) => setCriptomoneda(itemValue)}
        style={styles.pickerInput}
      >
        <Picker.Item label="- Seleccione -" value="" />
      </Picker>

      <TouchableOpacity style={styles.btnCotizar} onPress={cotizar}>
        <Text style={styles.textCotizar}>Cotizar</Text>
      </TouchableOpacity>

      {mensaje !== '' && (
        <Text style={styles.resultadoText}>{mensaje}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  label: {
    textTransform: 'uppercase',
    color: '#5E49E2',
    fontWeight: '700',
    fontSize: 22,
    marginVertical: 20
  },
  pickerInput: {
    height: 50,
    backgroundColor: '#FFF'
  },
  btnCotizar: {
    backgroundColor: '#5E49E2',
    padding: 10,
    marginTop: 20
  },
  textCotizar: {
    color: '#FFF',
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  resultadoText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333'
  }
});