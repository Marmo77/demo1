import { useState}  from 'react';
import type {ChangeEvent, FormEvent } from 'react';
import { HiOutlineCalendar, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi';
import { AiOutlineCar } from "react-icons/ai";


export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carMake: '',
    problem: '',
    date: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-site mx-auto px-4">
        <div className="bg-surface rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2 bg-highlight text-primary p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Umów wizytę</h2>
              <p className="mb-6">
                Zostaw swoje dane, a oddzwonimy w ciągu 30 minut, aby potwierdzić termin.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <HiOutlinePhone className="text-xl" />
                  <span>882 917 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineCalendar className="text-xl" />
                  <span>Pon-Pt: 8:00-18:00</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center border-b border-border pb-2">
                  <HiOutlineUser className="text-light mr-2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Imię i nazwisko"
                    className="bg-transparent w-full text-light placeholder:text-muted focus:outline-none"
                    required
                  />
                </div>
                
                <div className="flex items-center border-b border-border pb-2">
                  <HiOutlinePhone className="text-light mr-2" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Numer telefonu"
                    className="bg-transparent w-full text-light placeholder:text-muted focus:outline-none"
                    required
                  />
                </div>
                
                <div className="flex items-center border-b border-border pb-2">
                  <AiOutlineCar className="text-light mr-2" />
                  <input
                    type="text"
                    name="carMake"
                    value={formData.carMake}
                    onChange={handleChange}
                    placeholder="Marka i model auta"
                    className="bg-transparent w-full text-light placeholder:text-muted focus:outline-none"
                    required
                  />
                </div>
                
                <div className="border-b border-border pb-2">
                  <textarea
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    placeholder="Opis problemu"
                    rows={3}
                    className="bg-transparent w-full text-light placeholder:text-muted focus:outline-none"
                  />
                </div>
                
                <div className="flex items-center border-b border-border pb-2">
                  <HiOutlineCalendar className="text-light mr-2" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-transparent w-full text-light focus:outline-none"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-highlight hover:bg-highlight/90 text-primary font-bold py-3 rounded-lg transition mt-6"
                >
                  Wyślij zgłoszenie
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};