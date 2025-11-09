import React, { useEffect, useRef } from 'react'
import { PhoneMockupProps } from '../types'
import { gsap } from 'gsap'

const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  src, 
  alt, 
  className = '', 
  delay = 0, 
  rotation = 0 
}) => {
  const phoneRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (phoneRef.current && !document.body.classList.contains('animations-disabled')) {
      const phone = phoneRef.current
      const image = imageRef.current

      // Set initial state
      gsap.set(phone, {
        opacity: 0,
        y: 50,
        rotation: rotation * 2, // Start with double the final rotation
        scale: 0.8
      })

      // Animate phone
      gsap.to(phone, {
        opacity: 1,
        y: 0,
        rotation: rotation,
        scale: 1,
        duration: 1,
        delay: delay,
        ease: "back.out(1.2)"
      })

      // Staggered image animation
      if (image) {
        gsap.set(image, {
          opacity: 0,
          scale: 1.1
        })

        gsap.to(image, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: delay + 0.3,
          ease: "power2.out"
        })
      }
    }
  }, [delay, rotation])

  return (
    <div 
      ref={phoneRef}
      className={`relative ${className}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Phone frame */}
      <div className="relative">
        {/* Phone body */}
        <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
          {/* Screen */}
          <div className="bg-black rounded-[2rem] p-1">
            <div className="bg-white rounded-[1.75rem] overflow-hidden">
              <img
                ref={imageRef}
                src={src}
                alt={alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        {/* Phone details */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-800 rounded-full w-16 h-6"></div>
        </div>
        
        <div className="absolute top-6 right-8">
          <div className="bg-gray-700 rounded w-1 h-8"></div>
        </div>
        
        <div className="absolute top-10 right-8">
          <div className="bg-gray-700 rounded w-1 h-12"></div>
        </div>
        
        <div className="absolute top-14 right-8">
          <div className="bg-gray-700 rounded w-1 h-8"></div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-800 rounded-full w-12 h-1"></div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-[2.5rem] blur-xl -z-10 scale-110"></div>
    </div>
  )
}

export default PhoneMockup
