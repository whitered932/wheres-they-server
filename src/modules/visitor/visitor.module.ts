import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visitor } from '../../entities/visitor.entity';
import { VisitorController } from './visitor.controller';
import { VisitorService } from './visitor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Visitor])],
  controllers: [VisitorController],
  providers: [VisitorService],
})
export class VisitorModule {}
