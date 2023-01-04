import {Link} from 'react-router-dom';
import ytIcon from './images/yt-icon.svg';
import micIcon from './images/mic-icon.svg';
import createIcon from './images/create-icon.svg';
import notifsIcon from './images/notifications-icon.svg';
import usrIcon from './images/usr-icon.svg';
export default function Navbar(){
    function showSidebar(){
        let sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.classList.toggle("shown");
    }
    
    return (
        <nav className='navbar' >
            <button className='hamburger-btn' onClick={showSidebar}>
                <ul className='hamburger'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </button>
            <Link to="/"><img className="youtube-icon" src={ytIcon} alt="yt icon"/></Link>
            <div className="search-div-with-mic">
            <div className="search-div">
                <input type="text" className="search-box" />
                <svg className="search-icon" focusable="true" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            </div>
            <img className="mic-icon" src={micIcon} alt="mic-icon"/>
            </div>
            
            <div className="user-options">
            <img className="create-icon" src={createIcon} alt="create icon"/>
            <img className='notifs' src={notifsIcon} alt="notifs"/>
            <img className='usr' src={usrIcon} alt="usr"/>
            </div>
        </nav>
    )
}