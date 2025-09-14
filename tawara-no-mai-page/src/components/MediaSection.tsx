import Image from "next/image";

const MediaSection = () => {
  return (
    <section id="media" className="py-20">
      <h3 className="text-4xl font-bold text-center mb-12 font-display">MEDIA</h3>
      {/* プロモーションビデオ */}
      <div className="aspect-video mb-12">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID" // あなたのYouTube動画ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* スクリーンショット */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Image src="/screenshot-1.jpg" alt="Screenshot 1" width={800} height={450} className="rounded-lg" />
        <Image src="/screenshot-2.jpg" alt="Screenshot 2" width={800} height={450} className="rounded-lg" />
        <Image src="/screenshot-3.jpg" alt="Screenshot 3" width={800} height={450} className="rounded-lg" />
      </div>
    </section>
  );
};
export default MediaSection;