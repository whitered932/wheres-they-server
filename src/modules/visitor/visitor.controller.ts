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

}
