import React from "react";
import Icon, {
  AppleFilled,
  BankTwoTone,
  LoadingOutlined,
  LogoutOutlined,
  PieChartFilled,
} from "@ant-design/icons";
import { Button, Divider } from "antd";

const IconAntd = () => {
  const HeartIcon = (props) => {
    return (
      <Icon
        component={() => {
          return (
            <svg
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
            </svg>
          );
        }}
        {...props}
      />
    );
  };
  return (
    <div>
      <PieChartFilled style={{ color: "purple", fontSize: 100 }} />;
      <AppleFilled style={{ color: "green", fontSize: 100 }} />
      <LoadingOutlined spin style={{ color: "red", fontSize: 100 }} />
      <PieChartFilled rotate={45} style={{ color: "orange", fontSize: 100 }} />
      <BankTwoTone twoToneColor="green" style={{ fontSize: 100 }} />
      <Divider />
      <HeartIcon style={{ color: "red", fontSize: 200 }} />
      <Divider />
      <Button icon={<LogoutOutlined style={{ color: "red", fontSize: 14 }} />}>
        Button with Custom Icon
      </Button>
      <Divider />
      <p style={{ color: "black", fontSize: 30 }}>
        I <HeartIcon style={{ color: "hotPink", fontSize: 30 }} /> AntDesign
      </p>
    </div>
  );
};

export default IconAntd;
