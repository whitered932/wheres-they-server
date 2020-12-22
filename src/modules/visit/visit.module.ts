import { Module } from '@nestjs/common';
import { VisitController } from './visit.controller';
import { VisitService } from './visit.service';
import { VisitEntity } from '../../entities/visit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VisitEntity])],
  controllers: [VisitController],
  providers: [VisitService],
})
export class VisitModule {}
