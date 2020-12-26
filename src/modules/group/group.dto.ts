import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiPropertyOptional({ description: 'Название группы', default: 'Вконтакте' })
  name: string;
  @ApiPropertyOptional({
    description: 'Описание группы',
    default: 'Группа разработчиков Вконтакте',
  })
  description: string;
}


export class PatchGroupDto {
  @ApiPropertyOptional({ description: 'Название группы', default: 'Вконтакте' })
  name: string;
  @ApiPropertyOptional({
    description: 'Описание группы',
    default: 'Группа разработчиков Вконтакте',
  })
  description: string;
}
