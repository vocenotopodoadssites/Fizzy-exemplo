import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8">
              Inicie sua <span className="text-primary italic">Transformação</span> hoje.
            </h2>
            <p className="text-stone-500 text-lg mb-12">
              Estamos prontos para cuidar do seu sorriso com a atenção e o profissionalismo que você merece.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">WhatsApp / Telefone</p>
                  <p className="text-xl font-bold text-stone-900">(11) 98888-8888</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Endereço</p>
                  <p className="text-xl font-bold text-stone-900">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-primary transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-stone-400 hover:text-primary transition-all shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-stone-100"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-stone-900 outline-none focus:border-primary transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">WhatsApp</label>
                  <input 
                    type="tel" 
                    className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-stone-900 outline-none focus:border-primary transition-all"
                    placeholder="(11) 00000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Interesse</label>
                  <select className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-stone-900 outline-none focus:border-primary transition-all appearance-none">
                    <option>Implantes</option>
                    <option>Facetas / Lentes</option>
                    <option>Clareamento</option>
                    <option>Invisalign</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Mensagem (Opcional)</label>
                <textarea 
                  rows={3}
                  className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-stone-900 outline-none focus:border-primary transition-all resize-none"
                  placeholder="Conte-nos um pouco sobre seu caso..."
                />
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all shadow-lg shadow-primary/20 active:scale-95">
                SOLICITAR CONTATO
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
