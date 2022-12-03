import { PieChart, Pie, Legend, Label, Cell, ResponsiveContainer } from 'recharts';


const DataVisualizationPieChart = ({ inputData }) => {
    let dataArray, text, total = 0;
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let currentMonth = month[d.getMonth()];
    if (sessionStorage.getItem("userType") === "student") {
        text = 'New Business Projects';
    }
    else if (sessionStorage.getItem("userType") === "business") {
        text = 'New Student Projects';
    }
    dataArray = Object.entries(inputData).map(([name, value]) => ({ name, value }))
    let data = [];
    let count = 0;
    dataArray.map((key, index) => {
        if(index <3 )
        {
           data[index] = ({ name: key.name, value: key.value})
        }

        if(index >=3 ){
            count = count +  key.value
            data[3] = ({ name: "Others", value: count})
        }
      });
 
    data.map((entry, index) => {
        total = total + entry.value;
    });

    const COLORS = ['#FCB51F', '#53E0DC', '#747373', '#0B938E'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.32;
        const x =2.5+ cx + radius * Math.cos(-midAngle * RADIAN);
        const y =4 + cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <div className="new-project-component">
                <div className="chart-header">
                    <h2>{text}</h2>
                    <h3>{currentMonth} Projects By Category</h3>
            </div>
                <ResponsiveContainer width={420} height={310} className="text-center" >
                    <PieChart >
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={110}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            dataKey="value"
                            layout="vertical"
                            verticalAlign="middle"
                            align="left"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            <Label
                                value={total} position="center" className='label-center' fontSize='27px' fill="white"
                            />
                        </Pie>

                        <Legend iconType="circle"
                            layout="vertical"
                            verticalAlign="middle" align="right"
                            iconSize={12}
                            padding={10} />
                    </PieChart >

                </ResponsiveContainer>

            </div>
        </>
    )
}
export default DataVisualizationPieChart;

//Reference https://technostuf.com/react-pie-chart-using-recharts-with-legend-and-custom-label/
