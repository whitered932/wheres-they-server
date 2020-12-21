import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Visit } from '../../entities/visit.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class VisitService {
  constructor(
    @InjectRepository(Visit)
    private visitRepository: Repository<Visit>,
  ) {}

  async find(
    startDate = new Date('1970-1-1'),
    endDate = new Date(),
    visitorId = null,
  ) {
    // If visitorId exists in request then we need to return visits a specific visitor
    return visitorId
      ? await this.visitRepository.find({
          where: { date: Between(startDate, endDate), visitor: visitorId },
        })
      : await this.visitRepository.find({
          where: { date: Between(startDate, endDate) },
        });
  }

  async create(data) {
    const visit = this.visitRepository.create({
      visitor: data.visitorId,
      date: data.date,
    });
    return await this.visitRepository.save(visit);
  }

  async delete(id: number) {
    await this.visitRepository.softDelete({ id: id });
    return { deleted: true };
  }
}
