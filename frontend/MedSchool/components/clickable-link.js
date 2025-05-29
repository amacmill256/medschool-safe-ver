import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const ClickableLink = ({url, linkText}) => {
  const handlePress = () => {
    // Function to open the URL
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.linkTextStyle}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#951272',
    borderRadius: 8,
  },
  linkTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ClickableLink;
