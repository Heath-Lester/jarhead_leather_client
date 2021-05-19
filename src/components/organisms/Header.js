import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from "../molecules/Navigation"
import { Logo } from "../atoms/Logo"
import './header.css';
import '../molecules/navigation.css'

export const Header = ({ style, ...props }) => {
  if (style === "center") {
    return (
      <header className="wrapper--center">
        <div className="navigation">
          <Navigation split={'left'} />
          <Navigation split={'right'} />
        </div>
        <Logo lettering={false} size={'large'} />
      </header>
    )
  } else if (style === "left") {
    return (
      <header className="wrapper--left">
        <Logo lettering={false} size={"medium"} />
        <Navigation />
      </header>
    )
  }

}

Header.propTypes = {
};

Header.defaultProps = {
  style: 'center'
};


