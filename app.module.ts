import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    ProductsModule,
    CartsModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
//controllers: [AppController],
  //providers: [AppService],