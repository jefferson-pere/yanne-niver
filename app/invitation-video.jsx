'use client';
import { useEffect, useRef, useState } from 'react';

export default function InvitationVideo() {
  const videoRef = useRef(null);
  const [unavailable, setUnavailable] = useState(false);
  const [showSound, setShowSound] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => { if (preference.matches) video.pause(); };
    video.muted = false;
    if (!preference.matches) video.play().catch(() => { if (!video.error) setShowPlay(true); });
    else setShowPlay(true);
    if (video.error) setUnavailable(true);
    if (video.readyState >= 2) setShowSound(video.muted);
    preference.addEventListener('change', onChange);
    return () => preference.removeEventListener('change', onChange);
  }, []);
  async function retry() {
    const video = videoRef.current;
    setUnavailable(false);
    setShowSound(false);
    video.load();
    try { await video.play(); } catch { if (video.error) setUnavailable(true); }
  }
  async function enableSound() {
    const video = videoRef.current;
    video.muted = false;
    try { await video.play(); } catch { if (!video.error) setShowPlay(true); }
  }
  async function playVideo() {
    const video = videoRef.current;
    video.muted = false;
    try { await video.play(); } catch { if (video.error) setUnavailable(true); }
  }
  return <div className="video-frame">
    <video ref={videoRef} id="invitation-video" controls playsInline preload="metadata" hidden={unavailable}
      aria-label="Vídeo do convite de aniversário" onError={() => setUnavailable(true)}
      onPlaying={() => setShowPlay(false)}
      onLoadedData={() => { setUnavailable(false); setShowSound(videoRef.current.muted); }}
      onVolumeChange={() => setShowSound(videoRef.current.muted)}>
      <source src="/videos/convite.mp4" type="video/mp4" onError={() => setUnavailable(true)} />
      Seu navegador não suporta vídeo. <a href="/videos/convite.mp4">Abra o convite aqui.</a>
    </video>
    {unavailable && <div className="placeholder">
      <p role="status">O vídeo está indisponível no momento. Você pode tentar novamente.</p>
      <button className="player-button" type="button" onClick={retry}>Tentar novamente</button>
    </div>}
    {!unavailable && showPlay && <button className="player-button play" type="button" onClick={playVideo}>Reproduzir convite</button>}
    {!unavailable && !showPlay && showSound && <button className="player-button sound" type="button" onClick={enableSound}>Ativar som</button>}
  </div>;
}
