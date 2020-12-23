import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VisitorTypeService } from './visitor-type.service';
import { VisitorTypeDto } from './visitor-type.dto';

@Controller('types')
export class VisitorTypeController {
  constructor(private visitorTypeService: VisitorTypeService) {}

  @Get()
  getAll() {
    return this.visitorTypeService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.visitorTypeService.getById(id);
  }

  @Post('create')
  create(@Body() type: VisitorTypeDto) {
    return this.visitorTypeService.create(type);
  }

  @Put(':id/update')
  update(@Param('id') id, @Body() type: VisitorTypeDto) {
    return this.visitorTypeService.update(id, type);
  }

  @Delete(':id/delete')
  delete(@Param('id') id: number) {
    return this.visitorTypeService.delete(id);
  }
}
