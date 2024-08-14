"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { cspmData } from "@/lib/data"; // Import your data
import AddWidgets from "./AddWidgets";

ChartJS.register(ArcElement, Tooltip, Legend);

const CSPM_Dashboard = () => {
  const widgets = cspmData.categories[0].widgets; // Get all widgets in the category

  return (
    <div className="mt-4">
      <div>
        <h1 className="text-black font-semibold">
          {cspmData.categories[0].name}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-2">
        {widgets.map((widgetData, widgetIndex) => {
          // Prepare data for the Doughnut chart
          const data = {
            labels: widgetData.data,
            datasets: [
              {
                label: widgetData.name,
                data: widgetData.count,
                backgroundColor: widgetData.bgColor,
                borderWidth: 1,
              },
            ],
          };

          const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                enabled: true,
              },
              legend: {
                display: false, 
              },
            },
            cutout: "70%", // Cutout percentage to make space for the center text
          };

          return (
            <div
              key={widgetIndex}
              className="flex flex-col h-60 border-2 bg-white rounded-lg p-4"
            >
              {/* Widget Name */}
              <h1 className="text-black font-semibold text-left mb-4">
                {widgetData.name}
              </h1>

              <div className="flex ">
                {/* Left Side: Doughnut Chart */}
                <div className="w-1/2 relative flex justify-center items-center">
                  <Doughnut data={data} options={options} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-sm">
                    <span>{widgetData.totalCount}</span>
                    <span>Total</span>
                  </div>
                </div>

                {/* Right Side: Chart Properties */}
                <div className="w-1/2 flex flex-col justify-center ml-4 text-sm">
                  {widgetData.data.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <div
                        className={`w-3 h-3 rounded-sm`}
                        style={{ backgroundColor: widgetData.bgColor[index] }}
                      ></div>
                      <span>
                        {item} ({widgetData.count[index]})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex h-60  flex-col justify-center">
          <AddWidgets />
        </div>
      </div>
    </div>
  );
};

export default CSPM_Dashboard;
