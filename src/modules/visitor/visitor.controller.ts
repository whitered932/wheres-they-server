import {
  Controller,
  Body,
  Param,
  Query,
  HttpCode,
  Get,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { visitorDto, updateVisitorDto, patchVisitorDto } from './visitor.dto';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Посетители')
@Controller('visitors')
export class VisitorController {
  constructor(private visitorService: VisitorService) {}

  @Get()
  getAll(@Query('relations') relations) {
    return this.visitorService.getAll(relations);
  }

  @Get(':id')
  getById(@Param('id') id: number, @Query('relations') relations) {
    return this.visitorService.getById(id, relations);
  }

  @Post()
  @ApiBody({ type: [visitorDto] })
  create(@Body() visitor: visitorDto) {
    return this.visitorService.create(visitor);
  }

  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: patchVisitorDto })
  @HttpCode(200)
  async patch(@Param('id') id: number, @Body() visitorDto: patchVisitorDto) {
    return this.visitorService.patch(id, visitorDto);
  }

  @Patch(':id/restore')
  restore(@Param('id') id: number) {
    return this.visitorService.restore(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.visitorService.delete(id);
  }
}
