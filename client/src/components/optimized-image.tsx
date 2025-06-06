import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string) => {
    const formats = ['webp', 'jpg'];
    const sizes = [320, 640, 768, 1024, 1280, 1600];
    
    return formats.map(format => {
      const srcSet = sizes.map(size => 
        `${baseSrc.replace(/\.[^/.]+$/, '')}-${size}w.${format} ${size}w`
      ).join(', ');
      return { format, srcSet };
    });
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width: width || 'auto', height: height || 'auto' }}
        role="img"
        aria-label={alt}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source
        srcSet={generateSrcSet(src)[0]?.srcSet}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* Fallback JPEG format */}
      <source
        srcSet={generateSrcSet(src)[1]?.srcSet}
        sizes={sizes}
        type="image/jpeg"
      />
      
      {/* Main image element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
    </picture>
  );
}