import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Plus, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const AddWidgets = () => {
  const [activeTab, setActiveTab] = useState("CSPM");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderWidgets = () => {
    switch (activeTab) {
      case "CSPM":
        return ["Cloud Accounts", "Cloud Account Risk Assesment"];
      case "CWPP":
        return ["Top 5 Namespace Specific Alerts", "Worklod Alerts"];
      case "Image":
        return ["Widget X", "Widget Y"];
      case "Ticket":
        return ["Widget M", "Widget N"];
      default:
        return [];
    }
  };

  return (
    <>
      <Card className="flex w-full h-full items-center justify-center">
        <CardContent className=" flex items-center justify-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex gap-3 rounded-md p-3 text-zinc-500 border-2 border-zinc-400 text-sm text-center">
                <Plus className="h-3 w-4 mt-1 text-center" /> Add Widget{" "}
              </button>
            </SheetTrigger>
            
            <SheetContent className="max-w-[44rem] w-full sm:w-[540px]">
              <div className="absolute p-3 bg-blue-500 top-0 left-0 right-0">
                <SheetHeader>
                  <div className="text-sm w-full text-white">Add Widget</div>
                </SheetHeader>
              </div>

              <SheetDescription>
                <div className="mt-12 w-full">
                  <p className="text-xs text-zinc-700">
                    Personalize your dashboard by adding the following widget
                  </p>
                </div>
                <div>
                  <div className="flex border-b border-gray-300">
                    {["CSPM", "CWPP", "Image", "Ticket"].map((tab, index) => (
                      <button
                        key={index}
                        onClick={() => handleTabClick(tab)}
                        className={`px-4 py-2 text-sm font-medium focus:outline-none 
                        ${
                          activeTab === tab
                            ? "border-b-2 border-blue-500 text-black"
                            : "text-gray-500"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Widget List */}
                  <div className="mt-4 space-y-2">
                  {renderWidgets().map((widget, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-md shadow-sm"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-4 w-5 h-4 text-blue-600 rounded focus:ring-0"
                          />
                          <label className="text-sm font-medium text-black">
                            {widget}
                          </label>
                        </div>
                        <X className="text-gray-500 h-4 w-4 cursor-pointer hover:text-red-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </SheetDescription>
              <SheetFooter className="absolute bottom-5 right-5">
              <div className="flex gap-3 bottom-0">
                <button className="py-2 px-4 rounded-lg text-sm border-2 border-blue-900  hover:bg-blue-950 text-blue-900 hover:text-white">Cancel</button>
                <button className="py-2 px-4 rounded-lg text-sm border-2 border-blue-900  hover:bg-blue-950 text-blue-900 hover:text-white">Confirm</button>
                
              </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>
    </>
  );
};

export default AddWidgets;
