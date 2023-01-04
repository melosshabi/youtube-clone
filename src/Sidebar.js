import homeIcon from './images/home-icon.svg';
import shorts from './images/yt-shorts.svg';
import subscriptions from './images/subscriptions.svg';
import library from './images/library-icon.svg';
import history from './images/history-icon.svg';
import yourVideos from './images/your-videos.svg';
import watchLater from './images/watch-later.svg';
import likeIcon from './images/like-icon.svg';
export default function Sidebar(){
    return (
        <>
        <div className="sidebar">
            <div className="sidebar-options1">
                <ul>
                    <li><img className="home-icon" src={homeIcon} alt="text"/> Home</li>
                    <li><img className="yt-shorts" src={shorts} alt="text"/> Shorts</li>
                    <li><img className='subscriptions' src={subscriptions} alt="text"/> Subscriptions</li>
                </ul>
                <ul className="sidebar-options2">
                    <li><img class="library-icon" src={library} alt="text"/>Library</li>
                    <li><img class="history-icon" src={history} alt="text"/>History</li>
                    <li><img class="your-icon" src={yourVideos} alt="text"/>Your Videos</li>
                    <li><img class="watchLater-icon" src={watchLater} alt="text"/>Watch Later</li>
                    <li><img class="like-icon" src={likeIcon} alt="text"/>Liked Videos</li>
                </ul>
            </div>
            <div className='border-div'></div>
        </div>
        </>
    )
}