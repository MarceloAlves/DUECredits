import {FlatList, View} from 'native-base';
import React from 'react';
import {ArmorItemComponent} from '../components/ArmorItem';
import {LoadingScreen} from '../components/LoadingScreen';
import {useGetAllArmorQuery} from '../store/slices/databaseSlice';

export const ArmorInventory = () => {
  const {data, isLoading} = useGetAllArmorQuery();

  if (isLoading || !data) {
    return <LoadingScreen text={'Loading armor...'} />;
  }

  return (
    <View>
      <FlatList
        data={data.items}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => (
          <ArmorItemComponent key={item.id} item={item} />
        )}
        initialNumToRender={10}
      />
    </View>
  );
};
