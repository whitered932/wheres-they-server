import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitorModule } from './modules/visitor/visitor.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [VisitorModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
