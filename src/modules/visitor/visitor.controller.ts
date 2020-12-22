import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
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

  @Get(':id/type')
  getByType(@Param('id') id: number) {
    return this.visitorService.getByType(id);
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

  @Put(':id/group')
  setGroup(@Param('id') id, @Body('title') title) {
    return this.visitorService.setGroup(id, title);
  }

  @Delete(':id/group/remove')
  removeGroup(@Param('id') id) {
    return this.visitorService.removeGroup(id);
  }

  @Put(':id/addType')
  addType(@Param('id') id, @Body('typeId') typeId) {
    return this.visitorService.addType(id, typeId);
  }

  @Delete(':id/deleteType')
  deleteType(@Param('id') id, @Body('typeId') typeId) {
    return this.visitorService.removeType(id, typeId);
  }
}
