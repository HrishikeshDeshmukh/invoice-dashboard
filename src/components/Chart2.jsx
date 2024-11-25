import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router';

const kpiData = [
    { name: "Role", value: 26, color: "#1A1B41" },
    { name: "Person Responsible", value: 30, color: "#4ECDC4" },
    { name: "Triggers Alert", value: 54, color: "#FFD93D" },
  ]
  

const Chart2 = () => {
  return (
    <Link to="/kpi"><div className='w-full h-full relative flex cursor-pointer'>
        <span className='text-[20px] ml-4 absolute top-[30px] left-[30px] font-bold'>KPI</span>

        <div className='flex items-center ml-[40px]'>
            <PieChart width={350} height={350}>
                <Pie
                data={kpiData}
                cx={120}
                cy={200}
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value">
                    {kpiData.map((entry, index)=> (
                        <Cell key={index} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>

        </div>
        <div className='flex flex-col justify-center mt-8'>

           
            {kpiData.map((entry, index) => (
                    <div key={index} className="flex items-center mb-4">
                        <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        ></span>
                        <span className="ml-2">{entry.name}</span>
                    </div>
                ))}

        </div>
    </div>
    </Link>
  )
}

export default Chart2