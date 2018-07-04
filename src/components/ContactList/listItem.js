import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const listItem = props => (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View>
        {/* <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} /> */}
        <Text>{props.name}</Text>
        <Text>{props.mobile}</Text>
      </View>
    </TouchableOpacity>
);
  

export default listItem;