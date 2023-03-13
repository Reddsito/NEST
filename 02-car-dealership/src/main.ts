import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // Sirve para quitar la data extra que no sigue el DTO
      whitelist: true,

      //Sirve para regresar un error con las propiedades extra que no debería mandar en el DTO
      forbidNonWhitelisted: true
    })
  )

  await app.listen(3000);
}
bootstrap();
