import React, { useRef, useState } from 'react'
import VideoFooter from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import * as S from './Videos.styles';
// import locale from '../../utils/locale.json'

const Video = ({likes, messages, shares, name, description, music, url}) => {
    const [play, setPlay] = useState(false)
    const videoRef = useRef();
    // const video = locale.videos.map((item) => item && item.link)
    // console.log(video)

    const handlePlay = () => {
        if (!play) {
            videoRef.current.play();
            setPlay(true)
        } else {
            videoRef.current.pause();
            setPlay(false)
        }
    }

    return (
    
  
    < S.VideoBox >
        <S.Video
            loop
            ref={videoRef}
            onClick={handlePlay}
            src={url}
            ></S.Video>
            <SideBar likes={likes} messages={messages} shares={shares} />
            <VideoFooter name={name} description={description} music={music} />
            
    </S.VideoBox >

 )
}

export default Video
