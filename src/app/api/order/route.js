// app/api/order/route.js

import { NextResponse } from 'next/server'

export async function POST(request) {
  const data = await request.json()

  console.log('🥖 New Order:', data)

  return NextResponse.json({ message: 'Order received', received: data })
}
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const orderId = searchParams.get('orderId')

  console.log('🥖 Fetching Order:', orderId)

  return NextResponse.json({ message: 'Order fetched', orderId })
} 