import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class Artist extends React.Component {
  constructor(props) {
    super(props)

    this.artistId = '1';
    this.albums=[];
    this.songs=[];
    this.artist=this.props.artists.filter(artist=>{artist.id===this.artistId});
    console.log(this.artist);
  }
  componentDidMount(){

    // axios.get(`/api/${this.artistId}/albums`)
    // .then(res=>res.data)
    // .then(albums=>this.albums=albums)
    // .catch()
    // axios.get(`/api/${this.artistId}/songs`)
    // .then(res=>res.data)
    // .then(songs=>this.songs=songs)
    // .catch()
  }
  render() {
    return (
      <div>
      <h1>HELLO WORLD</h1>
        <h3>{this.artist.name}</h3>
        <h4>{JSON.stringify(this.albums[0])}</h4>
        <h4>{JSON.stringify(this.songs[0])}</h4>
      </div>
    )
  }
}
