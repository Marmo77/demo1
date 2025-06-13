import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import hero1 from '../../assets/imgs/hero_img/1.jpg'
import hero2 from '../../assets/imgs/hero_img/2.jpg'
import hero3 from '../../assets/imgs/hero_img/3.jpg'
import hero4 from '../../assets/imgs/hero_img/4.jpg'


const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    hero1,
    hero2,
    hero3,
    hero4,
  ]
  // const befImg = '../../assets/imgs/hero_img/'
  // const images: string[] = [];
  // for(let i = 1 ; i <= 4; i++){
  //   images.push(befImg+i+".jpg")
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden" id='#'>
      {/* Background gallery with blur effect */}
      <div className="absolute inset-0">
        {images.map((img, x) => (
          <div 
            key={x}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImage === x ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center filter blur-sm"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-secondary/70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-contrast font-Lexend mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block">PROFESJONALNE</span>
            <span className="text-highlight">DIAGNOSTYKA SAMOCHODOWA</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-light mb-10 max-w-2xl mx-auto font-Inter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Nowoczesne rozwiązania i ekspercka wiedza dla Twojego pojazdu
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <button className="bg-action hover:bg-action/90 text-light font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              UMÓW DIAGNOSTYKĘ
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Gallery indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentImage === i 
                ? 'bg-highlight w-8' 
                : 'bg-light/30 hover:bg-light/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;