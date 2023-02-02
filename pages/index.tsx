import { MobileLeft } from "@/ui/main/mobileLeft";
import { MobileRight } from "@/ui/main/mobileRight";
import { css } from "@emotion/react";
import { MediaQueries } from "common/Limits";
import { useCustomMediaQuery } from "common/useCustomMediaQuery";
import { Left } from "../src/ui/main/left";
import { Middle } from "../src/ui/main/middle/middle";
import { Right } from "../src/ui/main/right";

export default function Home() {
  const { isTablet } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      {isTablet ? <Middle /> : <Left />}
      {isTablet ? <MobileLeft /> : <Middle />}
      {isTablet ? <MobileRight /> : <Right />}

      <div></div>
    </div>
  );
}

const st = {
  root: css`
    background: #ffd12a;
    width: 100%;
    display: flex;

    @media ${MediaQueries.md} {
      flex-direction: column;
      align-items: center;
    }
  `,
};
