import { render, screen } from '@testing-library/react'
import App from './App.tsx'

describe('App', () => {
  it('renders the application shell', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Web App' })).toBeInTheDocument()
    expect(screen.getByText(/base application shell/i)).toBeInTheDocument()
  })
})
