import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupEntity } from '../../entities/group.entity';
import { Repository } from 'typeorm';

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
}
