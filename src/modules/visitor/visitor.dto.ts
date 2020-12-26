import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class VisitorDto {
  @ApiProperty({ description: 'Имя посетителя', default: 'Павел Дуров' })
  name: string;
  @ApiProperty({ description: 'Дата рождения', default: '1984-8-10' })
  birthday: Date;
  @ApiPropertyOptional({ description: 'Группа посетителя' })
  group?: string;
}

export class updateVisitorDto {
  @ApiProperty({ description: 'Имя посетителя', default: 'Павел Дуров' })
  name!: string;
  @ApiProperty({ description: 'Дата рождения', default: '1984-8-10' })
  birthday!: Date;
}

export class PatchVisitorDto {
  @ApiPropertyOptional({ description: 'Имя посетителя', default: 'Павел Дуров' })
  name?: string;
  @ApiPropertyOptional({ description: 'Дата рождения', default: '1984-8-10' })
  birthday?: Date;
  @ApiPropertyOptional({ description: 'Группа посетителя' })
  group?: string;
}
