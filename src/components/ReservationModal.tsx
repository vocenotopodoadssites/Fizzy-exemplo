import React from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationForm>();

  const onSubmit = (data: ReservationForm) => {
    console.log('Reservation data:', data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      reset();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-stone-400 hover:text-stone-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: Image/Info */}
              <div className="hidden md:block relative">
                <img
                  src="https://picsum.photos/seed/restaurant-interior/600/800"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <h3 className="text-3xl font-serif mb-2">Reserve sua Mesa</h3>
                  <p className="text-sm opacity-90">Garanta uma experiência inesquecível em nosso salão principal.</p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <CheckCircle2 size={64} className="text-primary mb-6" />
                    <h3 className="text-2xl font-serif mb-2">Reserva Solicitada!</h3>
                    <p className="text-stone-500 text-sm">
                      Enviamos um e-mail de confirmação para você. Ci vediamo presto!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Nome Completo</label>
                      <input
                        {...register('name', { required: true })}
                        className={cn(
                          "w-full px-4 py-2 bg-stone-50 border rounded-xl outline-none transition-all text-sm",
                          errors.name ? "border-red-300" : "border-stone-100 focus:border-primary"
                        )}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Data</label>
                        <div className="relative">
                          <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                          <input
                            type="date"
                            {...register('date', { required: true })}
                            className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:border-primary text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Horário</label>
                        <div className="relative">
                          <Clock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                          <select
                            {...register('time', { required: true })}
                            className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:border-primary text-sm appearance-none"
                          >
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Pessoas</label>
                      <div className="relative">
                        <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                        <input
                          type="number"
                          min="1"
                          max="10"
                          {...register('guests', { required: true })}
                          className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:border-primary text-sm"
                          defaultValue={2}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">E-mail</label>
                      <input
                        type="email"
                        {...register('email', { required: true })}
                        className="w-full px-4 py-2 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:border-primary text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 mt-4 active:scale-95"
                    >
                      CONFIRMAR RESERVA
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
