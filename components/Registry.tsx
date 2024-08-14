"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { registryscanData } from "@/lib/data"; 
import AddWidgets from "./AddWidgets";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Registry = () => {
  const widgets = registryscanData.categories[0].widgets;

  return (
    <div className="mt-4">
      <div>
        <h1 className="text-black font-semibold">
          {registryscanData.categories[0].name}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-2">
        {widgets.map((widgetData, widgetIndex) => {
          const labels = widgetData.data;
          const counts = widgetData.count.map(Number); 

          // Prepare data for the single horizontal Bar chart
          const data = {
            labels: [''], // Single label for the entire bar
            datasets: labels.map((label, index) => ({
              label: `${label} (${counts[index]})`,
              data: [counts[index]],
              backgroundColor: widgetData.bgColor[index],
              
            })),
          };

          const options = {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y' as const, 
            scales: {
              x: {
                display: false,
                stacked: true, 
                beginAtZero: true,
              },
              y: {
                stacked: true, 
                display: false, 
              },
            },
            plugins: {
              tooltip: {
                enabled: false,
              },
              legend: {
                display: false, 
              },
            },
          };

          return (
            <div
              key={widgetIndex}
              className="flex flex-col h-60 border-2 rounded-xl bg-white p-4"
            >
              {/* Widget Name */}
              <h1 className="text-black font-semibold text-left mb-3">
              {widgetData.name}
              </h1>

              {/* Single Horizontal Bar Chart */}
              <p><span className="text-black font-semibold">{widgetData.totalCount} </span><span className="text-black text-xs"> {widgetData.subtitle}</span></p>
              <div className="flex ">
                <Bar className="mb-5 mt-1 rounded-md" height={12} data={data} options={options} />
              </div>

              {/* Chart Properties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {labels.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 ml-7">
                    <div
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: widgetData.bgColor[index] }}
                    ></div>
                    <span>
                      {item} ({counts[index]})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div className="flex h-60  flex-1 items-center justify-center">
          <AddWidgets />
        </div>
      </div>
    </div>
  );
};

export default Registry;
