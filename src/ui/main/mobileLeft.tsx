import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import { MediaQueries } from "common/Limits";
export const MobileLeft = () => {
  return (
    <div css={st.root}>
      <div css={st.round1}>
        <img css={st.roundImg} src="flower.jpg" alt="" />
        <div css={st.textContainer}>
          <Typography css={st.textTopPink}>Story & Key</Typography>
          <Typography css={st.textBtm}>가정의 달,건강한 밥상 레시피</Typography>
        </div>
      </div>
      <div css={st.round1}>
        <img css={st.roundImg} src="spaceShip.gif" alt="" />
        <div css={st.textContainer}>
          <Typography css={st.textTopGreen}>Story & Key</Typography>
          <Typography css={st.textBtm}>가정의 달,건강한 밥상 레시피</Typography>
        </div>
      </div>
      <div css={st.round1}>
        <img css={st.roundImg} src="VRfam.gif" alt="" />
        <div css={st.textContainer}>
          <Typography css={st.textTopPink}>ICT Family</Typography>
          <Typography css={st.textBtm}>잼키즈,오감으로 배운다</Typography>
        </div>
      </div>
    </div>
  );
};

const st = {
  textContainer: css`
    text-align: center;
  `,
  textTopPink: css`
    font-size: 26px;
    color: #fc7793;
    font-weight: 500;
    margin-top: 10px;
  `,
  textTopGreen: css`
    font-size: 26px;
    color: #30a886;
    font-weight: 500;
    margin-top: 10px;
  `,
  textBtm: css`
    font-size: 15px;
    color: #000;
    font-weight: 700;
    margin-bottom: 10px;
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
    margin-left: 0;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
  `,
};
