import './css/videos.css';
import thumbnail1 from './thumbnails/thumbnail1.webp';
import pfp1 from './pfps/pfp1.jpg';
import thumbnail2 from './thumbnails/thumbnail2.webp';
import pfp2 from './pfps/pfp2.jpg';
import thumbnail3 from './thumbnails/thumbnail3.webp';
import pfp3 from './pfps/pfp3.jpg';
import thumbnail4 from './thumbnails/thumbnail4.webp';
import pfp4 from './pfps/pfp4.jpg';
import thumbnail5 from './thumbnails/thumbnail5.webp';
import pfp5 from './pfps/pfp5.jpg';
import thumbnail6 from './thumbnails/thumbnail6.webp';
import pfp6 from './pfps/pfp6.jpg';
import thumbnail7 from './thumbnails/thumbnail7.webp';
import pfp7 from './pfps/pfp7.jpg';
import thumbnail8 from './thumbnails/thumbnail8.webp';
import pfp8 from './pfps/pfp8.jpg';
export default function Videos(){
    return (
        <div className="main-page">
            <div className="page-vids">
            <div className="video">
                <div className="video-img-div"><p>21:56</p><img className="video-img" src={thumbnail1} alt="text"/></div>
                <div className="video-title"><img className='pfp' src={pfp1} alt="pfp1" /><p>How the OSI model works on Youtube</p></div>
                <div className="video-info"><p>NetworkChuck<br/>350K views · 2 Years ago</p></div>
            </div>

            <div className="video">
                <div className="video-img-div"><p>22:51</p><img className="video-img" src={thumbnail2} alt="text"/></div>
                <div className="video-title"><img className='pfp' src={pfp2} alt="text"/><p>Nvidia is lying to you-RTX 4070 Ti Full Review</p></div>
                <div className="video-info">Linus Tech Tips <br/>550K views · 5 hours ago</div>
            </div>

            <div className="video">
                <div className="video-img-div"><p>9:02</p><img className='video-img' src={thumbnail3} alt="text" /></div>
                <div className="video-title"><img className='pfp' src={pfp3} alt="txt"/><p>How to ACTUALLY learn to code... 7 Roadmasp for 2023</p></div>
                <div className="video-info">Fireship <br/>45K views · 3 hours ago</div>
            </div>

            <div className="video">
                <div className="video-img-div"><p>15:40</p><img className='video-img' src={thumbnail4} alt="text" /></div>
                <div className="video-title"><img className='pfp' src={pfp4} alt="txt"/><p>MORE bad news for AMD GPUs... Huge Recall Incoming?</p></div>
                <div className="video-info">JayzTwoCents <br/>514K views · 22 hours ago</div>
            </div>
            </div>
            
            <div className="page-vids">
            <div className="video">
                <div className="video-img-div"><p>13:38</p><img className='video-img' src={thumbnail5} alt="text" /></div>
                <div className="video-title"><img className='pfp' src={pfp5} alt="txt"/><p>Learn useEffect In 13 minutes</p></div>
                <div className="video-info">Web Dev Simplified <br/>537K views · 2 years ago</div>
            </div>

            <div className="video">
                <div className="video-img-div"><p>18:09</p><img className='video-img' src={thumbnail6} alt="text" /></div>
                <div className="video-title"><img className='pfp' src={pfp6} alt="txt"/><p>These MacBooks DIED from SSD Failure & How To Prevent it</p></div>
                <div className="video-info">iBoff RCC <br/>127K views · 1 month ago</div>
            </div>

            <div className="video">
                <div className="video-img-div"><p>17:38</p><img className='video-img' src={thumbnail7} alt="text" /></div>
                <div className="video-title"><img className='pfp' src={pfp7} alt="txt"/><p>ASMR Programming - Modern Login Page UI Design - No Talking</p></div>
                <div className="video-info">Codeminton <br/>327k views · 2 months ago</div>
            </div>

            <div className="video">
                <div className="video8-img-div"><p>1:31:23</p><img className='video-img' src={thumbnail8} alt="text" /></div>
                <div className="video-title"><img className='pfp' src={pfp8} alt="txt"/><p>Python for Web Development - Crash Course</p></div>
                <div className="video-info">freeCodeCamp.org <br/>12K views · 2 years ago</div>
            </div>

            </div>
        </div>
    )
}