import { Flex, Image } from "antd";
import { useLayoutContext } from "../Index";
import { Link } from "react-router";

import {
  Footer1,
  Footer3,
  Footer4,
  Footer5,
  Footer6,
  Footer7,
  Footer8,
  Footer9,
  Footer10,
  Footer11,
  Footer12,
  Footer2,
} from "../../utils/svg";

import AFA from "../../assets/afa.png";
import CVF from "../../assets/cvf.png";
import OKVIP from "../../assets/okvip.png";

export default function BaseFooter() {
  const { Footer } = useLayoutContext();

  return (
    <Footer className="lg:block hidden bg-[url('./src/assets/footer-bg.webp')] bg-container bg-no-repeat bg-center bg-opacity-10 mt-20">
      <Flex
        vertical
        justify="center"
        align="center"
        className="max-w-screen-xl mx-auto text-[var(--text-color)]"
        gap={26}
      >
        <div className="w-full">
          <div className="text-4xl font-bold capitalize">
            <p>đối tác chính thức</p>
            <p>Năm 2023 - 2025</p>
          </div>
        </div>

        <Flex justify="space-between" align="center" className="w-full">
          <div className="flex gap-2 justify-center items-center">
            <Image src={AFA} alt="afa" preview={false} loading="lazy" />
            <p className="text-2xl font-[400]">Argentina AFA & OKVIP</p>
          </div>
          <div className="bg-[var(--text-color)] w-[2px] h-[79px]"></div>
          <div className="flex  justify-between items-center">
            <Image src={OKVIP} alt="okvip" preview={false} loading="lazy" />
          </div>
          <div className="bg-[var(--text-color)] w-[2px] h-[79px]"></div>
          <div className="flex gap-2 justify-center items-center">
            <Image src={CVF} alt="cfv" preview={false} loading="lazy" />
            <p className="text-2xl font-[400]">Villarreal & OKVIP</p>
          </div>
        </Flex>

        <Flex gap={4} align="center" justify="space-between" className="w-full">
          <Footer1 />
          <Footer2 />
          <Footer3 />
          <Footer4 />
          <Footer5 />
          <Footer6 />
          <Footer7 />
          <Footer8 />
          <Footer9 />
          <Footer10 />
          <Footer11 />
          <Footer12 />
        </Flex>

        <Flex gap={4} align="center" justify="space-between" className="w-full">
          <Link to="/rule" className="xl:text-[16px] text-[12px]">
            Điều Khoản Và Điều Kiện
          </Link>
          <span>|</span>
          <Link to="#" className="xl:text-[16px] text-[12px]">
            Giới Thiệu Về QQ88
          </Link>
          <span>|</span>
          <Link to="#" className="xl:text-[16px] text-[12px]">
            Chơi Có Trách Nhiệm
          </Link>
          <span>|</span>
          <Link to="#" className="xl:text-[16px] text-[12px]">
            Miễn Trách Nhiệm
          </Link>
          <span>|</span>
          <Link to="#" className="xl:text-[16px] text-[12px]">
            Quyền Riêng Tư Tại QQ88
          </Link>
          <span>|</span>
          <Link to="#" className="xl:text-[16px] text-[12px]">
            Những Câu Hỏi Thường Gặp
          </Link>
        </Flex>
        <div className="text-center xl:!text-lg !text-sm">
          Copyright © Trang chủ chính thức giải trí QQ88 Reserved
        </div>
      </Flex>
    </Footer>
  );
}
