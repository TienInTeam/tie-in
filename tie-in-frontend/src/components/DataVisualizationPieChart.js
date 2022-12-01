import { PieChart, Pie, Legend, Label, Cell, ResponsiveContainer } from 'recharts';


const DataVisualizationPieChart = ({ inputData }) => {
    let data, text, total = 0;
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let currentMonth = month[d.getMonth()];
    if (sessionStorage.getItem("userType") === "student") {
        text = 'New Business Projects';
    }
    else if (sessionStorage.getItem("userType") === "business") {
        text = 'New Student Projects';
    }
    data = Object.entries(inputData).map(([name, value]) => ({ name, value }))
    console.log("pie data" + JSON.stringify(data));

    // data = data.map((index) => (
    //     {
    //         name: `${index.name.substring(5, 10)}`, value: index.value
    //     }
    // ));

    let data1 = [];
    let count = 0;

    const sum = data.reduce((datas, object) => {


        if (count > 3) {
            
        }
    }, 0);

    console.log("new data" + JSON.stringify(sum));

    data.map((entry, index) => {
        total = total + entry.value;
    });

    const COLORS = ['#FCB51F', '#53E0DC', '#747373', '#0B938E'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.30;
        const x = 5 + cx + radius * Math.cos(-midAngle * RADIAN);
        const y = 5 + cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <div className="new-project-component">
                <h2>{text}</h2>
                <h3>{currentMonth} project Uploads</h3>
                <ResponsiveContainer width={440} height={310} className="text-center" >
                    <PieChart >
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
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
