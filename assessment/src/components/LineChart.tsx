'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface DataObject {
    year: string,
    sales: number
}
interface DataList {
    data: DataObject[]
}

const RenderLineChart: React.FC<DataList> = (props) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={props.data}>
          <XAxis dataKey="year" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="4"/>
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#ff5eb9" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default RenderLineChart;