import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Enable CORS for MF
  app.enableCors({
    origin: 'http://localhost:4200', // your micro frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Pragma'],
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();