import React, { Component } from 'react';
import { Text, View, TextInput, Image, Button } from 'react-native';

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

export default Cafe3;