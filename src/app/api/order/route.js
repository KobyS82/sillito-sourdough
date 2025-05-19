import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { name, quantity } = body;

  try {
    const order = await prisma.order.create({
      data: {
        name,
        quantity,
      },
    });

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to create order' }), {
      status: 500,
    });
  }
}
