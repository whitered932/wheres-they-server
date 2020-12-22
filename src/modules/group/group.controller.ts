import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDto } from './group.dto';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get()
  getAll() {
    return this.groupService.getAll();
  }

  @Get(':title')
  getByTitle(@Param('title') title: string) {
    return this.groupService.getByTitle(title);
  }

  @Post('create')
  create(@Body() group: GroupDto) {
    return this.groupService.create(group);
  }

  @Put(':title/update')
  update(@Param('title') title, @Body() data: GroupDto) {
    return this.groupService.update(title, data);
  }

  @Delete(':title/delete')
  delete(@Param('title') title) {
    return this.groupService.delete(title);
  }
}
