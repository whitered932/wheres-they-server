import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupEntity } from '../../entities/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(GroupEntity)
    private groupEntityRepository: Repository<GroupEntity>,
  ) {}

  async getAll() {
    return this.groupEntityRepository.find({});
  }

  async getByTitle(title: string) {
    return this.groupEntityRepository.findOne({ title });
  }

  async create(data) {
    const group = this.groupEntityRepository.create(data);
    return await this.groupEntityRepository.save(group);
  }

  async update(title, data) {
    await this.groupEntityRepository.update({ title }, data);
    return { updated: true };
  }

  async delete(title) {
    await this.groupEntityRepository.delete({ title: title });
    return { deleted: true };
  }

  // После создания Client части, стоит подумать над реализацией

  // async addVisitor(title, visitorId) {
  //   const group = await this.groupEntityRepository.findOne({ title: title });
  //   group.visitors = [...group.visitors, visitorId];
  //   return this.groupEntityRepository.save(group);
  // }
}
