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
scrollbar-width: none;
`
export const VideoBox = styled.div`
background-color: beige;
height: 100%;
width: 100%;
border-radius: ${pxToRem(20)};
`

export const Video = styled.video`

`
