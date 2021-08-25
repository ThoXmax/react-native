import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Style:
const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  )
}

// export default LotsOfStyles;


// ==================================================
// Height and Width:
// import React from 'react';
// import { View } from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View style={{ 
        width: 50, height:50, backgroundColor: 'powderblue'
      }} />
      <View style={{
        width: 100, height: 100, backgroundColor: 'skyblue'
      }} />
      <View style={{ 
        width: 150, height: 150, backgroundColor: 'steelblue'
      }} />
    </View>
  );
}

export default FixedDimensionsBasics;