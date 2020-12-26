import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class visitorTypeDto {
  @ApiPropertyOptional({ description: 'Название типа', default: 'Программист' })
  title: string;
  @ApiPropertyOptional({
    description: 'Описание типа',
    default: 'Раб галерный',
  })
  description: string;
}

export class addVisitorTypeDto {
  @ApiProperty({
    description: 'ID пользователя у которого нужно удалить/добавить тип',
  })
  visitor: number;
  @ApiPropertyOptional({
    description: 'Удалить - true\nДобавить - false',
    default: false,
  })
  remove?: boolean;
}
