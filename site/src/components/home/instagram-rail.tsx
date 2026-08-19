import { getRecentInstagramPosts } from "@/lib/instagram";
import { FadeIn } from "@/components/motion/fade-in";

export async function InstagramRail() {
  const posts = await getRecentInstagramPosts(6);
  if (posts.length === 0) return null;

  return (
    <section className="bg-sand py-16 sm:py-20">
      <FadeIn className="mb-8 text-center">
        <p className="text-lg">
          Follow us on Instagram{"  "}
          <a
            href="https://www.instagram.com/ab_realty_in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-terracotta underline-offset-4 hover:underline"
          >
            @ab_realty_in
          </a>
        </p>
      </FadeIn>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:px-14">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square w-[260px] shrink-0 snap-center overflow-hidden bg-white/60"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.imageUrl}
              alt={post.caption?.slice(0, 140) || "AB Realty on Instagram"}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
            />
            <span className="absolute right-4 bottom-4 rounded-full bg-black/55 px-3.5 py-2 text-xs text-white backdrop-blur-sm">
              View on Instagram
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
