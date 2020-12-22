import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisitorEntity } from '../../entities/visitor.entity';
import { GroupService } from '../group/group.service';

@Injectable()
export class VisitorService {
  constructor(
    @InjectRepository(VisitorEntity)
    private visitorRepository: Repository<VisitorEntity>,
    private groupService: GroupService,
  ) {}

  async getAll() {
    return await this.visitorRepository.find({});
  }

  async getById(id: number) {
    return await this.visitorRepository.findOne(id);
  }

  async create(data) {
    const visitor = this.visitorRepository.create(data);
    return await this.visitorRepository.save(visitor);
  }

  async update(id: number, data) {
    await this.visitorRepository.update({ id }, data);
    return { updated: true };
  }

  async delete(id: number) {
    await this.visitorRepository.softDelete(id);
    return { deleted: true };
  }

  async setGroup(id: number, title: string) {
    const group = await this.groupService.getByTitle(title);
    await this.visitorRepository.update({ id }, { group: group });
    return { groupChanged: true };
  }

  async removeGroup(id: number) {
    await this.visitorRepository.update({ id }, { group: null });
    return { removed: true };
  }
}
