import React from 'react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

const data = [
    { month: "Jun", value: 18, score: 18 },
    { month: "Jul", value: 13, score: 13 },
    { month: "Aug", value: 10, score: 10 },
    { month: "Sep", value: 35, score: 35 },
    { month: "Oct", value: 32, score: 32 },
    { month: "Nov", value: 35, score: 35 },


]

const CustomizedTick2 = ({ x, y, payload }) => {
    // console.log(props)
    return <text style={{ fontSize: "12px", float: "right", textAlign: "right" }} x={x - 24} y={y - 6} textAnchor="top" dominantBaseline="hanging">
        {payload.value}
    </text>
}


const renderTooltip = (props) => {
    if (props && props.payload[0]) {
        return (
            <div style={{ padding: "16px", background: "blue", color: "#ffffff", fontSize: "12px" }}>
                <div>Score: {props.payload[0].payload.score}</div>
                <div>Value: {props.payload[0].payload.value}</div>
            </div>
        )
    }
}

const args = {
    chartData: data,
    gradientColor: "rgba(241, 91, 64)",
    areaStrokeColor: "cyan",
    customizedTick: CustomizedTick2,
    // tickFormatter: null,
    renderTooltip: renderTooltip,
    uniqueId: 2,
}

const Dots = () => {
    return (
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", border: "1px solid black" }} />
    )
}
const DataVisualizationAreaChart = () => (
    <div style={styles}>
        <ResponsiveContainer width={450} height={350}>
            <AreaChart data={args.chartData}
                margin={{ top: 20, right: 10, left: -30, bottom: 0 }}>
                <defs>
                    <linearGradient id={"colorUv" + args.uniqueId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="100%" stopColor={args.gradientColor} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis
                    width={80}
                    tick={args.customizedTick}
                    interval={0}
                    domain={[1, 15]}
                    tickFormatter={args.tickFormatter}
                />
                <CartesianGrid strokeDasharray="5 5" vertical="true" fill="#314A5B" horizontal={false} />
                <Tooltip content={args.renderTooltip} />
                <Area dot={{ fill: args.gradientColor, fillOpacity: 1 }} type="monotone" dataKey="value" stroke={args.gradientColor} fillOpacity={0.1} fill={"url(#colorUv" + args.uniqueId + ")"} />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

export default DataVisualizationAreaChart;

//Reference https://codesandbox.io/s/x73m1omx1o?file=/index.js
