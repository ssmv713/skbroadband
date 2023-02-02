import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
export const Right = () => {
  const router = useRouter();
  return (
    <div css={st.root}>
      <div css={st.round1} onClick={() => router.push("/slide")}>
        <video autoPlay muted loop css={st.roundImg} src="puppy.mp4" />
        <div css={st.greenbg}>
          <Typography css={st.textTop}>행복로그</Typography>
          <Typography css={st.textBtm}>반려동물 탐구생활</Typography>
        </div>
      </div>
      <div css={st.round1}>
        <img css={st.roundImg} src="ladies.gif" alt="" />
        <div css={st.bg}>
          <Typography css={st.textTop}>Radio B</Typography>
          <Typography css={st.textBtm}>
            너도? 나도! 동학개미라 웃픈 썰 푼다
          </Typography>
        </div>
      </div>
      <div css={st.round1}>
        <img css={st.roundImg} src="piano.jpg" alt="" />
        <div css={st.greenbg}>
          <Typography css={st.textTop}>브로인은 오늘 뭐할까?</Typography>
          <Typography css={st.textBtm}>B만의 콘텐츠 발굴기</Typography>
        </div>
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 33.33%;
    margin-top: -100px;
  `,
  textTop: css`
    font-size: 26px;
    color: white;
  `,
  textBtm: css`
    font-size: 15px;
    color: white;
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
  round1: css`
    position: relative;
    margin-top: 10px;
  `,
  roundImg: css`
    width: 367px;
    height: 367px;
    border-radius: 70%;
  `,
};
