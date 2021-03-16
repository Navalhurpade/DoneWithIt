import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { logoutUser } from "../api/auth";
import AuthContext from "../api/AuthContext";

import Color from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/Lists/ListItem";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

function MyAccountScreen({ navigation }) {
  const menuItems = [
    {
      id: 1,
      title: "My Listings",
      icon: "format-list-bulleted",
      backgroundColor: Color.primary,
    },
    {
      id: 2,
      title: "My Messeges",
      icon: "email",
      backgroundColor: Color.secondary,
      targetScreen: routes.MESSEGES_SCREEN,
    },
  ];
  const context = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
    context.setUser(null);
  };

  const authDetails = useContext(AuthContext);

  const { email, name, userImage } = authDetails.user;
  console.log(userImage);
  return (
    <Screen style={styles.container}>
      <ListItem
        style={styles.profile}
        titleStyle={styles.titleStyle}
        title={name}
        subTitle={email}
        image={userImage}
      />
      <View style={styles.menuSection}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              style={styles.menuItem}
              title={item.title}
              onSelect={() =>
                navigation.navigate({
                  name: item.targetScreen,
                  key: item.id.toString(),
                })
              }
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
        onSelect={handleLogout}
        style={{ paddingVertical: 10, backgroundColor: Color.white }}
        title="Log Out"
        backgroundColor={Color.white}
        IconComponent={
          <Icon size={40} name="logout" backgroundColor={Color.yellow} />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.lightGray,
  },
  profile: {
    backgroundColor: Color.white,
    marginTop: 30,
    marginBottom: 40,
    paddingVertical: 20,
  },
  titleStyle: {
    fontWeight: "700",
  },
  menuSection: {
    backgroundColor: Color.white,
    borderRadius: 10,
    marginBottom: 40,
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 10,
  },
});

export default MyAccountScreen;
