import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
const TabBarIcon = ({ focused, icon, label }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        style={{
          width: 112,
          height: 56,
          marginTop: 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 999,
          overflow: 'hidden',
        }}
      >
        <Image
          source={icon}
          tintColor="#151312"
          style={{ width: 20, height: 20 }}
        />
        <Text style={{ color: 'white', fontSize: 12 }}>{label}</Text>
      </ImageBackground>
    )
  } else {
    return (
      <View
        style={{
          width: 112,
          height: 56,
          marginTop: 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 999,
          overflow: 'hidden',

        }}
      >
        <Image
          source={icon}
          tintColor="#A8B5DB"
          style={{ width: 20, height: 20 }}
          className='size-5'
        />
      </View>
    )
  }
}
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle:{
          borderRadius: 50,
          width:'100%',
          height:'100%',
          justifyContent:'center',
          alignItems:'center'
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.home} label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.search} label="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.save} label="Saved" />
          ),
        }}
      />



      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.person} label="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
