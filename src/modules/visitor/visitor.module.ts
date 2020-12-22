import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorController } from './visitor.controller';
import { VisitorService } from './visitor.service';
import { VisitorEntity } from '../../entities/visitor.entity';
import { GroupModule } from "../group/group.module";

@Module({
  imports: [GroupModule, TypeOrmModule.forFeature([VisitorEntity])],
  controllers: [VisitorController],
  providers: [VisitorService],
})
export class VisitorModule {}
