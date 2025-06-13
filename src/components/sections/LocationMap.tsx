import { HiOutlineLocationMarker, HiOutlineClock, HiOutlinePhone } from 'react-icons/hi';

export const LocationMap = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-site mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gdzie Nas Znaleźć</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-96 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.548386139574!2d21.017015315796813!3d52.23208697976097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x5a7eac2441c130d5!2sWarszawa!5e0!3m2!1sen!2spl!4v1620000000000!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              aria-label="Mapa dojazdu do warsztatu Auto-Scan"
            ></iframe>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <HiOutlineLocationMarker className="text-highlight text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Adres</h3>
                  <p className="text-light">ul. Przemysłowa 12</p>
                  <p className="text-light">00-001 Warszawa</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <HiOutlineClock className="text-highlight text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Godziny otwarcia</h3>
                  <p className="text-light">Pon-Pt: 8:00 - 18:00</p>
                  <p className="text-light">Sobota: 9:00 - 14:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <HiOutlinePhone className="text-highlight text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Kontakt</h3>
                  <p className="text-light">882 917 789</p>
                  <p className="text-light">kontakt@auto-scan.pl</p>
                </div>
              </div>
              
              <button className="bg-highlight hover:bg-highlight/90 text-primary font-bold py-3 px-8 rounded-full transition max-w-xs">
                Nawiguj do nas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};