import { ScheduleModule } from './../src/modules/schedule/schedule.module';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../src/modules/schedule/entities/schedule.entity';
import { ScheduleService } from '../src/modules/schedule/schedule.service';
import { Repository } from 'typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let scheduleService: ScheduleService;
  let scheduleRepository: Repository<User>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ScheduleModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5557,
          database: 'test_db',
          password: 'test_password',
          username: 'test_user',
          entities: [User],
          logging: true,
          synchronize: true,
        }),
      ],
      providers: [],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    scheduleRepository = moduleFixture.get('ScheduleRepository');
    scheduleService = new ScheduleService(scheduleRepository);

    afterAll(async () => {
      await app.close();
    });
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .post('/')
      .expect(200)
      .expect('Hello World!');
  });
});
