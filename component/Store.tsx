import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View  } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


export default function Store() {

  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.headerText}>Store</Text>
          <Icon name="notifications-outline" size={26} color="#000" />
        </View>

        <ScrollView contentContainerStyle={styles.scrollView}>

        

        <View style = {styles.card}>
          <Image source = {{
            uri : 'https://w0.peakpx.com/wallpaper/71/617/HD-wallpaper-gym-girl-gym-girls.jpg'
          }} 
          style = {styles.image}></Image>
          <Text style = {styles.cardText}>Training Plan</Text>
        </View>

        <View style = {styles.card}>
          <Image source = {{
            uri : 'https://c4.wallpaperflare.com/wallpaper/208/313/153/woman-back-workout-fitness-girl-wallpaper-preview.jpg'
          }} 
          style = {styles.image}></Image>
          <Text style = {styles.cardText}>Supplement Plan</Text>
        </View>

        <View style = {styles.card}>
          <Image source = {{
            uri : 'https://hips.hearstapps.com/hmg-prod/images/ab-workouts-1595971255.jpg'
          }} 
          style = {styles.image}></Image>
          <Text style = {styles.cardText}>Clothing Plan</Text>
        </View>

        <View style = {styles.card}>
          <Image source = {{
            uri : 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701952335.jpg'
          }} 
          style = {styles.image}></Image>
          <Text style = {styles.cardText}>Meal Plan</Text>
        </View>

        <View style = {styles.card}>
          <Image source = {{
            uri : 'https://www.shutterstock.com/image-photo/young-strong-sporty-athletic-fitness-600nw-2101837279.jpg'
          }} 
          style = {styles.image}></Image>
          <Text style = {styles.cardText}>Booster Plan</Text>
        </View>

      </ScrollView> 

    

       <View style = {styles.footer}>
        <Icon name ="home-outline" size ={24} color = '#000'></Icon>
        <Icon name ="stats-chart-outline" size = {24} color= '#000'></Icon>
        <Icon name ="person-circle-outline" size = {24} color= '#000'></Icon>
        <Icon name ="cart-outline" size = {28} color= '#FF3366'></Icon>
        <Icon name ="menu-outline" size = {24} color= '#000'></Icon>

      </View> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
  
    justifyContent : 'flex-end',
    backgroundColor : '#F5F5F5',
  },

  scrollView: {
    flexGrow: 1,
  },

  header: {
    flexDirection : 'row',
    alignContent : 'center',
    justifyContent : 'space-between',
    padding : 20,
    marginTop : 8,
    marginHorizontal : 6,
    elevation : 5,
    backgroundColor : '#FFF',
    borderRadius : 8,
  },

  headerText: {
    fontSize: 30,
    color : '#000',
    fontWeight: 'bold',
  },
  card: {
    
    margin : 10,
    borderRadius : 10,
    overflow : 'hidden'

  },

  image: {
    height : 200,
    borderRadius : 10,
  },

  cardText: {
    bottom : 10,
    left : 10,
    color : '#FFF',
    fontSize : 22,
    position : 'absolute',
    fontWeight : '600',
    paddingBottom : 10
  },

  footer: {
    marginBottom : 8,
    marginHorizontal : 6,
    borderTopStartRadius : 8,
    borderRadius : 8,
    elevation : 5,
    borderStartColor: '#FF3366',
    flexDirection : 'row',
    justifyContent: 'space-around',
    padding : 20,
    backgroundColor: '#FFF',
    

  },
})