"use client"; // If using App Router

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({ employees: [], products: [] });

  useEffect(() => {
    fetch("http://localhost:3000/backenddata") // Backend API
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Data Present in Backend</h1>

      <h2>number Of Employees</h2>
      <ul>
        {data.employees.map((item) => (
          <li key={emp.id}>
            {item.firstName} {item.lastName} - {item.department}
          </li>
        ))}
      </ul>

      <h2>Number of Products</h2>
      <ul>
        {data.products.map((prodItem) => (
          <li key={prodItem.id}>
            {prodItem.productName} - ${proditem.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
