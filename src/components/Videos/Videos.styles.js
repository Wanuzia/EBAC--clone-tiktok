import { pxToRem } from "../../utils/utils";
import styled from "styled-components";

export const VideosContainer = styled.div`
  height: 100vh;
  max-height: ${pxToRem(800)};
  width: 80%;
  max-width: ${pxToRem(500)};
  border: 1px solid black;
  border-radius: ${pxToRem(20)};
  overflow: scroll;
  scroll-snap-type: y mandatory;
  position: relative;
`;
export const VideoBox = styled.div`
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  position: relative;
  border-radius: ${pxToRem(20)};
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;
export const Footer = styled.div`
  color: white;
  position: relative;
  bottom: 20%;
  left: ${pxToRem(30)};
`;
export const VideoFooterMusicBox = styled.div`
  display: flex;
`;
export const MusicFooterTitle = styled.div`
  width: 80%;
  overflow-x: hidden;
  p {
    animation: moveTheText 5s infinite linear;
    @keyframes moveTheText {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`;

export const RecordFooter = styled.img`
  position: absolute;
  bottom: ${pxToRem(5)};
  right: ${pxToRem(40)};
  height: ${pxToRem(50)};
  filter: invert(1);
  animation: spinTheRecord 2s infinite linear;

  @keyframes spinTheRecord {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SideBar = styled.div`
position: absolute;
top: 50%;
right: ${pxToRem(10)};
color: white;
`
export const SideBarOptions = styled.div`
padding: ${pxToRem(5)};
text-align: center;
`