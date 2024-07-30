import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import Card from "./Card";
import { TbCoins } from "react-icons/tb";
import { IoIosStats } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { IoChevronDown } from "react-icons/io5";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import ContactTable from "./ContactTable";

const option = () => {
  return {
    chart: {
      type: "line",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      title: {
        text: "Temperature (°C)",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
        enableMouseTracking: false,
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Reggane",
        data: [
          16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0,
          17.8,
        ],
        marker: {
          enabled: false,
        },
      },
      {
        name: "Tallinn",
        data: [
          -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5, 2.0, -0.9,
        ],
        marker: {
          enabled: false,
        },
      },
    ],
  };
};
const DashboardContainer = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getFormattedDate = (date) => {
    if (!date) return "";
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  const cardData = [
    {
      cardIcon: <TbCoins className="card-icon" />,
      cardTitle: "Total Sales",
      cardValue: "$ 23,569.00",
      cardStats: "10,5 %",
      cardStatsCondition: true,
    },
    {
      cardIcon: <IoIosStats className="card-icon" />,
      cardTitle: "Avg.sale value",
      cardValue: "$ 12,680.00",
      cardStats: "3,4 %",
      cardStatsCondition: true,
    },
    {
      cardIcon: <FaRegUser className="card-icon" />,
      cardTitle: "Total Deals",
      cardValue: "$ 1204",
      cardStats: "0,5 %",
      cardStatsCondition: false,
    },
  ];

  return (
    <>
      <div className="filter-container">
        <div className="date-picker-container-main">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            customInput={<CustomInput />}
            popperPlacement="bottom-end"
            showPopperArrow={false}
            className="hidden-date-picker"
          />
          <p className="date-value">{getFormattedDate(selectedDate)}</p>
        </div>
        <div className="filter">
          <CiFilter className="filter-icon" /> Filter
        </div>
      </div>

      <div className="card-details">
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <div className="revenue-details">
        <div className="revenue-content">
          <div className="revenue-title">
            <TbPigMoney className="revenue-icon" /> Revenue
          </div>
          <p className="revenue-option">
            All Products <IoChevronDown />
          </p>
        </div>
        <div className="revenue-content2">
          <HighchartsReact highcharts={Highcharts} options={option()} />
        </div>
      </div>
      <ContactTable />
    </>
  );
};
const CustomInput = ({ value, onClick }) => (
  <button className="date-picker-button" onClick={onClick}>
    <CiCalendar />
  </button>
);

export default DashboardContainer;
