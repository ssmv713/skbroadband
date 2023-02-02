import { css } from "@emotion/react";

export const InputContainer = () => {
  return (
    <div css={st.inputContainer}>
      <input css={st.input} type="text" />
      <img css={st.search} src="glassIcon.svg" alt="" />
    </div>
  );
};

const st = {
  inputContainer: css`
    border-bottom: solid 1px #000;
    margin-top: 40px;
  `,
  input: css`
    background: transparent;
    border: none;
    height: 25px;
    outline: none;
    font-size: 20px;
    width: 200px;
  `,
  search: css`
    width: 27px;
    height: 27px;
    padding-top: 5px;
  `,
};
