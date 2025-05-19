import Image from "next/image";

export default function Home() {
   return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">Sillito Sourdough</h1>
      <p className="text-xl text-pink-600 mb-6">Fresh Country Loaf for $12</p>
      <a
        href="/order"
        className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-4 rounded-full"
      >
        Order Now
      </a>
    </main>
  );
}
