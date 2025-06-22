'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface DataObject {
    year: string,
    sales: number
}
interface DataList {
    data: DataObject[]
}

const RenderLineChart: React.FC<DataList> = (props) => {
  return (
    <LineChart width={800} height={400} data={props.data}>
      <XAxis dataKey="year" />
      <YAxis />
      <CartesianGrid stroke="#ccc" strokeDasharray="4"/>
      <Tooltip />
      <Line type="monotone" dataKey="sales" stroke="#ff5eb9" strokeWidth={3} />
    </LineChart>
  );
}

export default RenderLineChart;