import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisitorEntity } from '../../entities/visitor.entity';

@Injectable()
export class VisitorService {
  constructor(
    @InjectRepository(VisitorEntity)
    private visitorRepository: Repository<VisitorEntity>,
  ) {}

  async getAll(relations = []) {
    return await this.visitorRepository.find({ relations });
  }

  async getById(id: number, relations = []) {
    return await this.visitorRepository.findOne(id, {
      relations,
    });
  }

  async create(data) {
    const visitor = this.visitorRepository.create(data);
    return await this.visitorRepository.save(visitor);
  }

  async patch(id: number, data) {
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
}
