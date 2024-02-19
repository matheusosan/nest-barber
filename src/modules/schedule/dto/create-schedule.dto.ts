import { IsNotEmpty } from 'class-validator';

export class CreateScheduleDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  isActive?: boolean;
}
