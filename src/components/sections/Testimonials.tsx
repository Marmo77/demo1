import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Profesjonalna obsługa i uczciwe podejście do klienta. Mój samochód działa jak nowy!",
    author: "Jan Kowalski",
    rating: 5,
    source: "Google"
  },
  {
    quote: "Szybka diagnoza i naprawa w rozsądnej cenie. Polecam każdemu!",
    author: "Anna Nowak",
    rating: 5,
    source: "Facebook"
  },
  {
    quote: "Jedyne miejsce, gdzie nie próbują wciskać niepotrzebnych napraw. Pełne zaufanie.",
    author: "Marek Wiśniewski",
    rating: 5,
    source: "Google"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-site mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Opinie Naszych Klientów</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-primary p-6 rounded-xl border border-border hover:border-highlight transition-all"
            >
              <div className="flex gap-1 text-highlight mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < testimonial.rating ? "opacity-100" : "opacity-30"} />
                ))}
              </div>
              
              <FaQuoteLeft className="text-highlight/30 text-2xl mb-4" />
              
              <p className="text-light italic mb-6">"{testimonial.quote}"</p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-muted text-sm">{testimonial.source}</p>
                </div>
                <button className="text-highlight text-sm hover:underline">
                  Zobacz więcej
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border border-highlight text-highlight hover:bg-highlight/10 font-medium py-3 px-8 rounded-full transition">
            Zobacz wszystkie opinie
          </button>
        </div>
      </div>
    </section>
  );
};