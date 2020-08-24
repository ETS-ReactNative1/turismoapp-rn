import React, { useContext } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import ImagePickerBottomSheet from './ImagePickerBottomSheet';
import { Context } from '../context/context';

export default function ({ isFavorite, establishment, isGastronomic }) {
  const {value, setValue} = useContext(Context);


  const removeImage = () => {
    //@todo
  };

  const saveImage = (image) => {
    let est = isGastronomic ? value.gastronomics.data.find(x => x.id === establishment.id) : value.lodgings.data.find(x => x.id === establishment.id);
    est.memories.push(image);
    setValue({...value});
  };

  const renderMemories = () => {
    if (establishment.memories.length === 0) return <Text>Todavia no hay recuerdos guardados</Text>;

    return (
      <View style={styles.gallery}>
        {establishment.memories.map((element, idx) => (
          <Text key={idx}>{element.fileName}</Text>
        ))}
      </View>
    );
  };

  const renderIsFav = () => {
    return (
      <View>
        <ImagePickerBottomSheet handleImageSave={saveImage}/>
        {renderMemories()}
      </View>
    );
  };

  const renderNoFavMessage = () => {
    return <Text>Para añadir recuerdos añada este establecimiento a sus favoritos.</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      {isFavorite ? renderIsFav() : renderNoFavMessage()}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  gallery: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
    flexWrap: "wrap",
    marginHorizontal: 20,
  }
});
