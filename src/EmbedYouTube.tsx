import { h, Properties } from 'hastscript';
import type { Plugin } from 'unified';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';
// import innerText from 'react-innertext';

import './EmbedYouTube.css';

const getYouTubeId = (href: string): string | null => {
  try {
    // https://www.youtube.com/watch?v=xxxxxxx
    const url = new URL(href);
    if (url.host === 'www.youtube.com' && url.pathname === '/watch') {
      const videoId = url.searchParams.get('v');
      if (videoId) return videoId;
    }
  }
  catch (e) {
    // do nothing
  }
  return null;
};

const renderLink = (properties: any, children: string, text = false): JSX.Element => {
  if (text) {
    return (
      <a {...properties}
        dangerouslySetInnerHTML={{ __html: children }}
      ></a>
    );
  } else {
    return (
      <a {...properties}>
        {children}
      </a>
    );
  }
}

export const EmbedYouTube = (A: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, href, ...props }) => {
    const videoId = getYouTubeId(href);
    if (!videoId) {
      // check the URL domain is current domain
      try {
        // only path is ignored
        if (!href.match(/http.?:\/\//)) {
          return renderLink(props.node.properties, children);
        }
        const url = new URL(href);
        if (url.host !== window.location.host) {
          // External link
          if (typeof children === 'string') {
            return renderLink({...props.node.properties, target: '_blank'}, `${children} <span class="growi-custom-icons">external_link</span>`, true);
          } else {
            return renderLink({...props.node.properties, target: '_blank'}, children);
          }
        } else {
          // Internal link
          return renderLink(props.node.properties, children);
        }
      }
      catch (e) {
        // If an error occurs, return the original component
        return renderLink(props.node.properties, children);
      }
    }
    // if there is a videoId, render the YouTube component
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

interface GrowiNode extends Node {
  name: string;
  data: {
    hProperties?: Properties;
    hName?: string;
    hChildren?: Node[] | { type: string, value: string, url?: string }[];
    [key: string]: any;
  };
  type: string;
  attributes: {[key: string]: string}
  children: GrowiNode[] | { type: string, value: string, url?: string }[];
  value: string;
  title?: string;
  url?: string;
}

export const youtubePlugin: Plugin = () => {
  return (tree: Node) => {
    visit(tree, 'leafDirective', (node: Node) => {
      const n = node as unknown as GrowiNode;
      if (n.name !== 'youtube') return;
      const data = n.data || (n.data = {});
      const id = n.children[0].value;
      const {width, height, t} = n.attributes;
      data.hName = 'iframe';
      data.hChildren = [];
      data.hProperties = {
        src: `https://www.youtube.com/embed/${id}?${t ? '?&amp;start=' + t : ''}`,
        width: width || 560,
        height: height || 315,
        frameBorder: 0,
        allow: 'picture-in-picture',
        allowFullScreen: true
      };
    });
  };
};
