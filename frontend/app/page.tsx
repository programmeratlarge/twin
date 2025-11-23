import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Paul Munn&apos;s AI Twin
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Think of me as an interactive CV for Paul.
          </p>

          <div className="h-[600px]">
            <Twin />
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>I&apos;m a ChatBot that knows all about Paul and can answer questions about him</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
