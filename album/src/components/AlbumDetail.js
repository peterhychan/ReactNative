import React from 'react';
import {Text , View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album})=>{
  const {title, artist, image, thumbnail_image, url} = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
} = styles;

  return (
    <Card>
      <CardSection>
      <View>
        <Image
        style={thumbnailStyle}
        source={{uri : thumbnail_image}}
        />
      </View>
      <View style = {headerContentStyle}>
        <Text>{artist}</Text>
        <Text style={headerTextStyle}>{title}</Text>
      </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{uri :image}}
        />
      </CardSection>

      <CardSection>
        <Button onPress={()=> Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};


const styles ={
  headerContentStyle:{
    flexDirection:'column',
    justifyContent:'space-around'
  },

  headerTextStyle:{
    fontSize:18
  },

  thumbnailStyle:{
    height: 50,
    width :50
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10
  },

  imageStyle:{
    height:300,
    flex:1,
    width: 300
  }
};
export default AlbumDetail;