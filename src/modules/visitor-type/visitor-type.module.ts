import { Module } from '@nestjs/common';
import { VisitorTypeController } from './visitor-type.controller';
import { VisitorTypeService } from './visitor-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorTypeEntity } from '../../entities/visitor-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VisitorTypeEntity])],
  controllers: [VisitorTypeController],
  providers: [VisitorTypeService],
  exports: [VisitorTypeService],
})
export class VisitorTypeModule {}
