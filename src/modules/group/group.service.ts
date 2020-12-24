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

  async getById(id: number, options = null) {
    return await this.groupEntityRepository.findOne({ id }, options);
  }

  async create(data) {
    const group = this.groupEntityRepository.create(data);
    return await this.groupEntityRepository.save(group);
  }

  async update(id, data) {
    await this.groupEntityRepository.update({ id }, data);
    return { updated: true };
  }

  async delete(id) {
    await this.groupEntityRepository.delete({ id });
    return { deleted: true };
  }
}
