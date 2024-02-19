import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Repository } from 'typeorm';
import { User } from './entities/schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(createScheduleDto: CreateScheduleDto) {
    const { firstName, lastName, isActive } = createScheduleDto;

    try {
      const createdUser = this.repository.create({
        firstName,
        lastName,
        isActive,
      });

      return this.repository.save(createdUser);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
