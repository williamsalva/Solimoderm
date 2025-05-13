// /components/VideoCard.tsx
type Props = {
    url: string;
  };
  
  export default function VideoCard({ url }: Props) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
        <video
          src={url}
          controls
          muted
          preload="metadata"
          className="w-full aspect-[9/16]"
        />
      </div>
    );
  }
  