import React, { useRef, useState } from 'react'
import VideoFooter from '../Footer/Footer';
import * as S from './Videos.styles';
// import locale from '../../utils/locale.json'

const Video = () => {
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
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
            ></S.Video>
            <VideoFooter/>
            
    </S.VideoBox >

 )
}

export default Video
