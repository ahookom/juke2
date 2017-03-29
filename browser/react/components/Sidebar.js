import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;


  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to='/Albums'>ALBUMS</Link>
        </h4>
        <h4 className="menu-item active">
          <Link to='/Artists'>ARTISTS</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
