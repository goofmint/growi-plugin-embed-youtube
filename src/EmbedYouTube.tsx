import { h, Properties } from 'hastscript';
import type { Plugin } from 'unified';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';
// import innerText from 'react-innertext';

import './EmbedYouTube.css';

const getYouTubeId = (href: string): string | null => {
  try {
    const url = new URL(href);
    const videoId = url.searchParams.get('v');
    if (videoId) return videoId;
  }
  catch (e) {
    // do nothing
  }
  return null;
};

export const EmbedYouTube = (A: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, href, ...props }) => {
    const videoId = getYouTubeId(href);
    if (!videoId) {
      // check the URL domain is current domain
      try {
        const url = new URL(href);
        console.log({ url });
        if (url.host !== window.location.host) {
          return (
            <>
              <a
                {...props.node.properties}
                target='_blank'
              >{children} <span className="growi-custom-icons">external_link</span></a>
            </>
          );
        } else {
          return (
            <>
              <a {...props.node.properties}>{children}</a>
            </>
          );
        }
      }
      catch (e) {
        return (
          <>
            <a {...props.node.properties}>{children}</a>
          </>
        );
      }
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
      console.log(n);
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
