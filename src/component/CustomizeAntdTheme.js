import React from "react";
import { Button, DatePicker, Input, Progress, Slider, Space, Spin } from "antd";
const CustomizeAntdTheme = () => {
  return (
    <Space direction="vertical">
      <Button type="primary">Button</Button>
      <Input placeholder="Type here..."></Input>
      <Progress percent={50} type="circle" />
      <Spin spinning />
      <DatePicker />
      <Slider />
    </Space>
  );
};

export default CustomizeAntdTheme;
