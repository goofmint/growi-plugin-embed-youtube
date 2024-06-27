import innerText from 'react-innertext';

import './EmbedYouTube.css';

const getYouTubeId = (href: string): string | null => {
  try {
    const url = new URL(href);
    const videoId = url.searchParams.get('v');
    if (videoId) return videoId;
  } catch (e) {
  }
  return null;
};

export const EmbedYouTube = (A: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, href, ...props }) => {
    const videoId = getYouTubeId(href);
    if (!videoId) {
      return (
        <>
          <A {...props}>{children}</A>
        </>
      );
    }
    return (
      <div className="youtube">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
};
