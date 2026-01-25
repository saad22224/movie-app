import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Image } from "react-native";
import { icons } from "@/constants/icons";




interface props {
    placeholder: string;
    onPress: () => void;
    value: string;
    onChange: (text: string) => void;
}
const SearchBar = ({ placeholder, onPress, value , onChange }: props) => {
    return (
        <View className='flex-row items-center bg-dark-200  rounded-full px-5 py-2'>
            <Image source={icons.search} className="size-5 " resizeMode="contain"
                tintColor="#ab8bff" />

            <TextInput onPress={onPress} value={value}
                onChange={(e) => onChange(e.nativeEvent.text)} placeholder={placeholder}
                className='text-white ml-2 flex-1' placeholderTextColor="#ab8bff" />
        </View>
    )
}

export default SearchBar