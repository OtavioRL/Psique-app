import app from './app';
import 'dotenv/config';
import connectToDatabase from './Models/Connection';

const PORT = process.env.PORT || 3001;

connectToDatabase().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch((error) => {
  console.log('Connection with database generated an error: \r\n');
  console.log(error);
  console.log('\r\nServer initialization cancelled');
  process.exit(0);
});