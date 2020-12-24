import {
  Controller,
  Body,
  Param,
  Delete,
  Post,
  Query,
  Get,
} from '@nestjs/common';
import { VisitService } from './visit.service';
import { createVisitDto, findVisitDto } from './visit.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Посещения')
@Controller('visits')
export class VisitController {
  constructor(private visitService: VisitService) {}

  @Get()
  @ApiQuery({ type: [findVisitDto] })
  find(@Query() query: findVisitDto) {
    return this.visitService.find(query.start, query.end, query.visitorId);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Посещение было создано успешно',
  })
  @ApiBody({ type: [createVisitDto] })
  create(@Body() visit: createVisitDto) {
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
