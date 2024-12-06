# growi-plugin-embed-youtube

## Usage

### Basic

Embed (iframe) YouTube URL. It's responsive.

```markdown
https://www.youtube.com/watch?v=XXXXXXXXXXX
```

#### Notice

If you want to ignore the embed, you can use the URL as `youtu.be` instead of `youtube.com`.

### Advanced

You can set the width and height of the iframe. And you can set the start time of the video.

```markdown
// Basic
::youtube[YOUTUBE_VIDEO_ID]

// Advanced
::youtube[YOUTUBE_VIDEO_ID]{width=800 height=400 t=50}
```

YOUTUBE_VIDEO_ID is the video ID of the YouTube URL. It's required.

Every attribute is optional.

## View

Embed (iframe) YouTube URL. It's responsive.

![screenshot](https://github.com/goofmint/growi-plugin-embed-youtube/assets/5709/e4374e27-c9ff-4d5f-aa61-e12d22db0044)

## License

MIT

