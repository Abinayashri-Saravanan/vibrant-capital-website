import { useEffect, useRef, useCallback } from 'react';

interface VideoOptimizationOptions {
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  onReady?: () => void;
  onError?: () => void;
}

export const useVideoOptimization = (options: VideoOptimizationOptions = {}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    autoPlay = true,
    loop = true,
    muted = true,
    preload = 'auto',
    onReady,
    onError
  } = options;

  const optimizeVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set optimal playback settings
    video.playbackRate = 1.0;
    video.defaultPlaybackRate = 1.0;
    
    // Optimize for smooth playback
    video.style.willChange = 'auto';
    video.style.transform = 'translate3d(0, 0, 0)';
    video.style.backfaceVisibility = 'hidden';
    
    // Attempt to play if autoplay is enabled
    if (autoPlay && video.readyState >= 2) {
      video.play().catch((error) => {
        console.warn('Video autoplay failed:', error);
        onError?.();
      });
    }
  }, [autoPlay, onError]);

  const handleCanPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Fade in video smoothly
    video.style.opacity = '1';
    optimizeVideo();
    onReady?.();
  }, [optimizeVideo, onReady]);

  const handleLoadStart = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start with video hidden
    video.style.opacity = '0';
    video.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  }, []);

  const handleError = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    console.warn('Video failed to load');
    video.style.opacity = '0';
    onError?.();
  }, [onError]);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Prevent memory leaks by clearing will-change after initial load
    if (video.currentTime > 1 && video.style.willChange !== 'auto') {
      video.style.willChange = 'auto';
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video attributes
    video.autoplay = autoPlay;
    video.loop = loop;
    video.muted = muted;
    video.preload = preload;
    video.playsInline = true;

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('error', handleError);
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Initial optimization
    optimizeVideo();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('error', handleError);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [
    autoPlay,
    loop,
    muted,
    preload,
    handleCanPlay,
    handleLoadStart,
    handleError,
    handleTimeUpdate,
    optimizeVideo
  ]);

  return {
    videoRef,
    optimizeVideo
  };
};
