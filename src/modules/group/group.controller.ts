import {
  Controller,
  Body,
  Param,
  Query,
  Delete,
  Get,
  Post,
  Patch,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto, PatchGroupDto } from './group.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Группы')
@Controller('groups')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get()
  getAll(@Query('relations') relations) {
    return this.groupService.getAll(relations);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID группы' })
  getById(@Param('id') id: number, @Query('relations') relations) {
    return this.groupService.getById(id, relations);
  }

  @Post()
  @ApiBody({ type: [CreateGroupDto] })
  create(@Body() group: CreateGroupDto) {
    return this.groupService.create(group);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', description: 'ID группы' })
  @ApiBody({ type: PatchGroupDto })
  patch(@Param('id') id, @Body() data: PatchGroupDto) {
    return this.groupService.patch(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'ID группы' })
  delete(@Param('id') id) {
    return this.groupService.delete(id);
  }
}
