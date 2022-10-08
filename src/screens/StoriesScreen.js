import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setStoryList } from "../utils/store";
import StoryListItem from "../components/StoryListItem";

const StoriesScreen = () => {
  const storyList = useSelector((state) => state.storyList);
  const dispatch=useDispatch()
  useEffect(() => {
    const q = query(collection(db, `stories`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let allItems = [];
      querySnapshot.forEach((doc) => {
        allItems.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      dispatch(setStoryList(allItems));
    });

    () => unsubscribe();
  }, []);

  // story
  // theme
  // deploy pazar
  // readme pazar
  
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader/>
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={storyList}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => <StoryListItem item={item} index={index} />}
    />
    </SafeAreaView>
  );
};

export default StoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
