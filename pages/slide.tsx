import { InputContainer } from "@/common/components/inputContainer";
import { MenuContainer } from "@/common/components/menucontainer";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const SlidePage = () => {
  return (
    <div css={st.root}>
      <div css={st.headerContainer}>
        <MenuContainer />
        <img src="logo.png" alt="" />
        <p css={st.dates}>2021 May Vol 67</p>
        <InputContainer />
      </div>
      <Swiper
        // autoplay={{
        //   disableOnInteraction: false,
        // }}
        autoHeight={true}
        css={st.swiper}
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img css={st.slideImg} src="/slidepage/0.gif" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img css={st.slideImg} src="/slidepage/1.gif" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay controls css={st.slideImg} src="/slidepage/2.mp4" />
        </SwiperSlide>
        <SwiperSlide>
          <img css={st.slideImg} src="/slidepage/3.gif" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay controls css={st.slideImg} src="/slidepage/4.mp4" />
        </SwiperSlide>
        <SwiperSlide>
          <img css={st.slideImg} src="/slidepage/5.gif" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay controls css={st.slideImg} src="/slidepage/6.mp4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const st = {
  swiper: css`
    .swiper-pagination-bullet-active {
      background-color: black !important;
    }
    .swiper-pagination-bullet {
      background-color: white;
      opacity: 1;
      border: 1px solid #000;
      width: 10px;
      height: 10px;
      margin: 5px;
    }
    .swiper-wrapper {
      max-height: 800px;
      /* overflow: hidden; */
    }
    .swiper-pagination-bullet {
      display: block;
      margin: 5px !important;
    }

    .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
      top: 43%;
      left: 94%;
    }
  `,
  slideImg: css`
    width: 80%;
    margin-left: 100px;
    margin-top: 50px;
  `,
  root: css``,
  dates: css`
    position: absolute;
    right: 242px;
    top: 46px;
    font-weight: 600;
    @media (width: 1024px) {
      display: none;
    }
  `,
  headerContainer: css`
    display: flex;
    width: 1024px;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    position: relative;
    @media (width: 1024px) {
      width: 90%;
    }
  `,
};

export default SlidePage;
