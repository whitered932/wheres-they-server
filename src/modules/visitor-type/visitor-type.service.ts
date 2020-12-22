import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VisitorTypeEntity } from '../../entities/visitor-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VisitorTypeService {
  constructor(
    @InjectRepository(VisitorTypeEntity)
    private visitorTypeRepository: Repository<VisitorTypeEntity>,
  ) {}

  async getAll() {
    return await this.visitorTypeRepository.find({});
  }

  async getById(id: number, options = null) {
    return await this.visitorTypeRepository.findOne({ id }, options);
  }

  async create(data) {
    const type = await this.visitorTypeRepository.create(data);
    return await this.visitorTypeRepository.save(type);
  }

  async update(id: number, data) {
    await this.visitorTypeRepository.update({ id }, data);
    return { updated: true };
  }

  async delete(id: number) {
    await this.visitorTypeRepository.delete({ id });
    return { deleted: true };
  }
}
