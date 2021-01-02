import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitorModule } from './modules/visitor/visitor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitModule } from './modules/visit/visit.module';
import { GroupModule } from './modules/group/group.module';
import { VisitorTypeModule } from './modules/visitor-type/visitor-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    VisitorModule,
    VisitModule,
    GroupModule,
    VisitorTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
