import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-12 w-12 rounded-full object-cover border-2 border-primary ${className || ''}`}
    />
  );
};

export default Avatar;