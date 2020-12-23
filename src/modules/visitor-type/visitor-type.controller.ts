import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { VisitorTypeService } from './visitor-type.service';
import { UpdateVisitorTypeDto, VisitorTypeDto } from './visitor-type.dto';

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

  @Post()
  create(@Body() type: VisitorTypeDto) {
    return this.visitorTypeService.create(type);
  }

  @Patch(':id/visitors')
  addOrRemoveVisitor(@Param('id') id, @Body() data: UpdateVisitorTypeDto) {
    return this.visitorTypeService.addOrRemoveVisitor(
      id,
      data.visitor,
      data.remove,
    );
  }

  @Put(':id')
  update(@Param('id') id, @Body() type: VisitorTypeDto) {
    return this.visitorTypeService.update(id, type);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.visitorTypeService.delete(id);
  }
}
