"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { cwppData } from "@/lib/data"; // Import your data
import AddWidgets from "./AddWidgets";
import { ChartNoAxesCombinedIcon } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const CWPP_Dashboard = () => {
  const widgets = cwppData.categories[0].widgets; // Get all widgets in the category

  return (
    <div className="mt-4">
      <div>
        <h1 className="text-black font-semibold">
          {cwppData.categories[0].name}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-2">
        {widgets.map((widgetData, widgetIndex) => {
          

          return (
            <div
              key={widgetIndex}
              className="flex flex-col h-60 border-2 bg-white rounded-lg p-4"
            >
              {/* Widget Name */}
              <h1 className="text-black font-semibold text-left mb-4">
                {widgetData.name}
              </h1>

              <div className="flex flex-1 flex-col justify-center items-center ">
                <ChartNoAxesCombinedIcon className="h-16 w-16 text-zinc-200"/>{" "}
                <p className="text-sm text-gray-800 font-semibold">No Graph data available!</p>
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

export default CWPP_Dashboard;
