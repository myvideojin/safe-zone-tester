import { useToolUsage } from './hooks/useToolUsage';
import React, { useState, useRef, useEffect } from 'react';
import ToolFAQ from './components/ToolFAQ';

import BrandedNav from './components/BrandedNav';
import BrandedFooter from './components/BrandedFooter';
import { 
  Upload, Play, Pause, Volume2, VolumeX, Maximize, 
  Download, Settings, Smartphone, Video, Camera, Type, Image as ImageIcon,
  SkipBack, SkipForward, Repeat
} from 'lucide-react';
import { TikTokOverlay, ReelsOverlay, ShortsOverlay, DeviceSafeZone } from './components/PlatformOverlays';

export default function SafeZoneTester() {
  const { checkUsage, incrementUsage } = useToolUsage();

  const faqs = [
  {
    "question": "What platforms are supported by the Safe Zone Tester?",
    "answer": "We currently support accurate UI overlays for TikTok, Instagram Reels, and YouTube Shorts."
  },
  {
    "question": "Are the UI overlays up to date?",
    "answer": "Yes, we regularly update our overlay masks to match the latest app interface changes on iOS and Android."
  },
  {
    "question": "Can I export the video with the overlay?",
    "answer": "No, the Safe Zone Tester is purely a preview tool to help you adjust your original edits."
  },
  {
    "question": "Does it work on mobile browsers?",
    "answer": "Yes, you can test your videos directly from your phone browser, though a desktop is recommended for detailed viewing."
  },
  {
    "question": "Is my video uploaded to a server?",
    "answer": "No, the preview is generated entirely in your browser using local files for instant feedback and privacy."
  }
];

  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  
  // Video state
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLooping, setIsLooping] = useState(true);
  const [videoDimensions, setVideoDimensions] = useState(null);

  // Overlay state
  const [activePlatform, setActivePlatform] = useState('tiktok'); // 'tiktok', 'reels', 'shorts', 'none'
  const [overlayOpacity, setOverlayOpacity] = useState(100);
  const [showSafeZone, setShowSafeZone] = useState(true);
  const [fitMode, setFitMode] = useState('contain'); // 'contain' or 'cover'

  // Handle file upload
  const handleFileChange = (e) => {
    if (!checkUsage()) {
      alert("Daily limit reached. Free users can process tools 3 times a day. Please upgrade for unlimited access.");
      return;
    }
    incrementUsage();
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('video/')) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setVideoUrl(url);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (!checkUsage()) {
      alert("Daily limit reached. Free users can process tools 3 times a day. Please upgrade for unlimited access.");
      return;
    }
    incrementUsage();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('video/')) {
      setFile(droppedFile);
      const url = URL.createObjectURL(droppedFile);
      setVideoUrl(url);
    }
  };

  // Video controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleScrub = (e) => {
    if (videoRef.current) {
      const scrubTime = (e.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = scrubTime;
      setProgress(e.target.value);
    }
  };

  const stepFrame = (forward) => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      // Approximate 30fps = 0.033s per frame
      videoRef.current.currentTime += forward ? 0.033 : -0.033;
    }
  };

  const onLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDimensions({
        width: videoRef.current.videoWidth,
        height: videoRef.current.videoHeight,
        aspectRatio: (videoRef.current.videoWidth / videoRef.current.videoHeight).toFixed(2)
      });
    }
  };

  // Export frame
  const captureFrame = () => {
    if (!videoRef.current || !videoDimensions) return;
    
    // Create a temporary canvas
    const canvas = document.createElement('canvas');
    canvas.width = videoDimensions.width;
    canvas.height = videoDimensions.height;
    const ctx = canvas.getContext('2d');
    
    // Draw the video frame
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    
    // Note: To draw the overlays onto the canvas reliably without external libraries,
    // we would need to draw SVGs manually. For now, we export just the video frame
    // and instruct the user that this is the base frame. A full composite requires html2canvas.
    // We will simulate drawing a "Watermark" for the safe zone export.
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.fillText(`VideoJIN Safe Zone Tester - ${activePlatform.toUpperCase()}`, 20, canvas.height - 18);
    
    // Download
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `videojin-frame-${Date.now()}.png`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12">
      
            <script type="application/ld+json">
        {JSON.stringify({'@context': 'https://schema.org', '@graph': [{'@type': 'SoftwareApplication', 'name': 'Videojin Safe Zone Tester', 'applicationCategory': 'MultimediaApplication', 'operatingSystem': 'All', 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'USD'}}, {'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'What platforms are supported by the Safe Zone Tester?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'We currently support accurate UI overlays for TikTok, Instagram Reels, and YouTube Shorts.'}}, {'@type': 'Question', 'name': 'Are the UI overlays up to date?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Yes, we regularly update our overlay masks to match the latest app interface changes on iOS and Android.'}}, {'@type': 'Question', 'name': 'Can I export the video with the overlay?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'No, the Safe Zone Tester is purely a preview tool to help you adjust your original edits.'}}, {'@type': 'Question', 'name': 'Does it work on mobile browsers?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Yes, you can test your videos directly from your phone browser, though a desktop is recommended for detailed viewing.'}}, {'@type': 'Question', 'name': 'Is my video uploaded to a server?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'No, the preview is generated entirely in your browser using local files for instant feedback and privacy.'}}]}, {'@type': 'HowTo', 'name': 'How to Test Video Safe Zones for Social Media', 'step': [{'@type': 'HowToStep', 'name': 'Upload Vertical Video', 'text': 'Upload your 9:16 aspect ratio video destined for TikTok, Reels, or Shorts.'}, {'@type': 'HowToStep', 'name': 'Select Platform Overlays', 'text': 'Toggle UI overlays for TikTok, Instagram Reels, and YouTube Shorts to see how they fit.'}, {'@type': 'HowToStep', 'name': 'Preview & Adjust', 'text': 'Instantly see if your captions, faces, or important graphics are blocked by platform buttons.'}, {'@type': 'HowToStep', 'name': 'Export or Re-edit', 'text': 'Make necessary adjustments in your editor and re-upload to ensure perfect visibility.'}]}]})}
      </script>
      <BrandedNav />
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
              <Smartphone className="text-blue-500" /> Platform Safe Zone Tester
            </h1>
            <p className="text-gray-400 font-medium">Verify your vertical video UI overlaps before publishing.</p>
          </div>
          {videoUrl && (
            <button 
              onClick={() => { setFile(null); setVideoUrl(null); }}
              className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full font-bold text-sm transition-colors border border-white/10"
            >
              Upload New Video
            </button>
          )}
        </div>

        {!videoUrl ? (
          <div 
            className="w-full max-w-3xl mx-auto h-[60vh] border-2 border-dashed border-white/10 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center hover:bg-white/5 hover:border-blue-500/50 transition-all cursor-pointer group"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <input 
              type="file" 
              id="video-input" 
              accept="video/*" 
              className="hidden" 
              onChange={handleFileChange}
            />
            <label htmlFor="video-input" className="cursor-pointer flex flex-col items-center w-full h-full justify-center">
              <div className="w-20 h-20 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Upload size={32} />
              </div>
              <h2 className="text-2xl font-black mb-2">Select a Vertical Video</h2>
              <p className="text-gray-400 max-w-sm">Drag and drop your .mp4 or .mov file here to preview UI overlaps.</p>
              <div className="mt-8 px-4 py-2 bg-white/5 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest">
                Local Processing Only • Zero Uploads
              </div>
            </label>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Preview Area */}
            <div className="flex-1 flex flex-col items-center">
              {/* Phone Container Mockup */}
              <div className="relative w-[360px] h-[780px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden shrink-0">
                {/* Video Element */}
                <video 
                  ref={videoRef}
                  src={videoUrl}
                  className={`w-full h-full ${fitMode === 'cover' ? 'object-cover' : 'object-contain bg-zinc-900'}`}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={onLoadedMetadata}
                  loop={isLooping}
                  muted={isMuted}
                  playsInline
                />

                {/* Overlays */}
                {activePlatform === 'tiktok' && <TikTokOverlay opacity={overlayOpacity} />}
                {activePlatform === 'reels' && <ReelsOverlay opacity={overlayOpacity} />}
                {activePlatform === 'shorts' && <ShortsOverlay opacity={overlayOpacity} />}
                
                {showSafeZone && <DeviceSafeZone opacity={overlayOpacity} />}
              </div>

              {/* Transport Controls */}
              <div className="w-full max-w-[360px] mt-6 bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => stepFrame(false)} className="p-2 text-gray-400 hover:text-white"><SkipBack size={20} /></button>
                  <button onClick={togglePlay} className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                    {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                  </button>
                  <button onClick={() => stepFrame(true)} className="p-2 text-gray-400 hover:text-white"><SkipForward size={20} /></button>
                </div>
                
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={progress}
                  onChange={handleScrub}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                
                <div className="flex justify-between mt-4">
                  <button onClick={() => setIsMuted(!isMuted)} className={`p-2 rounded-lg ${isMuted ? 'text-red-400 bg-red-400/10' : 'text-gray-400 hover:text-white'}`}>
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <button onClick={() => setIsLooping(!isLooping)} className={`p-2 rounded-lg ${isLooping ? 'text-blue-400 bg-blue-400/10' : 'text-gray-400 hover:text-white'}`}>
                    <Repeat size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Settings */}
            <div className="w-full lg:w-[350px] space-y-6">
              
              {/* Platform Selector */}
              <div className="glass-card p-6 rounded-3xl border border-white/10 bg-white/5">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                  <Settings size={16} /> Target Platform
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['tiktok', 'reels', 'shorts', 'none'].map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setActivePlatform(platform)}
                      className={`py-3 rounded-xl font-bold capitalize text-sm transition-all border ${
                        activePlatform === platform 
                          ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' 
                          : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visibility Controls */}
              <div className="glass-card p-6 rounded-3xl border border-white/10 bg-white/5">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                  <ImageIcon size={16} /> Overlay Visibility
                </h3>
                
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span>Opacity</span>
                    <span className="text-blue-400">{overlayOpacity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={overlayOpacity}
                    onChange={(e) => setOverlayOpacity(e.target.value)}
                    className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                <label className="flex items-center justify-between cursor-pointer p-3 bg-black/40 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3">
                    <Smartphone size={18} className="text-gray-400" />
                    <span className="font-bold text-sm">Device Safe Areas</span>
                  </div>
                  <div className={`w-10 h-5 rounded-full p-1 transition-colors ${showSafeZone ? 'bg-blue-600' : 'bg-white/20'}`}>
                    <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${showSafeZone ? 'translate-x-5' : 'translate-x-0'}`} />
                  </div>
                  <input type="checkbox" checked={showSafeZone} onChange={() => setShowSafeZone(!showSafeZone)} className="hidden" />
                </label>
              </div>

              {/* Video Properties */}
              <div className="glass-card p-6 rounded-3xl border border-white/10 bg-white/5">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                  <Video size={16} /> Video Properties
                </h3>
                
                {videoDimensions && (
                  <div className="flex items-center justify-between mb-4 p-3 bg-black/40 rounded-xl border border-white/5">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Resolution</span>
                    <span className="font-mono font-bold">{videoDimensions.width}x{videoDimensions.height}</span>
                  </div>
                )}
                {videoDimensions && (
                  <div className="flex items-center justify-between mb-6 p-3 bg-black/40 rounded-xl border border-white/5">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Aspect Ratio</span>
                    <span className={`font-mono font-bold ${videoDimensions.aspectRatio > 0.6 ? 'text-amber-400' : 'text-green-400'}`}>
                      {videoDimensions.width / videoDimensions.height > 0.6 ? 'Warning: Not 9:16' : '9:16 Optimal'}
                    </span>
                  </div>
                )}

                <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
                  <button 
                    onClick={() => setFitMode('contain')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${fitMode === 'contain' ? 'bg-white/10 text-white shadow-sm' : 'text-gray-500 hover:text-white'}`}
                  >
                    Contain (Letterbox)
                  </button>
                  <button 
                    onClick={() => setFitMode('cover')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${fitMode === 'cover' ? 'bg-white/10 text-white shadow-sm' : 'text-gray-500 hover:text-white'}`}
                  >
                    Cover (Crop)
                  </button>
                </div>
              </div>

              {/* Export Button */}
              <button 
                onClick={captureFrame}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <Download size={18} /> Capture Preview Frame
              </button>

            </div>
          </div>
        )}
      </div>

        {/* SEO Sections */}
        <div className="mt-24 space-y-24">
          {/* How It Works */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">How to Test Video Safe Zones for Social Media</h2>
            <div className="grid md:grid-cols-4 gap-6">
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/20">1</div>
                <h3 className="text-xl font-bold mb-3 text-emerald-400 mt-2">Upload Vertical Video</h3>
                <p className="text-gray-400">Upload your 9:16 aspect ratio video destined for TikTok, Reels, or Shorts.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20">2</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400 mt-2">Select Platform Overlays</h3>
                <p className="text-gray-400">Toggle UI overlays for TikTok, Instagram Reels, and YouTube Shorts to see how they fit.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">3</div>
                <h3 className="text-xl font-bold mb-3 text-indigo-400 mt-2">Preview & Adjust</h3>
                <p className="text-gray-400">Instantly see if your captions, faces, or important graphics are blocked by platform buttons.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/20">4</div>
                <h3 className="text-xl font-bold mb-3 text-purple-400 mt-2">Export or Re-edit</h3>
                <p className="text-gray-400">Make necessary adjustments in your editor and re-upload to ensure perfect visibility.</p>
              </div>
            </div>
          </section>

          {/* Feature Breakdown */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Why Use Our Safe Zone Tester?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-[#0f172a] rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold mb-4">Accurate Platform UI Overlays</h3>
                <p className="text-gray-400">Always up-to-date interface overlays for TikTok, IG Reels, and YouTube Shorts.</p>
              </div>
              <div className="bg-[#0f172a] rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold mb-4">Multi-Platform Toggle</h3>
                <p className="text-gray-400">Switch between different social media interfaces with a single click to ensure cross-platform compatibility.</p>
              </div>
              <div className="bg-[#0f172a] rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold mb-4">No Rendering Required</h3>
                <p className="text-gray-400">Test your videos instantly in the browser without waiting for slow server renders.</p>
              </div>
              <div className="bg-[#0f172a] rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold mb-4">100% Free to Use</h3>
                <p className="text-gray-400">Ensure your content looks perfect without any paywalls or subscriptions.</p>
              </div>
            </div>
          </section>

          {/* Platform-Specific Use Cases */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Built for Content Creators & Professionals</h2>
            <div className="space-y-6">
              
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">Social Media Managers</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-400">Ensure brand logos and burned-in captions are never obscured by the TikTok like button or Reels caption box.</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">Video Editors</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-400">Preview your final cuts exactly how they will appear on a mobile screen before delivering to clients.</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">Content Creators</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-400">Maximize engagement by ensuring your visual hooks are placed perfectly in the center safe zones.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      <ToolFAQ faqs={faqs} />
      <BrandedFooter />
    </div>
  );
}
