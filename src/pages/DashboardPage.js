import React, { useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SidePanel from '../components/SidePanel';


function DashboardPage() {

const [profilePanelState, setProfilePanelState] = useState(false);

/*useEffect(()=>{

function collapseSidePanel() {
setProfilePanelOpened(()=>false);
}

if(profilePanelOpened){
alert('success!');
}

if(profilePanelOpened){
document.querySelector('main').addEventListener('click',collapseSidePanel);

} else {
document.querySelector('main').removeEventListener('click',collapseSidePanel);
}



});*/

function profilePanelHandler() {
setProfilePanelState(()=>!profilePanelState);
}

return (
<>
  <header>
    <NavBar profilePanelState={profilePanelState} profilePanelHandler={profilePanelHandler}/>
  </header>
  <main>
    <SidePanel/>
    <Outlet/>
  </main>
  <footer>
    <p>Footer</p>
  </footer>
</>
);
}

export default DashboardPage;