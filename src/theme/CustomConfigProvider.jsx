import { App, ConfigProvider } from "antd";

export default function CustomConfigProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "var(--text-color)",
          colorPrimary: "var(--color-brand-primary)",
        },
        components: {
          Layout: {
            headerBg: "var(--background-color)",
            headerPadding: 0,
            headerHeight: "auto",
            bodyBg: "var(--background-color)",
            footerBg: "var(--background-color)",
          },
          Menu: {
            itemBg: "var(--background-color)",
            itemColor: "var(--text-color)",
            itemHoverColor: "white",
            itemSelectedColor: "white",
            itemSelectedBg: "var(--color-brand-primary-lighter)",
            itemHoverBg: "var(--color-brand-primary-lighter)",
            horizontalItemHoverColor: "white",
            horizontalItemSelectedColor: "white",
            horizontalLineHeight: "40px !important",
            groupTitleColor: "var(--text-color)",
          },
          Table: {
            headerBg: "var(--color-brand-primary)",
            borderColor: "white",
            rowHoverBg: "transparent",
            // headerBorderRadius: 0,
            headerColor: "white",
          },
          Tabs: {
            cardGutter: 0,
          },
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
}
