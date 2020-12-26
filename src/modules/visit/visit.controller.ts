import {
  Controller,
  Body,
  Param,
  Query,
  Get,
  Post,
  Delete,
} from '@nestjs/common';
import { VisitService } from './visit.service';
import { CreateVisitDto, FindVisitDto } from './visit.dto';
import {
  ApiBody,
  ApiQuery,
  ApiTags,
  ApiCreatedResponse,
} from '@nestjs/swagger';

@ApiTags('Посещения')
@Controller('visits')
export class VisitController {
  constructor(private visitService: VisitService) {}

  @Get()
  @ApiQuery({ type: [FindVisitDto] })
  find(@Query() query: FindVisitDto) {
    return this.visitService.find(query.start, query.end, query.visitorId);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Посещение было создано успешно',
  })
  @ApiBody({ type: [CreateVisitDto] })
  create(@Body() visit: CreateVisitDto) {
    if (!visit.date) {
      visit.date = new Date().toISOString();
      return this.visitService.create(visit);
    }
    return this.visitService.create(visit);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.visitService.delete(id);
  }
}
