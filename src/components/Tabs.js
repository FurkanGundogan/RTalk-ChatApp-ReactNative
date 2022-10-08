import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Tabs = () => {
  const [selected, setselected] = useState('CHATS');
 const tabs = [
    "CHATS","STORIES"
  ]
  return (
    <View style={styles.container}>
      {tabs &&
        tabs.map((tab, i) => 
          <TouchableOpacity key={i} onPress={()=>setselected(tab)}>
            <Text 
            style={tab == selected ? styles.selectedTab : styles.tab}>
              {tab}
            </Text>
          </TouchableOpacity>
        )}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor:"orange",
    paddingBottom:8
  },
  tab: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
    textAlign: 'center',
  },
  selectedTab: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    textAlign: 'center',
    //paddingBottom:8
  },
});