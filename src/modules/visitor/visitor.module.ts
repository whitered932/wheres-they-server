import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupModule } from '../group/group.module';
import { VisitorController } from './visitor.controller';
import { VisitorService } from './visitor.service';
import { VisitorEntity } from '../../entities/visitor.entity';
import { VisitorTypeModule } from '../visitor-type/visitor-type.module';

@Module({
  imports: [
    GroupModule,
    VisitorTypeModule,
    TypeOrmModule.forFeature([VisitorEntity]),
  ],
  controllers: [VisitorController],
  providers: [VisitorService],
})
export class VisitorModule {}
