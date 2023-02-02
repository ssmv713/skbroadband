import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { MediaQueries } from "common/Limits";
export const Left = () => {
  return (
    <div css={st.root}>
      <div css={st.round1}>
        <img css={st.roundImg} src="flower.jpg" alt="" />
        <div css={st.bg}>
          <Typography css={st.textTop}>Story & Key</Typography>
          <Typography css={st.textBtm}>가정의 달,건강한 밥상 레시피</Typography>
        </div>
      </div>
      <div css={st.round1}>
        <img css={st.roundImg} src="spaceShip.gif" alt="" />
        <div css={st.greenbg}>
          <Typography css={st.textTop}>Story & Key</Typography>
          <Typography css={st.textBtm}>가정의 달,건강한 밥상 레시피</Typography>
        </div>
      </div>
      <div css={st.round1}>
        <img css={st.roundImg} src="VRfam.gif" alt="" />
        <div css={st.bg}>
          <Typography css={st.textTop}>ICT Family</Typography>
          <Typography css={st.textBtm}>잼키즈,오감으로 배운다</Typography>
        </div>
      </div>
    </div>
  );
};

const st = {
  textTop: css`
    font-size: 26px;
    color: white;
  `,
  textBtm: css`
    font-size: 15px;
    color: white;
  `,
  bg: css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 367px;
    height: 367px;
    background-color: pink;
    border-radius: 70%;
    opacity: 0;
    &:hover {
      background-color: #f90257a6;
      opacity: 1;
    }
  `,
  greenbg: css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 367px;
    height: 367px;
    background-color: pink;
    border-radius: 70%;
    opacity: 0;
    &:hover {
      background-color: #007450bf;
      opacity: 1;
    }
  `,
  round1: css`
    position: relative;
    margin-top: 10px;
  `,
  roundImg: css`
    width: 367px;
    height: 367px;
    border-radius: 70%;
  `,
  root: css`
    width: 33.33%;
    margin-left: 100px;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
