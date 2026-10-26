import React from 'react';

interface PKLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'gold';
  showText?: boolean;
}

export const ORIGINAL_LOGO_SRC = '/assets/aistudio/logo___2222222_02a0a16d.jpeg';

export const PKLogo: React.FC<PKLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
  showText = true,
}) => {
  const sizeConfig = {
    sm: {
      img: 'w-10 h-10',
      title: 'text-sm sm:text-base',
      sub: 'text-[9px]',
    },
    md: {
      img: 'w-12 h-12 sm:w-14 sm:h-14',
      title: 'text-base sm:text-lg',
      sub: 'text-[10px] sm:text-[11px]',
    },
    lg: {
      img: 'w-16 h-16 sm:w-20 sm:h-20',
      title: 'text-lg sm:text-xl',
      sub: 'text-xs',
    },
    xl: {
      img: 'w-24 h-24 sm:w-28 sm:h-28',
      title: 'text-xl sm:text-2xl',
      sub: 'text-xs sm:text-sm',
    },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Original uploaded logo image with preserved 1:1 proportions */}
      <div className={`relative ${sizeConfig.img} shrink-0 rounded-lg overflow-hidden border border-amber-500/40 shadow-lg bg-[#0B192C]`}>
        <img
          src={ORIGINAL_LOGO_SRC}
          alt="PK Constructions - We Build Your Dream House"
          className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-105"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div
            className={`font-extrabold tracking-wider font-heading leading-tight ${
              variant === 'dark' ? 'text-slate-950' : 'text-white'
            } ${sizeConfig.title}`}
          >
            PK <span className="text-amber-400">CONSTRUCTIONS</span>
          </div>
          <div
            className={`tracking-widest uppercase font-semibold text-amber-400/95 mt-0.5 ${sizeConfig.sub}`}
          >
            We Build Your Dream House
          </div>
        </div>
      )}
    </div>
  );
};
