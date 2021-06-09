import React from "react";
import { useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import CategoryItem from "./categoryItem";
import { getCategories } from "./../api/categories";
import useApi from "../hooks/useApi";

function CategoryList({ selectedCategory, onSelect }) {
  let { request: loadCategories, data: categories } = useApi(getCategories);

  categories = [{ _id: 0, name: "All" }, ...categories];

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <ScrollView horizontal style={styles.container}>
      {categories.map((c) => (
        <CategoryItem
          key={c._id}
          cId={c._id}
          onSelect={onSelect}
          selectedCategory={selectedCategory}
          cName={c.name}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 7,
    height: 50,
    maxHeight: 50,
  },
});

export default CategoryList;
