import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FindVisitDto {
  @ApiPropertyOptional({ description: 'Начальная дата поиска' })
  start: Date;
  @ApiPropertyOptional({ description: 'Конечная дата поиска' })
  end: Date;
  @ApiPropertyOptional({
    description: 'ID пользователя, по которому происходит поиск',
  })
  visitorId: number;
}

export class CreateVisitDto {
  @ApiPropertyOptional({ description: 'Дата посещения' })
  date: string;
  @ApiProperty({ description: 'ID посетителя' })
  visitorId: number;
}
