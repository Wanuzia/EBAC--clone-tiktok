import * as S from "../Videos/Videos.styles";
import locale from "../../utils/locale.json";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const VideoFooter = ({ name, description, music }) => {
  return (
    <S.Footer>
      <div>
        <h3>@{name}</h3>
        <p>{description}</p>
        <S.VideoFooterMusicBox>
          <MusicNoteIcon />
          <S.MusicFooterTitle>
            <p>{music}</p>
          </S.MusicFooterTitle>
        </S.VideoFooterMusicBox>
      </div>
      <S.RecordFooter alt={locale.vinil.alt} src={locale.vinil.link} />
    </S.Footer>
  );
};

export default VideoFooter;
