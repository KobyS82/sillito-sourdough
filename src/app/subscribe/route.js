import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name, email, plan } = await req.json();

    if (!name || !email || !plan) {
      return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    const subscription = await prisma.subscription.create({
      data: { name, email, plan },
    });

    return Response.json({ message: 'Subscription successful', subscription });
  } catch (err) {
    console.error(err);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
