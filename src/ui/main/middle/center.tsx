import { InputContainer } from "@/common/components/inputContainer";
import { css } from "@emotion/react";

export const Center = () => {
  return (
    <div css={st.root}>
      <div>
        <img src="logo.png" alt="" />
      </div>
      <div css={st.vol}>
        Sk broadband Webzine <br /> 2011 may vol.67
      </div>
      <div css={st.text}>
        집에 머무는 시간이 늘어나고, 홈술이 하나의 트렌드가
        <br />
        되었습니다. 이번호에서는 관련 유튜브를 소개하며,
        <br />
        증여에 대한 금융지식도 준비했습니다. 배움은 새로운
        <br />
        정보와의 조우이며, 새로운 삶을 만듭니다.
      </div>
      <InputContainer />
    </div>
  );
};
const st = {
  iconContainer: css`
    display: flex;
    gap: 12px;
    align-items: flex-end;
    margin-top: 200px;
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

  text: css`
    line-height: 24px;
    font-weight: 600;
    font-size: 15px;
    margin-top: 10px;
  `,
  vol: css`
    font-size: 18px;
    font-weight: 600;
    margin-top: 30px;
  `,
  root: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    text-align: center;
  `,
};
