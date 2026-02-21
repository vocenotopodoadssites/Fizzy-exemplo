import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Pronto para <span className="text-primary">Energizar</span> seu Projeto?
            </h2>
            <p className="text-stone-400 text-lg mb-12">
              Entre em contato hoje mesmo para um orçamento sem compromisso ou para atendimento emergencial.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-widest font-bold">Ligue Agora</p>
                  <p className="text-xl font-bold">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-widest font-bold">E-mail</p>
                  <p className="text-xl font-bold">contato@voltservices.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-stone-500 text-xs uppercase tracking-widest font-bold">Localização</p>
                  <p className="text-xl font-bold">São Paulo, SP - Atendimento em toda região</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Nome</label>
                  <input 
                    type="text" 
                    className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-secondary outline-none focus:border-primary transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-secondary outline-none focus:border-primary transition-all"
                    placeholder="(11) 00000-0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Tipo de Serviço</label>
                <select className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-secondary outline-none focus:border-primary transition-all appearance-none">
                  <option>Residencial</option>
                  <option>Industrial</option>
                  <option>Manutenção Preventiva</option>
                  <option>Emergência</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-secondary outline-none focus:border-primary transition-all resize-none"
                  placeholder="Descreva seu problema ou projeto..."
                />
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 active:scale-95">
                ENVIAR SOLICITAÇÃO
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
