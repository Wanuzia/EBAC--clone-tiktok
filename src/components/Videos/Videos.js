import Video from './Video';
import * as S from './Videos.styles';

const Videos = () => {
    return (
        <div className="app">
        <S.VideosContainer>
          <Video
            likes={300}
            messages={200}
            shares={100}
            name="WB Crafts"
            description="Brecker, o goleiro."
            music="Música épica"
            url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
          />
        </S.VideosContainer>
      </div>
    )
}

export default Videos