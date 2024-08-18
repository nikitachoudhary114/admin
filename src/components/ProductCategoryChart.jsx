import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Electronics", products: 120 },
  { category: "Clothing", products: 98 },
  { category: "Home Appliances", products: 65 },
  { category: "Books", products: 78 },
  { category: "Toys", products: 90 },
  { category: "Sports", products: 85 },
];

function ProductCategoryChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="products" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ProductCategoryChart;
