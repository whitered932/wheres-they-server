import {
  Body,
  Controller,
  Param,
  Query,
  Get,
  Post,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { VisitorTypeService } from './visitor-type.service';
import { addVisitorTypeDto, visitorTypeDto } from './visitor-type.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

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
  @ApiBody({ type: [visitorTypeDto] })
  @HttpCode(201)
  create(@Body() type: visitorTypeDto) {
    return this.visitorTypeService.create(type);
  }

  @Patch(':id/visitors')
  @ApiParam({ name: 'id', description: 'ID типа' })
  @ApiBody({ type: addVisitorTypeDto })
  @HttpCode(200)
  addOrRemoveVisitor(@Param('id') id, @Body() data: addVisitorTypeDto) {
    return this.visitorTypeService.addOrRemoveVisitor(
      id,
      data.visitor,
      data.remove,
    );
  }

  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: visitorTypeDto })
  patch(@Param('id') id, @Body() type: visitorTypeDto) {
    return this.visitorTypeService.patch(id, type);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: number) {
    return this.visitorTypeService.delete(id);
  }
}
