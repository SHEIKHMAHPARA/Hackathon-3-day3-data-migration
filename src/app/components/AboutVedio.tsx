// About Video
"use client"
import React from "react";

function VideoCard() {
  return (
    <div >
     
      <div className="lg:max-h align-middle container mx-auto w-auto">
        <div className="py-8 px-8 mg-20 text-center">
          <video className="rounded-lg shadow-lg align-middle" height={700} controls loop autoPlay >
            <source src="/Vedio Clip.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
     
    </div>
  );
}

export default VideoCard;