import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../..//assets/Logo.png';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 100,
      height: 100,
    },
    preloader: {
      flexDirection: 'row',
      width: 100,
      justifyContent: 'space-between',
      marginTop: 15,
    },
    circulos:{
      width: 15,
      height: 15,
      borderRadius: 100,
      backgroundColor: '#fff',
    },
    piel: {backgroundColor: '#F3AFAF'}
  });

const Preloader =() =>{
    return(
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.preloader}>
        <View style={styles.circulos}></View>
        <View style={styles.circulos}></View>
        <View style={styles.circulos}></View>
        <View style={styles.circulos}></View>
        <View style={styles.circulos}></View>
      </View>
    </View>
    );
  }

  export {Preloader};