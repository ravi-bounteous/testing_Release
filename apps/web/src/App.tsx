import { Header } from './components/Header.tsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header title="Web App" />
      <main className="mx-auto max-w-5xl p-6">
        <p>Welcome. This is the base application shell.</p>
      </main>
    </div>
  )
}
