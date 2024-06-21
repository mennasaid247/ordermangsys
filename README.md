// orders.service.ts

import { Prisma } from '@prisma/client';

export class OrdersService {
  constructor(private prisma: PrismaClient) {}

  async getOrderById(orderId: number) {
    try {
      const order = await this.prisma.order.findUnique({
        where: {
          id: orderId, // Ensure orderId is passed as a number
        },
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      });
      return order;
    } catch (error) {
      throw new Error(`Failed to get order by ID: ${error.message}`);
    }
  }
}
# ordermangsys
