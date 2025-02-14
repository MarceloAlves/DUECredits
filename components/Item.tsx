import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Item} from '../models/ItemIndex';
export const ItemComponent: React.FC<{
  itemProps: Item;
  childProps: React.ReactElement;
}> = ({itemProps, childProps}) => {
  var notes = itemProps.notes !== '' ? 'Notes: ' + itemProps.notes : '';
  return (
    <View style={styles.itemContainer}>
      <View style={styles.primaryContainer}>
        <Text style={styles.sectionTitle}>
          {itemProps.restricted.toString().toLowerCase() === 'true'
            ? '(R) '
            : ''}
          {itemProps.name}
        </Text>
        <View>{childProps}</View>
        {itemProps.notes !== '' && (
          <View style={styles.itemTextContainer}>
            <Text>
              {'Notes: '}
              {notes}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.spacer} />
      <View style={styles.priceContainer}>
        <View style={styles.itemTextContainer}>
          <Text>
            {'Price: '}
            {itemProps.price}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: 'indigo',
    marginHorizontal: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  primaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 10000,
    marginRight: 40,
  },
  priceContainer: {
    justifyContent: 'center',
  },
  spacer: {
    display: 'flex',
    flex: 1,
  },
  itemTextContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  sectionTitle: {
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
