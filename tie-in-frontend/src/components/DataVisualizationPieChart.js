import React, { useState } from "react";
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from 'recharts';


const DataVisualizationPieChart = ({inputPage}) => {
    let data, text;
    if (inputPage === 's') {
        data = [
            { name: 'AI', value: 400 },
            { name: 'Web Development', value: 300 },
            { name: 'Robotics', value: 300 },
            { name: 'E-ommerce', value: 200 },
        ];
        text = 'New Business Projects';
    }
    else {
        data = [
            { name: 'Ux Design', value: 140 },
            { name: 'Web Development', value: 550 },
            { name: 'Marketing', value: 100 },
            { name: 'E-ommerce', value: 250 },
        ];
        text = 'New Student Projects';
    }

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <div className="">
                <div className="new-project-component">
                    <h1>{text}</h1>
                    <ResponsiveContainer width={450} height={450} className="text-center">
                        <PieChart >

                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend layout="vertical" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}
export default DataVisualizationPieChart;
