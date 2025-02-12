import React from "react";
import Navbar from "../components/Navbar";
import { Bar, Line } from "react-chartjs-2";

const ChartServices = () => {
  const pendapatan = [
    {
      label: "Data / Machine Learning",
      value: 9,
    },
    {
      label: "Mobile React Native",
      value: 8,
    },
    {
      label: "JAVA / KOTLIN",
      value: 6,
    },
    {
      label: "Makalah",
      value: 2,
    },
    {
      label: "Private Course",
      value: 1,
    },
  ];
  return (
    <>
      <Navbar />
      <main className=" min-h-screen">
        <div class="p-4">
          <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg ">
            <div class="grid grid-cols-1 gap-4 mb-4 ">
              <p class="text-2xl md:text-3xl capitalize text-center font-semibold">
                grafik layanan yang paling diminati
              </p>
            </div>
            <div class="flex justify-center mb-4 rounded-sm bg-gray-50">
              <div className="w-[950px] ">
                <div className="h-full w-full">
                  <Bar
                    data={{
                      labels: pendapatan.map((data) => data.label),
                      datasets: [
                        {
                          label: "joki, course, dan consultation",
                          data: pendapatan.map((data) => data.value),
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChartServices;
