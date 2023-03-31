import Video from './Video';
import * as S from './Videos.styles';

const Videos = () => {
    return (
        <div className="app">
        <S.VideosContainer>
          <Video></Video>
        </S.VideosContainer>
      </div>
    )
}

export default Videos