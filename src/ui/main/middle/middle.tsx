import { css } from "@emotion/react";
import { useState } from "react";
import { Center } from "./center";
import { Menu } from "./menu";
import { MenuContainer } from "../../../common/components/menucontainer";
import { MediaQueries } from "common/Limits";

export const Middle = () => {
  const [hover, setHover] = useState(false);

  return (
    <div css={st.root}>
      <div
        css={st.whiteContainer}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <MenuContainer />

        <nav css={st.navBar}>{hover ? <Menu /> : null}</nav>
      </div>
      <Center />
     
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

  navBar: css`
    text-align: center;
    padding-top: 20px;
  `,
  menuIcon: css`
    width: 17px;
    height: 17px;
    padding-top: 5px;
    margin-right: 6px;
  `,
  whiteContainer: css`
    width: 305px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    position: absolute;

    &:hover {
      background-color: white;
    }
    &:hover .navBar {
      display: block;
    }
  `,
  root: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33%;
    @media ${MediaQueries.md} {
      width: 100%;
    }
    position: relative;
  `,
};
