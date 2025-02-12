import React from "react";
import Navbar from "../components/Navbar";
import { Bar, Line } from "react-chartjs-2";

const Mvp = () => {
  const players = [
    {
      label: "Kemas",
      value: 2,
    },
    {
      label: "Khrisna",
      value: 1,
    },
    {
      label: "Satya",
      value: 9,
    },
    {
      label: "Budi",
      value: 3,
    },
    {
      label: "Dede",
      value: 4,
    },
    {
      label: "Rio",
      value: 1,
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
                Most Valuable Player
              </p>
            </div>
            <div class="flex justify-center mb-4 rounded-sm bg-gray-50">
              <div className="w-[950px] ">
                <div className="h-full w-full">
                  <Bar
                    data={{
                      labels: players.map((data) => data.label),
                      datasets: [
                        {
                          label:
                            "joki, course, dan consultation yang di handle",
                          data: players.map((data) => data.value),
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

export default Mvp;
