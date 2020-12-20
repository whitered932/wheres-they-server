import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorDto } from './visitor.dto';

@Controller('visitor')
export class VisitorController {
  constructor(private visitorService: VisitorService) {}

  @Get()
  getAll() {
    return this.visitorService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.visitorService.getById(id);
  }

  @Post('create')
  create(@Body() visitor: VisitorDto) {
    return this.visitorService.create(visitor);
  }

  @Put(':id/update')
  update(@Param('id') id: number, @Body() visitor: VisitorDto) {
    return this.visitorService.update(id, visitor);
  }

  @Delete(':id/delete')
  delete(@Param('id') id: number) {
    return this.visitorService.delete(id);
  }

  //  TODO: API
}
