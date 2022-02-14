import { Table, Tag } from "antd";
import React, { useState } from "react";

const SelectAndAddTable = () => {
  const [alreadySelectedRows, setAlreadySelectedRows] = useState(["1", "3"]);

  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Student Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "Green"
          : tag.includes("B")
          ? "Blue"
          : "Red";
        return <Tag color={color}>{tag}</Tag>;
      },
    },
  ];
  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Student Name 1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Student Name 2",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "Student Name 3",
      grade: "B+",
    },
    {
      key: "4",
      id: 4,
      name: "Student Name 4",
      grade: "C",
    },
    {
      key: "5",
      id: 5,
      name: "Student Name 5",
      grade: "C+",
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowSelection={{
        type: "checkbox",
        selectedRowKeys: alreadySelectedRows,
        onChange: (keys) => {
          setAlreadySelectedRows(keys);
        },
        onSelect: (record) => {
          console.log({ record });
        },
        getCheckboxProps: (record) => ({
          //   disabled: record.grade === "C",
        }),
        selections: [
          Table.SELECTION_NONE,
          Table.SELECTION_ALL,
          Table.SELECTION_INVERT,
          {
            key: "even",
            text: "Select Even Rows",
            onSelect: (allKeys) => {
              const selectedKeys = allKeys.filter((key) => {
                return key % 2 == 0;
              });
              setAlreadySelectedRows(selectedKeys);
            },
          },
          {
            key: "excellent",
            text: "Select Students with Excellent Grads",
            onSelect: (allKeys) => {
              const selectedKeys = allKeys.filter((key) => {
                const isExcellent = dataSource.find((student) => {
                  return student.key === key && student.grade.includes("A");
                });
                return isExcellent;
              });
              setAlreadySelectedRows(selectedKeys);
            },
          },
        ],
      }}
    ></Table>
  );
};

export default SelectAndAddTable;
