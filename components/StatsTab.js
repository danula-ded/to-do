import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from 'react-native-chart-kit';

export default function StatsTab({ data, currentDate }) {
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [allTimeData, setAllTimeData] = useState([]);

  useEffect(() => {
    // Обновляйте данные при изменении данных задач
    updateChartData();
  }, [data]);

  const updateChartData = () => {
    // Логика подсчета задач за неделю, месяц и все время
    const tasksCompletedWeekly = getTasksCompletedInDuration("week");
    const tasksCompletedMonthly = getTasksCompletedInDuration("month");
    const tasksCompletedAllTime = getTasksCompletedInDuration("all");

    setWeeklyData(tasksCompletedWeekly);
    setMonthlyData(tasksCompletedMonthly);
    setAllTimeData(tasksCompletedAllTime);
  };

  const getTasksCompletedInDuration = (duration) => {
    const currentDateObj = new Date(currentDate);
    const today = currentDateObj.getDate();
    const currentMonth = currentDateObj.getMonth();
    const currentYear = currentDateObj.getFullYear();

    const filteredTasks = data.filter((item) => item.completed);

    switch (duration) {
      case "week":
        return filteredTasks.filter((item) => {
          const taskDate = new Date(item.date);
          return (
            taskDate.getFullYear() === currentYear &&
            taskDate.getMonth() === currentMonth &&
            taskDate.getDate() >= today - 7
          );
        });
      case "month":
        return filteredTasks.filter((item) => {
          const taskDate = new Date(item.date);
          return (
            taskDate.getFullYear() === currentYear &&
            taskDate.getMonth() === currentMonth
          );
        });
      case "all":
        return filteredTasks;
      default:
        return [];
    }
  };

  const renderPieChart = (data, title) => {
    return (
      <View>
        <Text style={styles.text}>{title}</Text>
        <PieChart
          data={data.map((task) => ({
            name: task.label,
            population: 1, // You may adjust this based on your data
            color: task.completed ? "green" : "red", // Use green for completed tasks, red for others
            legendFontColor: "white",
            legendFontSize: 15,
          }))}
          width={200}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderPieChart(weeklyData, "Tasks completed in the last week:")}
      {renderPieChart(monthlyData, "Tasks completed in the last month:")}
      {renderPieChart(allTimeData, "All-time tasks completed:")}
      <Text style={styles.text}>
        Total completed tasks: {data.filter((item) => item.completed).length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
  },
});
