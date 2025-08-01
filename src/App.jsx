import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PresentationLayout from './components/layout/PresentationLayout'
import HomePage from './pages/HomePage'
import SessionPage from './pages/SessionPage'
import { PresentationProvider } from './lib/PresentationContext'

function App() {
  return (
    <PresentationProvider>
      <div className="min-h-screen bg-dark-bg text-dark-text">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/session/:sessionId" 
              element={
                <PresentationLayout>
                  <SessionPage />
                </PresentationLayout>
              } 
            />
            <Route 
              path="/presentation" 
              element={
                <PresentationLayout>
                  <SessionPage />
                </PresentationLayout>
              } 
            />
          </Routes>
        </AnimatePresence>
      </div>
    </PresentationProvider>
  )
}

export default App