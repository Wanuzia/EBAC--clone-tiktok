import * as S from "../Videos/Videos.styles";
import locale from '../../utils/locale.json'

const VideoFooter = () => {
  return (
    <S.Footer className="video-footer">
      <div>
        <h3>@wbcrafts</h3>
        <p>Descrição do vídeo</p>
        <S.VideoFooterMusicBox>
          <p>Ícone</p>
          <p>Título da música</p>
        </S.VideoFooterMusicBox>
      </div>
      <S.RecordFooter alt={locale.vinil.alt} src={locale.vinil.link} />
    </S.Footer>
  );
};

export default VideoFooter;
