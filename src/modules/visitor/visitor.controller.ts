import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { visitorDto, updateVisitorDto, patchVisitorDto } from './visitor.dto';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Посетители')
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
  @ApiBody({ type: [visitorDto] })
  create(@Body() visitor: visitorDto) {
    return this.visitorService.create(visitor);
  }

  // TODO: В случае отстуствия изменений = код 204
  // TODO: Реализовать Put метод, который обновляет ВСЮ сущность
  @Put(':id')
  @ApiBody({ type: updateVisitorDto })
  fullUpdate(@Param('id') id: number, @Body() visitor: updateVisitorDto) {
    return this.visitorService.update(id, visitor);
  }

  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiQuery({ type: patchVisitorDto })
  update(@Param('id') id: number, @Query() query: patchVisitorDto) {
    return this.visitorService.patch(id, query);
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
