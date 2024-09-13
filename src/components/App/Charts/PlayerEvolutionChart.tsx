
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from "recharts";

function PlayerEvolutionChart() {
    return (
        <div style={{ width: "100%", height: 500 }}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    outerRadius={90}
                    className="text-black"
                >
                    <PolarGrid className="text-lg font-medium text-black dark:text-white" />
                    <PolarAngleAxis
                        dataKey="category"
                        className="text-lg font-medium text-black dark:text-white"
                    />
                    <PolarRadiusAxis
                        angle={30}
                        domain={[0, 100]}
                        className="text-lg font-medium text-black dark:text-white"
                    />
                    <Radar
                        name="Progress"
                        className="text-lg font-medium text-black dark:text-white"
                        dataKey="progress"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Legend className="text-lg font-medium text-black dark:text-white" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PlayerEvolutionChart;
