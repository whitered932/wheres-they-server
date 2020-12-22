import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupModule } from '../group/group.module';
import { VisitorController } from './visitor.controller';
import { VisitorService } from './visitor.service';
import { VisitorEntity } from '../../entities/visitor.entity';

@Module({
  imports: [GroupModule, TypeOrmModule.forFeature([VisitorEntity])],
  controllers: [VisitorController],
  providers: [VisitorService],
})
export class VisitorModule {}
