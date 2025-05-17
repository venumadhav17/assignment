import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.get("/combined", async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    const products = await prisma.product.findMany();

    res.json({
      employees,
      products
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
