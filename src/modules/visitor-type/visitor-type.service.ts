import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VisitorTypeEntity } from '../../entities/visitor-type.entity';
import { Repository } from 'typeorm';
import { VisitorService } from '../visitor/visitor.service';

@Injectable()
export class VisitorTypeService {
  constructor(
    @InjectRepository(VisitorTypeEntity)
    private visitorTypeRepository: Repository<VisitorTypeEntity>,
  ) {}

  async getAll(relations = []) {
    return await this.visitorTypeRepository.find({ relations });
  }

  async getById(id: number, relations = []) {
    return await this.visitorTypeRepository.findOne({ id }, { relations });
  }

  async create(data) {
    const type = await this.visitorTypeRepository.create(data);
    return await this.visitorTypeRepository.save(type);
  }

  async update(id: number, data) {
    await this.visitorTypeRepository.update({ id }, data);
    return { updated: true };
  }

  async addOrRemoveVisitor(id: number, visitorId, remove = false) {
    remove
      ? await this.visitorTypeRepository
          .createQueryBuilder()
          .relation(VisitorTypeEntity, 'visitors')
          .of(visitorId)
          .remove(id)
      : await this.visitorTypeRepository
          .createQueryBuilder()
          .relation(VisitorTypeEntity, 'visitors')
          .of(visitorId)
          .add(id);

    return { updated: true };
  }

  async delete(id: number) {
    await this.visitorTypeRepository.delete({ id });
    return { deleted: true };
  }
}
