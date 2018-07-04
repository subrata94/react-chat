import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./listItem";

const contactLists = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.contacts}
      renderItem={(info) => (
        <ListItem
          name={info.item.name}
          mobile={info.item.mobile}
          key={info.item.key}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default contactLists;
