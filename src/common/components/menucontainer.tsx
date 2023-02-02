import { css } from "@emotion/react";

export const MenuContainer = () => {
  return (
    <div css={st.menuContainer}>
      <div>
        <img src="menu.svg" css={st.menuIcon} alt="" />
        <span>MENU</span>
      </div>
      <div>
        <img src="arrowDown.svg" css={st.menuIcon} alt="" />
        <span>지난 호</span>
      </div>
    </div>
  );
};

const st = {
  menuContainer: css`
    padding: 30px 0 10px 0;
    display: flex;
    gap: 20px;
    font-weight: 600;
  
  `,
  menuIcon: css`
    width: 17px;
    height: 17px;
    padding-top: 5px;
    margin-right: 6px;
  `,
};