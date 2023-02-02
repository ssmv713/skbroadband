import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
export const MobileRight = () => {
  const router = useRouter();
  return (
    <div css={st.root}>
      <div css={st.round1} onClick={() => router.push("/slide")}>
        <video autoPlay muted loop css={st.roundImg} src="puppy.mp4" />
        <div css={st.textContainer}>
          <Typography css={st.textTopGreen}>행복로그</Typography>
          <Typography css={st.textBtm}>반려동물 탐구생활</Typography>
        </div>
      </div>
      <div css={st.round1}>
        <img css={st.roundImg} src="ladies.gif" alt="" />
        <div css={st.textContainer}>
          <Typography css={st.textTopPink}>Radio B</Typography>
          <Typography css={st.textBtm}>
            너도? 나도! 동학개미라 웃픈 썰 푼다
          </Typography>
        </div>
      </div>
      <div css={st.round1}>
        <img css={st.roundImg} src="piano.jpg" alt="" />
        <div css={st.textContainer}>
          <Typography css={st.textTopGreen}>브로인은 오늘 뭐할까?</Typography>
          <Typography css={st.textBtm}>B만의 콘텐츠 발굴기</Typography>
        </div>
      </div>
      <div css={st.iconContainer}>
        <img css={st.logo} src="sk-logo.svg" alt="" />
        <img css={st.icon} src="facebook.svg" alt="" />
        <img css={st.twittericon} src="twitter.svg" alt="" />
        <img css={st.icon} src="kakao.svg" alt="" />
        <img css={st.twittericon} src="blog.svg" alt="" />
      </div>
    </div>
  );
};

const st = {
  iconContainer: css`
    display: flex;
    gap: 12px;
    align-items: flex-end;
    margin: 100px 0 300px 0;
  `,
  twittericon: css`
    width: 24px;
  `,
  icon: css`
    width: 12px;
  `,
  logo: css`
    width: 100px;
  `,
  textTopGreen: css`
    font-size: 26px;
    color: #30a886;
    font-weight: 500;
    margin-top: 10px;
  `,
  textTopPink: css`
    font-size: 26px;
    color: #fc7793;
    font-weight: 500;
    margin-top: 10px;
  `,
  textContainer: css`
    text-align: center;
  `,
  root: css`
    margin-left: 0;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  `,
  textTop: css`
    font-size: 26px;
    color: white;
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
};
