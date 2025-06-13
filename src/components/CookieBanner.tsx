import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
    // Initialize analytics here
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-md bg-surface border border-highlight rounded-xl shadow-lg p-4 z-50">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-contrast mb-2">Pliki cookies</h3>
        <button onClick={() => setVisible(false)} className="text-light">
          <FiX />
        </button>
      </div>
      <p className="text-light text-sm mb-4">
        Używamy plików cookies do poprawy działania strony i analizy ruchu.
        <a href="/polityka-prywatnosci" className="text-highlight hover:underline ml-1">
          Polityka prywatności
        </a>
      </p>
      <div className="flex gap-2">
        <button 
          onClick={acceptCookies}
          className="bg-highlight text-primary py-2 px-4 rounded-lg text-sm font-medium"
        >
          Akceptuję
        </button>
        <button 
          onClick={() => setVisible(false)}
          className="border border-light text-light py-2 px-4 rounded-lg text-sm"
        >
          Odrzuć
        </button>
      </div>
    </div>
  );
};
export default CookieBanner;