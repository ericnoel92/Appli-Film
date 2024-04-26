import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const API_KEY = '5788136c0fe92c84b0098005839a2b81';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Nzg4MTM2YzBmZTkyYzg0YjAwOTgwMDU4MzlhMmI4MSIsInN1YiI6IjY2MjhmNWRmYTEzNTMzMDE2NTE3ZTc1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Ps-BTJpwOT1VssYhRQhPojC6nFZBb3sANnnfpFkUwU';

export default class HomePage extends Component {
  fetchData = () => {
    axios.get('https://api.themoviedb.org/3/account/21233492/watchlist/movies', {
      params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc',
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: 'application/json',
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  render() {
    return (
      <View>
        <Text>HomePage</Text>
        <Button title="Fetch Data" onPress={this.fetchData} />
      </View>
    );
  }
}
