// Loads an image straight from its URL.
// If the URL ever fails, it swaps to a picsum.photos placeholder so the layout never breaks.
export default function Img({ src, alt, className }) {
  const fallback = `https://picsum.photos/seed/${encodeURIComponent(alt)}/900/700`

  function handleError(e) {
    const img = e.currentTarget
    if (img.dataset.fallback) return
    img.dataset.fallback = '1'
    img.src = fallback
  }

  return <img className={className} src={src} alt={alt} loading="lazy" onError={handleError} />
}
