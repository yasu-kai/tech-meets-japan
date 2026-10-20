import { generatedEditorialImage } from "@/lib/generatedEditorial";

export default function GeneratedEditorialImage({ slug, alt = "", priority = false }: {
  slug: string; alt?: string; priority?: boolean;
}) {
  const image = generatedEditorialImage(slug);
  if (!image) return null;
  return <img src={image.src} alt={alt} width={image.width} height={image.height}
    loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"}
    className="generated-editorial-media" data-editorial-slug={slug}/>;
}
