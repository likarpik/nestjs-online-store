import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
