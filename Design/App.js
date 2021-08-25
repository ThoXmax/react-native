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

// export default FixedDimensionsBasics;


// ==================================================
// Flex Dimensions:
// import React from 'react';
// import { View } from 'react-native';

const FlexDimensionsBasics2 = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.4, backgroundColor: 'powderblue'}} />
      <View style={{ flex: 4, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
    </View>
  );
};

// export default FlexDimensionsBasics2;


// ==================================================
// percentage Dimensions:
// import React from 'react';
// import { View } from 'react-native';

const PercentageDimensionsBasics = () => {
  // Try removing the `height: '100%'` on the parent View.
  // The parent will not have dimensions, so the children can't expand.
  return (
    <View style={{ height: '100%' }}>
      <View style={{
        height: '15%', backgroundColor: 'powderblue'
      }} />
      <View style={{
        width: '66%', height: '35%', backgroundColor: 'skyblue'
      }} />
      <View style={{
        width: '33%', height: '50%', backgroundColor: 'steelblue'
      }} />
    </View>
  );
};

export default PercentageDimensionsBasics;