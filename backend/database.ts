import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.get('/combined', async (req, res) => {
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
  console.log('Server running on port 3000');
});

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // or mysql
  url      = env("DATABASE_URL")
}

model Employee {
  id         Int     @id @default(autoincrement())
  firstName  String
  lastName   String
  email      String
  department String
  salary     Float
}

model Product {
  id          Int     @id @default(autoincrement())
  productName String
  description String
  price       Float
  quantity    Int
}

