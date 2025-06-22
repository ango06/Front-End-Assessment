'use client';

import RenderLineChart from '@/components/LineChart';
import RenderBarChart from "@/components/BarChart"
import { useState } from 'react';

const coffeeData = [
  { year: '2022', sales: 3923 },
  { year: '2023', sales: 4302 },
  { year: '2024', sales: 3578 },
];

export default function Page() {
  const [chartType, setChartType] = useState<"line" | "bar">("line");
  const handleLineButton = () => {
    setChartType("line");
  }
  const handleBarButton = () => {
    setChartType("bar");
  }

  return (
    <main>
      <h1 className="m-10 text-6xl font-bold text-center">Coffee Sales</h1>
      <div className="m-5 flex flex-row justify-center gap-4">
        <button onClick={handleLineButton} className="px-4 py-2 bg-[#ff5eb9] rounded-4xl">Line Chart</button>
        <button onClick={handleBarButton} className="px-4 py-2 bg-[#ff9717] rounded-4xl">Bar Chart</button>
      </div>
      <div className="m-2 justify-self-center">
        { chartType === 'line' ?
        <RenderLineChart data={coffeeData}/> : 
        <RenderBarChart data={coffeeData} /> }
      </div>
    </main>
  );
}