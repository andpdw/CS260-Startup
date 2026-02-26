import React from 'react';
import './camera.css'

import { Stream } from './stream';

export function Camera() {
  return (
    <main>
        <div className="video-title">
            <h2>Live Feed</h2>
        </div>
        <Stream/>
    </main>
  );
}