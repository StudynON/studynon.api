import 'express-async-errors';
import { app } from './config/server';
import { port, swagger } from './config/vars';

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.listen(swagger, () =>{
  console.log(`⚡️[server]: Swagger is running at http:///localhost:${swagger}`);
});
