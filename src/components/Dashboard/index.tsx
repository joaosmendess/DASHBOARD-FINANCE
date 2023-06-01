import React from "react";
import { Container, Content } from "./style";

import ContentHeader from "../../pages/ContentHeader";
import SelectInput from "../../pages/SelectInput";
import WalletBox from "../../pages/WalletBox";
import MenssageBox from "../../pages/MenssageBox";
import PieCharts from "../../pages/PieChart";
import HistoryBox from "../../pages/Historybox";

import { useState } from "react";
import { useMemo } from "react";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import listOfMonths from "../../utils/months";

import happy from "../../assets/happy.svg";
import sad from "../../assets/sad.svg";
import grinning from "../../assets/grinning.svg";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
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
  }, []);

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error("invalid amount! Amount must be number");
        }
      }
    });
    
    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("invalid amount! Amount must be number");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria",
        footerText: "Verifique seus gastos e tente cortar",
        icon: sad,
      };
    } else if (totalBalance === 0) {
      return {
        title: "Ufaa!",
        description: "Neste mês, você gastou exatamente o que ganhou.",
        footerText: "Tenha cuidado. No proximo mês tente poupar o seu dinheiro",
        icon: grinning,
      };
    } else totalBalance > 0;
    {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva!",
        footerText: "Continue assim. Considere investir o seu saldo.",
        icon: happy,
      };
    }
  }, [totalBalance, totalGains, totalExpenses]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;

    const percentGains = (totalGains / total) * 100;
    const percentExpenses = (totalExpenses / total) * 100;

    const data = [
      {
        name: "Saídas",
        value: totalExpenses,
        percent: Number(percentGains.toFixed(1)),
        color: "#E44C43",
      },

      {
        name: "Entradas",
        value: totalExpenses,
        percent: Number(percentExpenses.toFixed(1)),
        color: "#F7931B",
      },
    ];

    return data;
  }, [totalGains, totalExpenses]);

  const historyData = useMemo(() => {
    return listOfMonths.map((_, month) => {
      let amountEntry = 0;
      gains.forEach((gain) => {
        const date = new Date(gain.date);
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear();

        if (gainMonth === month && gainYear === yearSelected) {
          try {
            amountEntry += Number(gain.amount);
          } catch {
            throw new Error(
              "amountEntry is invalid. amountEntry must be valid number."
            );
          }
        }
      });

      let amountOutput = 0;
      expenses.forEach((expense) => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === yearSelected) {
          try {
            amountOutput += Number(expense.amount);
          } catch {
            throw new Error(
              "amountOutput is invalid. amountEntry must be valid number."
            );
          }
        }
      });

      return {
        monthNumber: month,
        month: listOfMonths[month].substr(0, 3),
        amountEntry,
        amountOutput
      };
    })
    .filter((item)=> {
         const currentMonth = new Date().getMonth();
         
         const currenteYear= new Date().getFullYear();

         return (yearSelected === currenteYear && item.monthNumber <= currentMonth) || (yearSelected < currenteYear)
    });
  }, [yearSelected]);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("invalid month value. Is accept 0 - 24.");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error("invalid year value. Is accept integer numbers.");
    }
  };

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>
        <WalletBox
          title="saldo"
          amount={totalBalance}
          footerLabel={"atualizando com base nas entradas e saídas"}
          icon="dollar"
          color="#4E41F0 "
        />
        <WalletBox
          title="entradas"
          amount={totalGains}
          footerLabel={"atualizando com base nas entradas e saídas"}
          icon="arrowUp"
          color="#F7931B "
        />
        <WalletBox
          title="saídas"
          amount={totalExpenses}
          footerLabel={"atualizando com base nas entradas e saídas"}
          icon="arrowDown"
          color="#E44C4E "
        />

        <MenssageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PieCharts data={relationExpensesVersusGains} />
        <HistoryBox data={historyData} lineColorAmountEntry="#F7931B" lineColorAmountOutput="#E44C4E" />
      </Content>
    </Container>
  );
};

export default Dashboard;
