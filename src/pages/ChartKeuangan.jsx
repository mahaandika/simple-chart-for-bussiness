import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Chart as ChartJs } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const ChartKeuangan = () => {
  const pendapatan = [
    {
      label: "Desember 2024",
      value: 1400000,
    },
    {
      label: "January",
      value: 3775000,
    },
    {
      label: "February",
      value: 750000,
    },
    {
      label: "March",
      value: 0,
    },
    {
      label: "April",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "June",
      value: 0,
    },
    {
      label: "July",
      value: 0,
    },
    {
      label: "August",
      value: 0,
    },
    {
      label: "September",
      value: 0,
    },
    {
      label: "October",
      value: 0,
    },
    {
      label: "November",
      value: 0,
    },
    {
      label: "Desember",
      value: 0,
    },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className=" min-h-screen">
        <div class="p-4">
          <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg ">
            <div class="grid grid-cols-1 gap-4 mb-4 ">
              <p class="text-2xl md:text-3xl capitalize text-center font-semibold">
                grafik pendapatan joki dan consultation
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
                          label: "pendapatan kotor tahun 2024 dan 2025",
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

export default ChartKeuangan;
