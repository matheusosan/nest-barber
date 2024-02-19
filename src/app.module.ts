import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { typeOrmConfig } from 'typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ScheduleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
