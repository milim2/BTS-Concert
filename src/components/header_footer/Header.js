import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#2f2f2f',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
                >
                <Toolbar>
                    <div className="header_logo">
                    <div classNmae="font_righteous header_logo_venue">The Venue</div>
                    <div classNmae="header_logo_title">Sheridan Events</div>

                    </div>
                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;