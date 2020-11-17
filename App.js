import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { GoogleMap, LoadScript, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const containerStyle = {
  width: '100%',
  height: '400px'
};
 
const center = {
  lat: -3.745,
  lng: 38.523
};

const inputStyles = {
  textInput: {
    height: 40,
    width: '100vw',
    // border: '1px solid black',
    borderLeftColor: 'transparent',
    paddingLeft: 50,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
    width: '95%',
    position: 'relative',
  },
  description: {
    fontWeight: 'bold',
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
    backgroundColor: 'black',
  },
}

export default function App() {
  // debugger;
  // const [map, setMap] = useState(null)
  const [address, setAddress] = useState('');

  // handleChange = address => {
  //   useState(address);
  // };
 
  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])
 
  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, []);

  // const ref = useRef();
 
  // useEffect(() => {
  //   ref.current?.setAddressText('Some Text');
  // }, []);
  // const homePlace = {description: 'Home', geometry: { location: { lat: 42.3969, lng: -71.1224 } }};
  // const workPlace = {description: 'Work', geometry: { location: { lat: 42.3, lng: -71.1 } }};

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image 
          source={{uri: 'https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png'}}
          style={styles.imageGoogle}
        />
        <Image 
          source={{uri: 'https://seeklogo.com/images/G/google-mic-logo-33133A4F5F-seeklogo.com.png'}}
          style={styles.imageMicrophone}
        />
        <GooglePlacesAutocomplete
        placeholder='Enter Location'
        minLength={2}
        autoFocus={true}
        returnKeyType={'search'}
        keyboardAppearance={'light'}
        listViewDisplayed={'auto'}
        fetchDetails={true}
        renderDescription={row=> row.description}
        onPress={(data, details = 'null') => {
          console.log(data, details);
        }}
        getDefaultValue={()=> ''}
        nearbyPlacesAPI='GooglePlacesSearch'
        GooglePlacesDetailsQuery={{
          fields: 'formatted_address',
        }}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
          type: 'cafe'
        }}
        query={{
          key: 'AIzaSyA2hfHczmot7yaRhuZKFYgWpbdH4LAUo7w',
          language: 'en',
          types: '(cities)',
        }}
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3', 'sublocality', 'administrative_area_level_2', 'administrative_area_level_1']}
        
        // predefinedPlaces={[homePlace, workPlace]}
        debounce={200}
        styles={inputStyles}
      />
      </View>
        
      {/* <View style={styles.mapContainer}>
        <LoadScript
          googleMapsApiKey="AIzaSyA2hfHczmot7yaRhuZKFYgWpbdH4LAUo7w" libraries={["places"]}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
          >
          </GoogleMap>
        </LoadScript>
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  imageGoogle: {
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    zIndex: 5,
    top: 20,
  },
  imageMicrophone: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    zIndex: 5,
    top: 20,
  },
  mapContainer: {
    height: '100%',
    width: '95%',
    // border: '1px solid black'
  }
});
