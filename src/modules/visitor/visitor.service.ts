import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visitor } from '../../entities/visitor.entity';

@Injectable()
export class VisitorService {
  constructor(
    @InjectRepository(Visitor)
    private visitorRepository: Repository<Visitor>,
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
}
