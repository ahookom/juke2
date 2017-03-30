import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Albums from './Albums';
import Songs from './Songs';
import { convertAlbum, convertAlbums, skip } from '../utils';

export default class Artist extends React.Component {
  constructor(props) {
    super(props)
    this.artistId = +this.props.routeParams.artistId;
    this.state = {
      albums: [],
      songs: []
    }
    this.artist = this.props.artists.filter(function (artist) {
      return artist.id === this.artistId
    }, this)[0];
  }
  componentDidMount() {

    axios.get(`/api/artists/${this.artistId}/albums`)
      .then(res => res.data)
      .then(albums => {
        this.albums = convertAlbums(albums);
        this.setState({ albums });
      })
      .catch()

    axios.get(`/api/artists/${this.artistId}/songs`)
      .then(res => res.data)
      .then(songs => {
        this.songs = songs;
        this.setState({ songs });
      })
      .catch()
  }

  render() {
    const selectedArtist = this.artist;
    const children = this.props.children;
    const propsToPassToChildren = {
      songs: this.songs,
      albums: this.albums,
      currentSong: this.props.currentSong,
      isPlaying: this.props.isPlaying,
      toggleOne: this.props.toggleOne
    }

    return (
      <div>
        <h3>{selectedArtist.name}</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/Artist/${this.artistId}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/Artist/${this.artistId}/songs`}>SONGS</Link></li>
        </ul>
        {children && React.cloneElement(children, propsToPassToChildren)}
      </div>
    )
  }
}

    // return (
    //   <div>
    //   <h1>HELLO WORLD</h1>
    //     <h3>{this.artist.name? this.artist.name : null}</h3>
    //     {this.albums.length ? <Albums albums={this.albums}/> : null }
    //     {this.songs.length ?
    //     <Songs
    //     songs={this.songs}
    //     currentSong={this.props.currentSong}
    //     isPlaying={this.props.isPlaying}
    //     toggleOne={this.props.toggleOne} />
    //     : null }
    //   </div>
    // )
