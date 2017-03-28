import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {
  constructor(props){
    super()
  // const albumId = props.routeParams.albumId;
  // const album = props.album;
  // const currentSong = props.currentSong;
  // const isPlaying = props.isPlaying;
  // const toggleOne = props.toggleOne;
  }

  componentDidMount(){
    this.props.selectAlbum(this.props.routeParams.albumId);
  }

  render(){
    const album = this.props.album;
    return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={this.props.currentSong}
        isPlaying={this.props.isPlaying}
        toggleOne={this.props.toggleOne} />
    </div>
  );
  }
}

export default Album;
