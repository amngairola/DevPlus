import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { aggregateLanguages } from "../utils/aggregateLanguages";
import { getColor } from "../utils/languageColors";

const LanguageChart = ({ repos }) => {
  const data = aggregateLanguages(repos);

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-gray-900 p-6 rounded-2xl">
      <h2 className="text-white mb-4">Languages</h2>

      <PieChart width={300} height={300}>
        <Pie data={data}>
          {data.map((entry, index) => (
            <Cell key={index} fill={getColor(entry.name)} />
          ))}
        </Pie>

        <Tooltip
          content={({ payload }) => {
            if (!payload || !payload.length) return null;

            const { name, value } = payload[0].payload;

            const percent = ((value / total) * 100).toFixed(1);

            return (
              <div className="bg-gray-800 p-2 rounded text-white">
                <p>{name}</p>
                <p>{value} repos</p>
                <p>{percent}%</p>
              </div>
            );
          }}
        />
      </PieChart>
    </div>
  );
};

export default LanguageChart;
