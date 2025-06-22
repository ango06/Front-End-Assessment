import Chart from '@/components/Chart';

const coffeeData = [
  { year: '2022', sales: 3923 },
  { year: '2023', sales: 4302 },
  { year: '2024', sales: 3578 },
];

export default function Page() {
  return (
    <main>
      <h1 className="m-10 text-4xl font-bold text-center">Coffee Sales</h1>
      <div className="justify-self-center">
        <Chart data={coffeeData}/>
      </div>
    </main>
  );
}