import { pxToRem } from "../../utils/utils";
import styled from "styled-components";
import media from "../../utils/media";

export const VideosContainer = styled.div`
  height: 100vh;
  max-height: ${pxToRem(800)};
  width: 100%;
  max-width: ${pxToRem(500)};
  border: 1px solid black;
  border-radius: ${pxToRem(20)};
  overflow: scroll;
  scroll-snap-type: y mandatory;
  position: relative;

  @media only screen and (min-width: ${media.phone}){
    width: 80%;
  }
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
  bottom: 22%;
  left: ${pxToRem(30)};
  @media only screen and (min-width: ${media.phone}){
    bottom: 20%;
  }
`;
export const VideoFooterMusicBox = styled.div`
  display: flex;
`;
export const MusicFooterTitle = styled.div`
  width: 78%;
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
  @media only screen and (min-width: ${media.mobile}){
    width: 80%;
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
top: 46%;
right: ${pxToRem(10)};
color: white;
@media only screen and (min-width: ${media.mobile}){
    top: 50%;
  }
`
export const SideBarOptions = styled.div`
padding: ${pxToRem(5)};
text-align: center;
`
