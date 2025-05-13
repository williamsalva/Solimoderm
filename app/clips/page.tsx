// /app/page.tsx
import Layout from "components/Layout"
import VideoCard from "../../components/VideoCard";
import { getClipList } from "../../data/clips";

export default async function HomePage() {
  const clips = getClipList();

  return (
    <Layout>
   <section className="container mx-auto mt-20 min-h-82 py-20">
      <h1 className="text-center text-5xl sm:text-8xl font-bold">Clips</h1>
      <div className=" my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {clips.map((clip) => (
          <VideoCard key={clip.id} url={clip.url} />
        ))}
      </div>
      </section>
    </Layout>
  );
}
