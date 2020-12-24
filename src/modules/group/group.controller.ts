import {
  Controller,
  Body,
  Param,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDto } from './group.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Группы')
@Controller('groups')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get()
  getAll() {
    return this.groupService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.groupService.getById(id);
  }

  @Post()
  create(@Body() group: GroupDto) {
    return this.groupService.create(group);
  }

  @Put(':id')
  update(@Param('id') id, @Body() data: GroupDto) {
    return this.groupService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.groupService.delete(id);
  }
}
