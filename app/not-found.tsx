import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
      
      <Link href="/" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg mb-8 hover:opacity-90">
        Back to Homepage
      </Link>

      <div className="space-y-2">
        <Link href="/documentation" className="block text-indigo-600 underline hover:no-underline">
          Browse Docs
        </Link>
        <Link href="/contact" className="block text-indigo-600 underline hover:no-underline">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
