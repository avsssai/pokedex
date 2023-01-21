export default function Image({ src, className, alt }: { src: string; className?: string; alt: string }) {
	return <img src={src} className={`block w-full h-full border-dotted ${className}`} />;
}
