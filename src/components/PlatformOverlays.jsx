import React from 'react';
import { 
  Heart, MessageCircle, Bookmark, Share2, Music, 
  Send, MoreHorizontal, Camera, 
  ThumbsUp, ThumbsDown, MessageSquare, Share, Repeat 
} from 'lucide-react';

export const TikTokOverlay = ({ opacity }) => (
  <div 
    className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4"
    style={{ opacity: opacity / 100 }}
  >
    {/* Top Tabs */}
    <div className="flex justify-center items-center gap-4 mt-8">
      <span className="text-white/70 font-bold text-sm drop-shadow-md">Following</span>
      <span className="text-white font-bold text-sm drop-shadow-md border-b-2 border-white pb-1">For You</span>
      <Search className="absolute right-4 text-white drop-shadow-md" size={24} />
    </div>

    {/* Right Actions & Bottom Info */}
    <div className="flex justify-between items-end mb-4">
      {/* Bottom Info */}
      <div className="flex flex-col gap-2 max-w-[70%]">
        <span className="text-white font-bold text-sm drop-shadow-md">@creator_name</span>
        <span className="text-white text-sm drop-shadow-md line-clamp-2">
          This is a sample description for the video. #fyp #viral #trending
        </span>
        <div className="flex items-center gap-2 mt-1">
          <Music size={14} className="text-white drop-shadow-md" />
          <span className="text-white text-xs drop-shadow-md">original sound - creator</span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex flex-col items-center gap-6 mb-2">
        <div className="w-10 h-10 bg-white/20 rounded-full border border-white" />
        <div className="flex flex-col items-center gap-1">
          <Heart size={32} className="text-white drop-shadow-md" fill="white" />
          <span className="text-white text-xs font-bold drop-shadow-md">1.2M</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <MessageCircle size={32} className="text-white drop-shadow-md" fill="white" />
          <span className="text-white text-xs font-bold drop-shadow-md">45K</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Bookmark size={32} className="text-white drop-shadow-md" fill="white" />
          <span className="text-white text-xs font-bold drop-shadow-md">10K</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Share2 size={32} className="text-white drop-shadow-md" fill="white" />
          <span className="text-white text-xs font-bold drop-shadow-md">Share</span>
        </div>
        <div className="w-10 h-10 bg-gray-800 rounded-full border-2 border-gray-600 flex items-center justify-center mt-2 animate-spin-slow">
          <Music size={20} className="text-white" />
        </div>
      </div>
    </div>
  </div>
);

export const ReelsOverlay = ({ opacity }) => (
  <div 
    className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4"
    style={{ opacity: opacity / 100 }}
  >
    {/* Top Bar */}
    <div className="flex justify-between items-center mt-2">
      <span className="text-white font-bold text-xl drop-shadow-md">Reels</span>
      <Camera size={28} className="text-white drop-shadow-md" />
    </div>

    {/* Bottom Section */}
    <div className="flex justify-between items-end mb-4">
      {/* Bottom Info */}
      <div className="flex flex-col gap-3 max-w-[75%]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20" />
          <span className="text-white font-bold text-sm drop-shadow-md">creator_name</span>
          <button className="px-3 py-1 border border-white rounded-lg text-white text-xs font-bold drop-shadow-md">Follow</button>
        </div>
        <span className="text-white text-sm drop-shadow-md">
          Check out this amazing video! Let me know what you think below 👇
        </span>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 rounded-full w-fit">
          <Music size={12} className="text-white" />
          <span className="text-white text-xs">creator_name • Original Audio</span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <Heart size={28} className="text-white drop-shadow-md" />
          <span className="text-white text-xs font-bold drop-shadow-md">500K</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <MessageCircle size={28} className="text-white drop-shadow-md" />
          <span className="text-white text-xs font-bold drop-shadow-md">12K</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Send size={28} className="text-white drop-shadow-md" />
          <span className="text-white text-xs font-bold drop-shadow-md">Share</span>
        </div>
        <MoreHorizontal size={28} className="text-white drop-shadow-md mt-2" />
        <div className="w-8 h-8 bg-white/20 rounded-md border-2 border-white mt-2" />
      </div>
    </div>
  </div>
);

export const ShortsOverlay = ({ opacity }) => (
  <div 
    className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4"
    style={{ opacity: opacity / 100 }}
  >
    {/* Top Icons */}
    <div className="flex justify-end items-center gap-4 mt-2">
      <Search size={24} className="text-white drop-shadow-md" />
      <Camera size={24} className="text-white drop-shadow-md" />
      <MoreHorizontal size={24} className="text-white drop-shadow-md" />
    </div>

    {/* Bottom Section */}
    <div className="flex justify-between items-end mb-4">
      {/* Bottom Info */}
      <div className="flex flex-col gap-2 max-w-[75%]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20" />
          <span className="text-white font-bold text-sm drop-shadow-md">@CreatorChannel</span>
          <button className="px-3 py-1 bg-white text-black rounded-full text-xs font-bold">Subscribe</button>
        </div>
        <span className="text-white text-sm drop-shadow-md line-clamp-2">
          The ultimate vertical video test! #shorts #test
        </span>
      </div>

      {/* Right Actions */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <div className="p-3 bg-black/40 rounded-full">
            <ThumbsUp size={24} className="text-white" fill="white" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">1.5M</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="p-3 bg-black/40 rounded-full">
            <ThumbsDown size={24} className="text-white" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">Dislike</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="p-3 bg-black/40 rounded-full">
            <MessageSquare size={24} className="text-white" fill="white" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">45K</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="p-3 bg-black/40 rounded-full">
            <Share size={24} className="text-white" fill="white" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow-md">Share</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="p-3 bg-black/40 rounded-full">
            <Repeat size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const DeviceSafeZone = ({ opacity }) => (
  <div 
    className="absolute inset-0 pointer-events-none z-30"
    style={{ opacity: opacity / 100 }}
  >
    {/* Red Overlay for unsafe areas */}
    
    {/* Dynamic Island Area */}
    <div className="absolute top-0 w-full h-[60px] bg-red-500/30 flex justify-center items-start pt-2">
      <div className="w-[120px] h-[35px] bg-black rounded-full" />
    </div>

    {/* Bottom Gesture Bar Area */}
    <div className="absolute bottom-0 w-full h-[34px] bg-red-500/30 flex justify-center items-end pb-2">
      <div className="w-[140px] h-[5px] bg-white rounded-full" />
    </div>

    {/* Side margins */}
    <div className="absolute top-0 left-0 w-[4px] h-full bg-red-500/30" />
    <div className="absolute top-0 right-0 w-[4px] h-full bg-red-500/30" />
    
    {/* Safe Zone indicator text */}
    <div className="absolute inset-0 flex items-center justify-center opacity-50">
      <div className="px-4 py-2 border-2 border-red-500 text-red-500 font-bold uppercase tracking-widest text-sm rounded-xl bg-black/40">
        Device Unsafe Areas
      </div>
    </div>
  </div>
);

// Helper icon import
function Search(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
}
