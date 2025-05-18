import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
