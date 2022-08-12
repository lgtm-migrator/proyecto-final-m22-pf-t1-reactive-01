import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from './style';
const Input = ({type, onChangeText, placeholder}) => {
  const petArray = ['Dog', 'Cat'];
  const breedArray = [
    'Bulldog',
    'Pastor Aleman',
    'Husky',
    'Poodle',
    'Pomerania',
    'Pug',
    'Gran Danes',
    'Doberman',
    'Mongrel',
    'Undefined',
  ];
  const [selectedPet, setSelectedPet] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  return (
    <View>
      <View style={styles.header} />

      {type === 'firstname' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="First Name"
            placeholderTextColor="#818181"
            style={styles.inputshort}
          />
        </>
      ) : type === 'lastname' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Last Name"
            placeholderTextColor="#818181"
            style={styles.inputgroup}
          />
        </>
      ) : type === 'typepet' ? (
        <View>
          <SelectDropdown
            buttonStyle={styles.dropdown}
            defaultButtonText="Type Pet"
            data={petArray}
            onSelect={pet => {
              setSelectedPet(pet);
            }}
            buttonTextAfterSelection={(selectedPet, index) => {
              return selectedPet;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            rowStyle={styles.rowStyle}
          />
        </View>
      ) : type === 'breed' ? (
        <View>
          <SelectDropdown
            buttonStyle={styles.dropdown}
            defaultButtonText="Breed"
            data={breedArray}
            onSelect={breed => {
              setSelectedBreed(breed);
            }}
            buttonTextAfterSelection={(selectedBreed, index) => {
              return selectedBreed;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            rowStyle={styles.rowStyle}
          />
        </View>
      ) : type === 'age' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Age"
            placeholderTextColor="#818181"
            style={styles.inputgroup}
          />
        </>
      ) : type === 'gender' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Gender"
            placeholderTextColor="#818181"
            style={styles.inputgroup}
          />
        </>
      ) : type === 'color' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Color of your Pet"
            placeholderTextColor="#818181"
            style={styles.input}
          />
        </>
      ) : type === 'description' ? (
        <>
          <TextInput
            onChangeText={onChangeText}
            placeholder="Description"
            multiline
            placeholderTextColor="#818181"
            style={styles.inputmultiline}
          />
        </>
      ) : (
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor="#818181"
        />
      )}
    </View>
  );
};

export default Input;