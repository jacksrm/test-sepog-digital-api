import 'dotenv/config';
import express, { Request, Response } from 'express';
import db from './db.json';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/funcionario', (req: Request, res: Response) => {
  const { cpf } = req.query;

  const employeeFound = db.find((employee) => employee.cpf === cpf);

  if (!employeeFound) return res.status(404).json({ message: 'Funcionário não encontrado' });

  return res.status(200).json(employeeFound);
});

app.post('/log', (req: Request, res: Response) => {
  console.log(req.body);
});

app.listen(process.env.PORT || 3333, () => { console.log('App running on http://localhost:3333'); });
