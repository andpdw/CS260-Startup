import React from 'react';
import './camera.css'

export function Camera() {
  return (
    <main>
        <div className="video-title">
            <h2>Live Feed</h2>
        </div>
        <div className="video">
            <video src="motionImage37.mp4" controls></video>
        </div>
    </main>
  );
}