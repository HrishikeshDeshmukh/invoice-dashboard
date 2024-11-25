import { Link } from 'react-router';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const queueData = [
    { name: "Processing Queue", value: 20, color: "#FF6B6B" },
    { name: "Exception Queue", value: 30, color: "#4ECDC4" },
    { name: "Duplicate Queue", value: 15, color: "#1A1B41" },
    { name: "Missing PO Queue", value: 15, color: "#FFD93D" },
    { name: "Receipt Hold Queue", value: 10, color: "#95A5A6" },
    { name: "Supplier Portal Queue", value: 10, color: "#FF6Bb5" },
  ]

const Chart = () => {
  return (
    <Link to="/queue">
    <div className='w-full h-full relative flex cursor-pointer'>
        <span className='text-[20px] ml-4 absolute top-[30px] left-[30px] font-bold'>Queues</span>

        <div className='flex items-center ml-[40px]'>
            <PieChart width={350} height={350}>
                <Pie
                data={queueData}
                cx={120}
                cy={200}
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value">
                    {queueData.map((entry, index)=> (
                        <Cell key={index} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>

        </div>
        <div className='flex flex-col justify-center mt-8'>

           
            {queueData.map((entry, index) => (
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

export default Chart