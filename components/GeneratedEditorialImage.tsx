import { generatedEditorialImage } from "@/lib/generatedEditorial";

export default function GeneratedEditorialImage({ slug, alt = "", priority = false, enabled = true }: {
  slug: string; alt?: string; priority?: boolean; enabled?: boolean;
}) {
  const image = generatedEditorialImage(slug);
  if (!image || !enabled) return null;
  return <img src={image.src} alt={alt} width={image.width} height={image.height}
    loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"}
    className="generated-editorial-media" data-editorial-slug={slug} data-editorial-batch={image.batch}/>;
}
