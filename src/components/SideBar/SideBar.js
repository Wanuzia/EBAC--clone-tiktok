import * as S from "../Videos/Videos.styles";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

const SideBar = ({ likes, messages, shares }) => {
  const [liked, setLiked] = useState(true);
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <S.SideBar>
      <S.SideBarOptions onClick={handleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </S.SideBarOptions>
      <S.SideBarOptions>
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </S.SideBarOptions>
      <S.SideBarOptions>
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </S.SideBarOptions>
    </S.SideBar>
  );
};

export default SideBar;
