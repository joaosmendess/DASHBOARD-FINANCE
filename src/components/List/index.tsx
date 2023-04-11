import React, { useMemo, useState, useEffect } from "react";
import { Container, Content, Filters } from "./style";
import ContentHeader from "../../pages/ContentHeader";
import SelectInput from "../../pages/SelectInput";
import HistoryfinanceCard from "../../pages/HistoryFinanceCard";
import { useParams } from "react-router-dom";

import gains from "../../repositories/gains";

import expenses from "../../repositories/expenses";

import formatCurrency from "../../utils/formatCurrency";

import formatDate from "../../utils/formatDate";

import listOfmonths from "../../utils/months";

interface IRouterParams {
  [key: string]: string | undefined;
}

interface IData {
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagcolor: string;
  id: string;
}

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);

  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const [frequencyFilterSelected, setfrequencyFilterSelected] = useState([
    "recorrente",
    "eventual",
  ]);

  const params = useParams<IRouterParams>();
  const { type } = params;

  

  const pageData = useMemo(() => {
    return type === "entry-balance"
      ? {
          title: "Entradas",
          lineColor: " #F7931B",
          data: gains,
        }
      : {
          title: "Saídas",
          lineColor: "#E44C4E",
          data: expenses,
        };
  }, [type]);

  const months = useMemo(() => {
    return listOfmonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, [pageData]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    const {data} = pageData

    data.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });
    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [data]);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(
      (item) => item === frequency
    );

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(
        (item) => item !== frequency
      );
      setfrequencyFilterSelected(filtered);
    } else {
      setfrequencyFilterSelected((prev) => [...prev, frequency]);
    }
  };

  useEffect(() => {

const {data} = pageData

    const filteredData = data.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return (
        month === monthSelected &&
        year === yearSelected &&
        frequencyFilterSelected.includes(item.frequency)
      );
    });

    const formattedData = filteredData.map((item) => {
      return {
        id: String(new Date().getTime) + item.amount,
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagcolor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });

    setData(formattedData);
  }, [data, monthSelected, yearSelected, frequencyFilterSelected]);

  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${
            frequencyFilterSelected.includes("recorrente") && "tag-actived"
          }`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </button>

        <button
          type="button"
          className={`tag-filter tag-filter-eventual  ${
            frequencyFilterSelected.includes("eventual") && "tag-actived"
          } `}
          onClick={() => handleFrequencyClick("eventual")}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.map((item) => (
          <HistoryfinanceCard
            key={item.id}
            tagColor={item.tagcolor}
            title={item.description}
            subTitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
