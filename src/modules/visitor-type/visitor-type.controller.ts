import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { VisitorTypeService } from './visitor-type.service';
import { UpdateVisitorTypeDto, VisitorTypeDto } from './visitor-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Типы посетителей')
@Controller('types')
export class VisitorTypeController {
  constructor(private visitorTypeService: VisitorTypeService) {}

  @Get()
  getAll(@Query('relations') relations) {
    return this.visitorTypeService.getAll(relations);
  }

  @Get(':id')
  getById(@Param('id') id: number, @Query('relations') relations) {
    return this.visitorTypeService.getById(id, relations);
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
