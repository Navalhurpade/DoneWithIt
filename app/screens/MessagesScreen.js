import React, { useState } from "react";
import { FlatList } from "react-native";
import Apptext from "../components/AppText";

import { ListItem, ListItemSeperator } from "../components/Lists";
import Screen from "../components/Screen";
import Color from "../config/colors";

const initialMessages = [
  {
    _id: 1,
    title: "Yash Sharma",
    subTitle: "Is this Item still, available ?",
  },
  {
    _id: 2,
    title: "Shubham Bodakhe",
    subTitle: "150 Rupeya denga !, usse jyadya nai, paisa ch to nai hai bro...",
  },
  {
    _id: 3,
    title: "T3",
    subTitle: "M3",
  },
];

function MessagrScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const onDelete = (message) => {
    const remainingMessages = messages.filter((m) => m._id !== message._id);
    setMessages(remainingMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(massage) => massage._id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            isSwipeable
            onSelect={() => console.log("Selected ", item)}
            onDelete={() => onDelete("Deleted", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      ></FlatList>
      <Apptext style={{ color: Color.primary, fontSize: 20 }}>
        Message feature is not ready yet, comming soon...
      </Apptext>
    </Screen>
  );
}

export default MessagrScreen;
