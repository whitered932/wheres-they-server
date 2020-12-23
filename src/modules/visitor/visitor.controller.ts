import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorDto } from './visitor.dto';

@Controller('visitors')
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


  @Post()
  create(@Body() visitor: VisitorDto) {
    return this.visitorService.create(visitor);
  }

  // TODO: В случае отстуствия изменений = код 204
  @Put(':id')
  update(@Param('id') id: number, @Body() visitor: VisitorDto) {
    return this.visitorService.update(id, visitor);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.visitorService.delete(id);
  }

  @Patch(':id/restore')
  restore(@Param('id') id: number) {
    return this.visitorService.restore(id);
  }

  @Patch(':id/group')
  setGroup(@Param('id') id, @Body('title') title) {
    return this.visitorService.setGroup(id, title);
  }

  // TODO: Эти методы перенести в своё место обитания
  @Patch(':id/type')
  addType(@Param('id') id, @Body('typeId') typeId) {
    return this.visitorService.addType(id, typeId);
  }

  @Delete(':id/deleteType')
  deleteType(@Param('id') id, @Body('typeId') typeId) {
    return this.visitorService.removeType(id, typeId);
  }
}
