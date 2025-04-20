import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';


export default function Index() {
  const { width, height } = useWindowDimensions(); 


  const responsiveFontSize = width < 400 ? 16 : 20;
  const responsiveGap = width < 400 ? 10 : 20;

  return (
    <View style={[styles.container, { gap: responsiveGap }]}>
      <Text style={[styles.welcome, { fontSize: responsiveFontSize }]}>
        Sobre Nós
      </Text>
      <Text style={[styles.welcome, { fontSize: responsiveFontSize }]}>
        Desenvolvedores: Alisson Willian & Eduardo Dutra
      </Text>
      <Text style={[styles.welcome, { fontSize: responsiveFontSize }]}>
        Curso: Engenharia de Software
      </Text>
      <Text style={[styles.welcome, { fontSize: responsiveFontSize }]}>
        Semestre: 7º Período
      </Text>
      <Text style={[styles.welcome, { fontSize: responsiveFontSize }]}>
        Aspiração: Trabalhar em grandes empresas de tecnologia
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16, 
  },
  welcome: {
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 8, 
  },
});