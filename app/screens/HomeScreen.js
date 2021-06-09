import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import Card from "../components/card";
import Screen from "../components/Screen";
import Apptext from "../components/AppText";
import AppButton from "../components/AppButton";
import LodingAnimation from "../components/LodingAnimation";
import useApi from "../hooks/useApi";
import { getListings } from "../api/listing";
import { getMyListings } from "../api/myListings";
import CategoryList from "../components/CategoryList";
import Color from "../config/colors";
import routes from "../navigation/routes";

function HomeScreen({ route, navigation }) {
  const [selectedCategory, setSelectedCategory] = useState([0]);
  const [refreshing, setRefreshing] = useState(false);

  const whichListing =
    route.params?.self !== undefined ? getMyListings : getListings;
  const {
    request: loadListings,
    isLoding,
    hasError,
    data: listings,
  } = useApi(whichListing);

  const getSortedListings = () => {
    if (selectedCategory != 0 && listings.filter != undefined)
      return listings?.filter((l) => l.categoryId === selectedCategory);
    else return listings;
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <LodingAnimation visible={isLoding} />
      <Screen style={styles.container}>
        {hasError && (
          <>
            <Apptext>Could'nt fetch the listings</Apptext>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        <CategoryList
          selectedCategory={selectedCategory}
          onSelect={(c) => setSelectedCategory(c)}
        />

        {(listings != undefined || listings.length == 0) && !isLoding && (
          <Apptext style={styles.emptyWarning}>No Listings found !</Apptext>
        )}
        <FlatList
          data={getSortedListings()}
          keyExtractor={(item) => item._id.toString()}
          refreshing={refreshing}
          onRefresh={() => {
            loadListings();
          }}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              description={item.description}
              images={item.images}
              price={item.price}
              listingId={item._id}
              location={item.location}
              //Its not a user Id It will refrence usedID in mongo db
              owner={item.userId}
              //but while fetching, this property is populated
              //by mongoose, so now its a full user OBJ

              date={item.date}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#f8f4f4",
    paddingTop: 20,
  },
  emptyWarning: {
    color: Color.primary,
    fontWeight: "700",
    alignSelf: "center",
    justifyContent: "center",
    top: "10%",
    fontSize: 20,
  },
});

export default HomeScreen;
