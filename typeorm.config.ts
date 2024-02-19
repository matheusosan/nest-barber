import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/modules/schedule/entities/schedule.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5556,
  username: 'dev_user',
  password: 'dev_password',
  database: 'dev_database',
  synchronize: true,
  entities: [User],
};
