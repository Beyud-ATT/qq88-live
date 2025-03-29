import { Button, Flex } from "antd";
import { CompoundModal } from "../../components/CompoundModal";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import { useAuth } from "../../contexts/AuthContext";
import { MdClose } from "react-icons/md";

export default function GroupButton() {
  const { isAuthenticated } = useAuth();

  return (
    !isAuthenticated && (
      <Flex className="md:gap-3 gap-2 md:flex-row flex-col">
        <CompoundModal>
          <CompoundModal.Trigger
            render={(openModal) => (
              <Button
                id="login-button"
                className="!bg-[#FFFCDF] !text-[var(--color-brand-primary)] border-[#F8E64F] font-bold rounded-full lg:!text-base md:!text-[12px] !text-[10px]"
                onClick={openModal}
              >
                Đăng nhập
              </Button>
            )}
          />
          <CompoundModal.Content
            classNames={{
              content:
                "!rounded-3xl !bg-transparent md:!bg-[url('/src/assets/pc-bg.png')] bg-[url('/src/assets/mobile-bg.png')] bg-cover bg-no-repeat bg-center",
            }}
            closeIcon={
              <MdClose className="text-2xl !text-[var(--color-brand-primary)] translate-y-2" />
            }
          >
            <LoginForm />
          </CompoundModal.Content>
        </CompoundModal>

        <CompoundModal>
          <CompoundModal.Trigger
            render={(openModal) => (
              <Button
                id="signup-button"
                variant="filled"
                className="!bg-[var(--color-brand-primary)] font-bold border-none rounded-full lg:!text-base md:!text-[12px] !text-[10px]"
                onClick={openModal}
                style={{
                  background:
                    "linear-gradient(180deg, #F8E64F 0%, #CFEA29 100%)",
                }}
              >
                Đăng ký
              </Button>
            )}
          />
          <CompoundModal.Content
            classNames={{
              content:
                "!rounded-3xl !bg-transparent md:!bg-[url('/src/assets/pc-bg.png')] bg-[url('/src/assets/mobile-bg.png')] bg-cover bg-no-repeat bg-center",
            }}
            closeIcon={
              <MdClose className="text-2xl !text-[var(--color-brand-primary)] translate-y-2" />
            }
          >
            <SignUpForm />
          </CompoundModal.Content>
        </CompoundModal>
      </Flex>
    )
  );
}
