// Exposes the app's React as window.React so bundle.js can find it.
import * as React from 'react';
if (typeof window !== 'undefined' && !window.React) window.React = React;
