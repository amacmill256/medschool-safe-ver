import  { React, useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BASE_URL = "https://example.com/api";

const DisplayImage = ({ image }) => {
  const imageUri = BASE_URL + image;

  return (
    <View style={styles.container}>
      <Image source = {{ uri:imageUri}} style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // flex: 1,
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});

export default DisplayImage;

