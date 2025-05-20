import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AdminPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Admin Order View</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} style={{ marginBottom: '1rem' }}>
              <strong>{order.name}</strong> ordered {order.quantity} loaf(s)
              <br />
              <small>{new Date(order.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
