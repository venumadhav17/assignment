const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors()); // Enable CORS for frontend requests
app.use(express.json());

app.get("/combined", async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    const products = await prisma.product.findMany();

    res.json({ employees, products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
