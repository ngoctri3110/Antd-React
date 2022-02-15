import React from "react";
import { Button, Spin, Upload } from "antd";

const FileUpload = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Upload.Dragger
        multiple
        listType="picture"
        action={"http://localhost:3000/"}
        showUploadList={{ showRemoveIcon: true }}
        accept=".png,.jpeg,.doc"
        beforeUpload={(file) => {
          console.log({ file });
          return false;
        }}
        defaultFileList={[
          {
            uid: "abc",
            name: "exising_file.png",
            status: "uploading",
            percent: 50,
            url: "https://www.google.com",
          },
        ]}
        iconRender={() => {
          return <Spin></Spin>;
        }}
        // itemRender={(exisingComp, file) => {
        //   return <p>{file.name}</p>;
        // }}
        progress={{
          strokeWidth: 3,
          strokeColor: {
            "0%": "#f0f",
            "100%": "#ff0",
          },
          style: { top: 12 },
        }}
      >
        Drag files here OR
        <br />
        <Button>Click Upload</Button>
      </Upload.Dragger>
    </div>
  );
};

export default FileUpload;
