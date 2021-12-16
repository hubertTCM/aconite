import React from "react";
import { Table } from "antd";
import { ColumnType } from "antd/lib/table";

export type GuessValue = {
  value: number;
  type: "tooSmall" | "tooLarge";
};

export const History = (props: { values: GuessValue[] }) => {
  const columns: ColumnType<GuessValue & { key: number }>[] = [
    {
      title: "Low Guesses",
      key: "tooSmall",
      render: ({ type, value }) => type === "tooSmall" && value,
    },
    {
      title: "High Guesses",
      key: "tooLarge",
      render: ({ type, value }) => type === "tooLarge" && value,
    },
  ];
  const { values } = props;
  const dataSource = values.map((item) => {
    return { ...item, key: item.value };
  });
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 10 }}
    ></Table>
  );
};
