import * as S from "../Videos/Videos.styles";
import locale from "../../utils/locale.json";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const VideoFooter = () => {
  return (
    <S.Footer className="video-footer">
      <div>
        <h3>@wbcrafts</h3>
        <p>Descrição do vídeo</p>
        <S.VideoFooterMusicBox>
          <MusicNoteIcon className="videoFooter__icon"/>
          <S.MusicFooterTitle>
            <p>Título da música</p>
          </S.MusicFooterTitle>
        </S.VideoFooterMusicBox>
      </div>
      <S.RecordFooter alt={locale.vinil.alt} src={locale.vinil.link} />
    </S.Footer>
  );
};

export default VideoFooter;
