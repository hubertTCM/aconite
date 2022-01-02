import React from "react";
import { Table } from "antd";
import { ColumnType } from "antd/lib/table";
import { useTranslation } from "react-i18next";

export type GuessValue = {
  value: number;
  type: "tooSmall" | "tooLarge";
};

export const History = (props: { values: GuessValue[] }) => {
  const { t } = useTranslation();
  const columns: ColumnType<GuessValue & { key: number }>[] = [
    {
      title: t("guessNumber.lowGuesses", { ns: "common" }),
      key: "tooSmall",
      render: ({ type, value }) => type === "tooSmall" && value,
    },
    {
      title: t("guessNumber.highGuesses", { ns: "common" }),
      key: "tooLarge",
      render: ({ type, value }) => type === "tooLarge" && value,
    },
  ];
  const { values } = props;
  const dataSource = values.map((item) => {
    return { ...item, key: item.value };
  });
  return dataSource.length ? (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 10 }}
    ></Table>
  ) : null;
};
