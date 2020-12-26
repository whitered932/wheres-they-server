import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class visitorTypeDto {
  @ApiPropertyOptional({ description: 'Название типа', default: 'Вконтакте' })
  title: string;
  @ApiPropertyOptional({
    description: 'Описание типа',
    default: 'Комадна разработчиков Вконтакте',
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
