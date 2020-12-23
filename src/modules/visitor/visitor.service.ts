import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisitorEntity } from '../../entities/visitor.entity';
import { GroupService } from '../group/group.service';
import { VisitorTypeService } from '../visitor-type/visitor-type.service';

@Injectable()
export class VisitorService {
  constructor(
    @InjectRepository(VisitorEntity)
    private visitorRepository: Repository<VisitorEntity>,
    private groupService: GroupService,
    private visitorTypeService: VisitorTypeService,
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

  async restore(id: number) {
    await this.visitorRepository.restore(id);
    return { restored: true };
  }

  async setGroup(id: number, groupId: number) {
    // Если ID группы не передано, то у пользователя её не будет
    const group = await this.groupService.getById(groupId);
    await this.visitorRepository.update({ id }, { group: group });
    return { groupChanged: true };
  }

  async addType(id: number, typeId: number) {
    const type = await this.visitorTypeService.getById(typeId);
    const visitor = await this.visitorRepository.findOne(
      { id },
      { relations: ['types'] },
    );
    visitor.types.push(type);
    return await this.visitorRepository.save(visitor);
  }

  async removeType(id: number, typeId: number) {
    const visitor = await this.visitorRepository.findOne({ id });

    visitor.types = visitor.types.filter((type) => {
      type.id !== typeId;
    });

    return this.visitorRepository.save(visitor);
  }
}
