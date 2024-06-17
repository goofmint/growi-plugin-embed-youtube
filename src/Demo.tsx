import React from 'react';

import ReactDOM from 'react-dom/client';

import { EmbedYouTube } from './EmbedYouTube';

const href = 'https://www.youtube.com/watch?v=1Vxmsa7zhts';

const EmbedYouTubeCode = EmbedYouTube(() => <a href={href}>{href}</a>);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EmbedYouTubeCode
      href={href}
    >{href}</EmbedYouTubeCode>
  </React.StrictMode>,
);
