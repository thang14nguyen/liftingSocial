import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet, View, Text, Image, Platform, TouchableWithoutFeedback, Item, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  KeyboardAvoidingView, IconButton, ScrollView, FlatList,
} from 'native-base';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';

// ---- RESOURCES ----

// ---- COMPONENTS ----
import SearchBar from './components/searchBar';
import StatsBoard from './components/stats';

function YouScreen({ navigation }) {
  const [currentLift, setCurrentLift] = useState({});
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://0.0.0.0:3000/user/100', { params: { user_id: 100 } })
      .then(({ data }) => {
        setVideos(data);
        const current = data[0];
        setCurrentLift({
          exercise: current.exercise,
          weight: current.weight,
          date: current.date,
          reps: current.reps,
        });
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  const renderItem = ({ item }) => (
    <ScrollView style={styles.video}>
      <YoutubePlayer
        height={Dimensions.get('window').height}
        videoId={item.url}
        // play={true}
        // onChangeState={(event) => {
        //   if (event === 'ended' && visible) {
        //     youtubePlayerRef?.current?.seekTo(0, true);
        //   }
        // }}
        // webViewProps={{
        //   injectedJavaScript: `
        //   var element = document.getElementsByClassName('container')[0];
        //   element.style.position = 'unset';
        //   true;
        // `,
        // }}
      />
    </ScrollView>
  );

  const viewabilityConfigRef = useRef({
    waitForInteraction: true,
    itemVisiblePercentThreshold: 40,
  });

  const onViewableItemsChangedHandler = useRef(({ viewableItems, changed }) => {
    console.log(viewableItems[0].item);
    console.log(viewableItems[0].index);
    const current = viewableItems[0].item;
    setCurrentVideo(viewableItems[0].index);
    setCurrentLift({
      exercise: current.exercise,
      weight: current.weight,
      date: current.date,
      reps: current.reps,
    });
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset="95"
    >
      <View style={styles.container}>
        <FlatList
          data={videos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={Dimensions.get('window').height}
          style={styles.flatlist}
          viewabilityConfig={viewabilityConfigRef.current}
          onViewableItemsChanged={onViewableItemsChangedHandler.current}
          pagingEnabled
        />
        <View style={styles.userInteractions}>
          <View>
            <View style={styles.dashboard}>
              <View style={styles.stats}>
                <StatsBoard
                  exercise={currentLift.exercise}
                  weight={currentLift.weight}
                  date={currentLift.date}
                  reps={currentLift.reps}
                />
              </View>
              <View style={styles.add}>
                <IconButton
                  variant="ghost"
                  _icon={{
                    as: Ionicons,
                    name: 'ios-add-circle-sharp',
                    color: 'white',
                    borderColor: 'gray',
                    size: 38,
                  }}
                />
              </View>
            </View>
          </View>
          <View>
            <SearchBar />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    // borderColor: 'red',
    // borderWidth: 2,
    zIndex: 1,
  },

  userInteractions: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    position: 'absolute',
    bottom: 0,
    width: '90%',
    alignSelf: 'center',
  },

  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },

  add: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
  },

  stats: {
    flexGrow: 2,
    marginBottom: 10,
  },

  video: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').height * 1.6,
    alignSelf: 'center',
    borderColor: 'green',
    borderWidth: 2,
  },

  flatlist: {
    flex: 1,
    // borderColor: 'blue',
    // borderWidth: 2,
  },
});

export default YouScreen;
