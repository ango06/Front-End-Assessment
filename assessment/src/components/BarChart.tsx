'use client';

import { BarChart, Bar, Legend, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface DataObject {
    year: string,
    sales: number
}
interface DataList {
    data: DataObject[]
}

const RenderBarChart: React.FC<DataList> = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={600} height={400} data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#ff9717" />
      </BarChart>
    </ResponsiveContainer>
  );
}



export default RenderBarChart;