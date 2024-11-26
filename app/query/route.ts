import { db } from '@vercel/postgres';

export async function GET() {
  const client = await db.connect();

  const result = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return Response.json(result.rows);
}
