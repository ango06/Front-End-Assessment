'use client';

import { BarChart, Bar, Legend, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface DataObject {
    year: string,
    sales: number
}
interface DataList {
    data: DataObject[]
}

const RenderBarChart: React.FC<DataList> = (props) => {
  return (
    <BarChart width={600} height={500} data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#ff9717" />
    </BarChart>
  );
}



export default RenderBarChart;