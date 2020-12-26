import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle("Where's They?")
    .setDescription('Мониторинг посещений на все случаи жизни')
    .setVersion('1.1')
    .setContact(
      'whitered932',
      'https://github.com/whitered932',
      'whitered932@ya.ru',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}

bootstrap();
