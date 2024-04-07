import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";
import { addDays, format } from "date-fns";

export default function StatsTab({ data, currentDate }) {
  const [dailyData, setDailyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    updateChartData();
  }, [data]);

  const updateChartData = () => {
    const tasksCompletedDaily = getTasksCompletedInDuration("daily");
    const tasksCompletedMonthly = getTasksCompletedInDuration("monthly");

    setDailyData(tasksCompletedDaily);
    setMonthlyData(tasksCompletedMonthly);
  };

  const getTasksCompletedInDuration = (duration) => {
    const currentDateObj = new Date(currentDate);
    const currentYear = currentDateObj.getFullYear();
    const currentMonth = currentDateObj.getMonth();
    const totalDaysInMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();
    const taskData = [];

    switch (duration) {
      case "daily":
        for (let i = 1; i <= totalDaysInMonth; i++) {
          const completedTasks = data.filter((item) => {
            const taskDate = new Date(item.date);
            return (
              taskDate.getFullYear() === currentYear &&
              taskDate.getMonth() === currentMonth &&
              taskDate.getDate() === i &&
              item.completed
            );
          });
          taskData.push(completedTasks.length);
        }
        return taskData;
      case "monthly":
        const completedTasks = data.filter((item) => {
          const taskDate = new Date(item.date);
          return (
            taskDate.getFullYear() === currentYear &&
            taskDate.getMonth() === currentMonth &&
            item.completed
          );
        });
        return [completedTasks.length, data.length - completedTasks.length];
      default:
        return [];
    }
  };

  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    format(addDays(currentDate, -i), "d")
  ).reverse(); // Получаем массив с днями недели, начиная с текущего дня

  console.log(daysOfWeek);

  return (
    <ScrollView style={styles.container}>
      {/*

      <View>
        <Text style={styles.text}>Выполненые задачи за день:</Text>
        <BarChart
          data={{
            labels: daysOfWeek,
            datasets: [{ data: dailyData }],
          }}
          width={350}
          height={200}
          yAxisSuffix=""
          fromZero
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          style={styles.chart}
        />
      </View>

      */}
      
      <View>
        <Text style={styles.text}>
          Количество завершенные задач, на все задачи за месяц:
        </Text>
        <PieChart
          data={[
            {
              name: "Завершенные",
              population: monthlyData[0],
              color: "#2ecc71",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
            {
              name: "В процессе",
              population: monthlyData[1],
              color: "#ff6347",
              legendFontColor: "#7F7F7F",
              legendFontSize: 15,
            },
          ]}
          width={300}
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForLabels: {
              fontSize: 12,
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
