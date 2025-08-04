import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/PresentationLauncher.css';

function PresentationLauncher() {
  const iframeRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for messages from the iframe
    const handleMessage = (event) => {
      if (event.data.type === 'slideInfo') {
        setCurrentSlide(event.data.currentSlide);
        setTotalSlides(event.data.totalSlides);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const sendCommand = (command) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ command }, '*');
    }
  };

  const handleKeyPress = (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case ' ':
        sendCommand('next');
        break;
      case 'ArrowLeft':
        sendCommand('prev');
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 'Escape':
        if (document.fullscreenElement) {
          document.exitFullscreen();
          setIsFullscreen(false);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <motion.div 
      className="presentation-launcher"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="launcher-header">
        <div className="header-content">
          <div className="title-section">
            <h1 className="launcher-title">AI Acumen Program</h1>
            <p className="launcher-subtitle">Professional Training Presentation</p>
          </div>
          
          <div className="presentation-controls">
            <div className="slide-counter">
              <span className="slide-label">Slide</span>
              <span className="slide-numbers">{currentSlide} / {totalSlides || '...'}</span>
            </div>
            
            <div className="control-group">
              <button 
                className="control-btn"
                onClick={() => sendCommand('prev')}
                title="Previous Slide (← Arrow)"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <button 
                className="control-btn play-btn"
                onClick={() => sendCommand('play')}
                title="Play Presentation"
              >
                <i className="fas fa-play"></i>
              </button>
              
              <button 
                className="control-btn"
                onClick={() => sendCommand('next')}
                title="Next Slide (→ Arrow)"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              
              <div className="control-separator"></div>
              
              <button 
                className="control-btn fullscreen-btn"
                onClick={toggleFullscreen}
                title="Toggle Fullscreen (F)"
              >
                <i className={`fas fa-${isFullscreen ? 'compress' : 'expand'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="presentation-container">
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner">
              <i className="fas fa-spinner fa-spin"></i>
            </div>
            <p className="loading-text">Loading presentation...</p>
          </div>
        )}
        
        <iframe
          ref={iframeRef}
          src="/enhanced-presentation/powerpoint-style-ai-acumen.html"
          className="presentation-iframe"
          title="AI Acumen Presentation"
          onLoad={() => {
            setIsLoading(false);
            // Request initial slide info when iframe loads
            setTimeout(() => sendCommand('getInfo'), 100);
          }}
        />
      </div>

      <div className="keyboard-hints">
        <motion.div 
          className="hint-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="hint">
            <kbd>←</kbd><kbd>→</kbd>
            <span>Navigate</span>
          </div>
          <div className="hint">
            <kbd>Space</kbd>
            <span>Next slide</span>
          </div>
          <div className="hint">
            <kbd>F</kbd>
            <span>Fullscreen</span>
          </div>
          <div className="hint">
            <kbd>Esc</kbd>
            <span>Exit fullscreen</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PresentationLauncher;