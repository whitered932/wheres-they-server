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
import { VisitorDto, updateVisitorDto, PatchVisitorDto } from './visitor.dto';
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
  @ApiBody({ type: [VisitorDto] })
  create(@Body() visitor: VisitorDto) {
    return this.visitorService.create(visitor);
  }

  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: PatchVisitorDto })
  @HttpCode(200)
  async patch(@Param('id') id: number, @Body() visitorDto: PatchVisitorDto) {
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
