import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function NotFoundScreen() {
  return (
    <View>
      <Text>NotFoundScreen</Text>
      <Link href={'/'}>regresar</Link>
    </View>
  )
}

const styles = StyleSheet.create({})


//rnfs
// mas api documentation, apireferences 
// ahi nos registramos
