import { css } from "@emotion/react";

export const Menu = () => {
  return (
    <ul>
      <li css={st.list}>
        <a href="">Story&Key</a>
      </li>
      <li css={st.list}>
        <a href="">Bro up</a>
      </li>
      <li css={st.list}>
        <a href="">ICT Family</a>
      </li>
      <li css={st.list}>
        <a href="">행복 로그</a>
      </li>
      <li css={st.list}>
        <a href="">Radio B</a>
      </li>
      <li css={st.list}>
        <a href="">브로인은 오늘 뭐할까?</a>
      </li>
    </ul>
  );
};


const st = {
list: css`
    line-height: 30px;
    a {
      display: block;
      color: black;
      font-weight: 600;
      &:hover {
        color: red;
      }
    }
  `,
}