import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Color from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/Lists/ListItem";
import routes from "../navigation/routes";
import useAuth from "../hooks/useAuth";
import defaultImg from "./../assets/female.png";

function MyAccountScreen({ navigation }) {
  const menuItems = [
    {
      id: 1,
      title: "My Listings",
      icon: "format-list-bulleted",
      backgroundColor: Color.primary,
      targetScreen: routes.FEED_SCREEN,
      arguments: { self: true },
    },
    {
      id: 2,
      title: "My Messeges",
      icon: "email",
      backgroundColor: Color.secondary,
      targetScreen: routes.MESSEGES_SCREEN,
      arguments: { self: true },
    },
  ];
  const { user, logOut } = useAuth();

  const { email, name, gender } = user;

  return (
    <>
      <View style={{ marginTop: 30 }}>
        <ListItem
          style={styles.profile}
          titleStyle={styles.titleStyle}
          title={name}
          subTitle={email}
          gender={gender}
          image={defaultImg}
        />
      </View>
      <View style={styles.menuSection}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              style={styles.menuItem}
              title={item.title}
              onSelect={() => {
                navigation.navigate({
                  name: item.targetScreen,
                  params: item.arguments,
                  key: item.id.toString(),
                });
              }}
              IconComponent={
                <Icon
                  size={40}
                  name={item.icon}
                  backgroundColor={item.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        onSelect={() => logOut()}
        style={styles.logOut}
        title="Log Out"
        backgroundColor={Color.white}
        IconComponent={
          <Icon size={40} name="logout" backgroundColor={Color.yellow} />
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginTop: 60,
    marginBottom: 60,
    paddingVertical: 15,
  },
  titleStyle: {
    fontWeight: "700",
  },
  menuSection: {
    borderRadius: 10,
    marginBottom: 60,
    marginTop: 50,
    paddingVertical: 20,
    // backgroundColor: "red",
  },
  menuItem: {
    paddingVertical: 10,
    // backgroundColor: "red",
  },
  logOut: { paddingVertical: 10, backgroundColor: Color.white },
});

export default MyAccountScreen;
