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


const Sidebaar = () => {

    const user =JSON.parse(localStorage.getItem('profile'))
    return (
        <div className="sideBaar">
            <SidebaarRow title ={user?.result?.name} src={user?.result?.imageUrl}  />
            <SidebaarRow title ="Covid 19 Information" src="" Icon={LocalHospitalIcon} />
            <SidebaarRow title ="Pages" src="" Icon={PagesIcon} />
            <SidebaarRow title ="Freinds" src="" Icon={PeopleIcon} />
            <SidebaarRow title ="Messanger" src="" Icon={MessageIcon} />
            <SidebaarRow title ="Marketplace" src="" Icon={StorefrontIcon} />
            <SidebaarRow title ="Videos" src="" Icon={VideoLibraryIcon} />
            <SidebaarRow title ="More" src="" Icon={ExpandMoreIcon} />
            

        </div>
    )
}

export default Sidebaar
