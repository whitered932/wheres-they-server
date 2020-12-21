import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { VisitService } from './visit.service';
import { createVisitDto, findVisitDto } from './visit.dto';

@Controller('visit')
export class VisitController {
  constructor(private visitService: VisitService) {}

  @Post()
  find(@Body() visits: findVisitDto) {
    return this.visitService.find(
      visits.startDate,
      visits.endDate,
      visits.visitorId,
    );
  }

  @Post('create')
  create(@Body() visit: createVisitDto) {
    if (!visit.date) {
      visit.date = new Date().toISOString();
      return this.visitService.create(visit);
    }
    return this.visitService.create(visit);
  }

  @Delete(':id/delete')
  delete(@Param('id') id: number) {
    return this.visitService.delete(id);
  }
}
