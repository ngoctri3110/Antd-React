import React, { useState } from "react";
import { Button, Input, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const AddSearch = () => {
  const [dataSource, setDataSource] = useState([
    {
      name: "John",
      age: 32,
      address: "New York",
    },
    {
      name: "Jim",
      age: 33,
      address: "Sydney",
    },
    {
      name: "David",
      age: 40,
      address: "Japan",
    },
    {
      name: "James",
      age: 32,
      address: "New York",
    },
    {
      name: "Sam",
      age: 40,
      address: "Sydney",
    },
  ]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        clearFilters,
        confirm,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        clearFilters,
        confirm,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.age == value;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        clearFilters,
        confirm,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.address.toLowerCase().includes(value.toLowerCase());
      },
    },
  ];

  return (
    <div>
      <Table
        style={{ display: "flex", flex: 1, margin: 10 }}
        columns={columns}
        dataSource={dataSource}
      ></Table>
    </div>
  );
};

export default AddSearch;
