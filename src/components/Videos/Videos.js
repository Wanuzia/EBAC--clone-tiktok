import Video from './Video';
import * as S from './Videos.styles';
import db from '../../config/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

const Videos = () => {
const [video, setVideo] = useState([])
  const getVideos = async () => {
    const videosCollection = collection(db, 'videos')
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map(doc => doc.data());
    setVideo(videosList)
  }
  let maxHeight = window.innerHeight <= 800 ?  window.innerHeight : " "

  useEffect(() => {
    getVideos()
  }, [])
    return (
        <div className="app" style={{ maxHeight: `${maxHeight}px` }}>
        <S.VideosContainer>
          {video.map((item) => {
            return (
              <Video
                likes={item.likes}
                messages={item.messages}
                shares={item.shares}
                name={item.name}
                description={item.description}
                music={item.music}
                url={item.url}
              />
            )
          })}
        </S.VideosContainer>
      </div>
    )
}

export default Videos