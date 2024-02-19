import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
