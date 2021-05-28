import React from 'react'
import './sidebaar.css'
import SidebaarRow from './SidebaarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PagesIcon from '@material-ui/icons/Pages';
import PeopleIcon from '@material-ui/icons/People';
import MessageIcon from '@material-ui/icons/Message';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';


const Sidebaar = () => {

    const user =JSON.parse(localStorage.getItem('profile'))
    return (
      <div className="sideBaar">
        <NavLink exact to="/account">
          <SidebaarRow
            title={user?.result?.name}
            src={user?.result?.imageUrl}
          />
        </NavLink>
        <a target="_new" href="https://www.mohfw.gov.in/">
          <SidebaarRow
            title="Covid 19 Information"
            src=""
            Icon={LocalHospitalIcon}
          />
        </a>
        <NavLink exact to="/pages">
          <SidebaarRow title="Pages" src="" Icon={PagesIcon} />
        </NavLink>
        <NavLink exact to="/friends">
        <SidebaarRow title="Friends" src="" Icon={PeopleIcon} />
        </NavLink>
        <NavLink exact to='/messenger'>
        <SidebaarRow title="Messanger" src="" Icon={MessageIcon} />
        </NavLink>
        <SidebaarRow title="Marketplace" src="" Icon={StorefrontIcon} />
        <NavLink exact to="/subscriptions">
        <SidebaarRow title="Videos" src="" Icon={VideoLibraryIcon} />
        </NavLink>
        <SidebaarRow title="More" src="" Icon={ExpandMoreIcon} />
      </div>
    );
}

export default Sidebaar
