import { Flex, Image } from "antd";
import { useLayoutContext } from "../Index";
import Logo from "../../components/Logo";
import TopNav from "./PC/TopNav";
import GroupButton from "./GroupButton";
import Marquee from "react-fast-marquee";
import Speaker from "../../assets/speaker.png";
import BurgerTopNav from "./Mobile/BurgerTopNav";
import { Link } from "react-router";
import DeviceProvider from "../../contexts/ResponsiveContext";
import UserActionDrawer from "./Mobile/UserActionDrawer";
import UserActionDropdown from "./PC/UserActionDropdown";

export default function BaseHeader({ ...rest }) {
  const { Header } = useLayoutContext();
  return (
    <Header {...rest}>
      <Flex
        justify="space-between"
        align="center"
        className="max-w-screen-xl mx-auto py-2 xl:pr-0 xl:pl-0 lg:pr-8 lg:pl-6 pr-4 pl-2"
      >
        <DeviceProvider.MOBILE>
          <BurgerTopNav />
        </DeviceProvider.MOBILE>
        <Link to="/">
          <Logo />
        </Link>

        <DeviceProvider.PC>
          <TopNav />
          <UserActionDropdown />
        </DeviceProvider.PC>

        <DeviceProvider.TABLET>
          <TopNav />
          <UserActionDrawer />
        </DeviceProvider.TABLET>

        <GroupButton />
        <DeviceProvider.MOBILE>
          <UserActionDrawer />
        </DeviceProvider.MOBILE>
      </Flex>

      <div className="bg-[var(--color-brand-primary-lighter)]">
        <Flex
          className="h-[42px] max-w-screen-xl md:mx-auto md:w-full w-[95vw]"
          justify="center"
          align="center"
        >
          <Flex className="h-full" align="center">
            <Link to="" target="_blank">
              <Flex align="center" justify="center" className="md:px-4 px-2">
                <Image
                  src={Speaker}
                  alt="speaker icon"
                  loading="lazy"
                  preview={false}
                  width={24}
                  height={24}
                  className="-rotate-12"
                />
              </Flex>
            </Link>
          </Flex>
          <Marquee className="text-black overflow-hidden">
            <span>
              Link tổng chính thức của chúng tôi là: https://www.qq8827.com/ (
              PC ), 52999.com ( Mobile ) ✅ Hotline: 0908667888 ✅ Gmail:
              admin@QQ88.com 💥Tham gia ngay tặng liền tay OTO, Xe máy 💥Tặng
              IPHONE16 PROMAX thứ 6 hàng tuần 💥Nạp đầu tặng 100% Nổ hũ bắn cá
              💥 Hội viên VIP đầu tư một lần Lãi suất trọn đời 💥 Xem live thứ 6
              21h-23h nhận ngay IPHONE 16 PROMAX hàng tuần💥Các khuyến lớn sẽ
              được QQ88 phát đều đặn hàng tháng vào các ngày 08-18-28 hàng
              tháng! 🧧
            </span>
          </Marquee>
        </Flex>
      </div>
    </Header>
  );
}
