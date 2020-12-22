import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from '../../entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupEntity])],
  providers: [GroupService],
  controllers: [GroupController],
})
export class GroupModule {}
