import React, { Component, useState } from 'react';
import { Text, View, TextInput, Image, Button, ScrollView, FlatList, StyleSheet, SectionList, Platform } from 'react-native';

// React Fundamentals
// Component:
class Cat extends Component {
  render() {
    return (
      <Text>Hello, I am your cat!</Text>
    );
  }
}
//export default Cat;


//JSX1:
const Cat2 = () => {
  const name = "Max";
  return (
    <Text>Hello, I am {name}!!</Text>
  );
}

//export default Cat2;


//JSX2:
const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

const Cat3 = () => {
  return (
    <Text>
      Hello, I am {getFullName("Tho", "X", "Max")}!
    </Text>
  )
}

//export default Cat3;


// Custom Components
const Cat4 = () => {
  return (
    <View>
      <Text>Hello, I am ...</Text>
      <TextInput
        style={{
          height:40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Name me!"
      />
    </View>
  )
}

//export default Cat4;


// Multiple Components
const Cat5 = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat5 />
      <Cat5 />
      <Cat5 />
    </View>
  );
}

//export default Cafe;


//Props:
//Multiple Props
const Cat6 = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!!</Text>
    </View>
  );
}

const Cafe2 = () => {
  return (
    <View>
      <Cat6 name="Musk"/>
      <Cat6 name="Max"/>
      <Cat6 name="Tho"/>
    </View>
  );
}

//export default Cafe2;


//Props source
const CatApp = () => {
  return (
    <View>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{ width: 200, height: 200 }}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
}

//export default CatApp;


//State:
class Cat7 extends Component {
  state = { isHungry: true };

  render() {
    return (
      <View>
        <Text>
          I am {this.props.name}, and I am {this.state.isHungry ? "hungry" : "full"}!
        </Text>
        <Button 
          onPress = {() => {
            this.setState({ isHungry: false});
          }}
          disabled = { !this.state.isHungry }
          title = { this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"}
        />
      </View>
    );
  }
}

class Cafe3 extends Component {
  render() {
    return (
      <>
        <Cat7 name="Munkustrap" />
        <Cat7 name="Spot" />
      </>
    );
  }
}

// export default Cafe3;


// ==================================================

// Handling Text Input:

// import React, { useState } from 'react';
// import { Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '????').join(' ')}
      </Text>
    </View>
  );
}

// export default PizzaTranslator;


// ==================================================
// ScrollView:
// import React from 'react';
// import { Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
}

const App = () => (
  <ScrollView>
    <Text style={{ fontSize: 96}}> ScrollView me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>If youn like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize:96 }}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{ fontSize: 80}}>React Native</Text>
  </ScrollView>
);

// export default App;


// ==================================================
// FlatList Basics:
// import React from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'}                                                                                                                                                        
        ]}
        renderItem = {({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

//export default FlatListBasics;


// ==================================================
// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})

const SectionListBasics = () => {
  return (
    <View style={styles1.container}>
      <SectionList 
        sections={[
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
        ]}
        renderItem={({item}) => <Text style={styles1.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles1.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}

export default SectionListBasics;


// ==================================================
//platform specific code:
// import { Platform, StyleSheet } from 'react-native';

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

