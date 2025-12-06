
import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, User } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Profile Image / Visual */}
          <div className="w-full md:w-1/3">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                {/* Replace with your actual photo */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Consultant Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="text-secondary" size={20} />
                  <span className="font-bold text-gray-900">Certifié</span>
                </div>
                <p className="text-xs text-gray-600">Master Lean Management & Microsoft Certified</p>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3">
            <SectionHeading 
              title="Qui suis-je ?" 
              subtitle="Ingénieur passionné par l'excellence opérationnelle et la transformation digitale."
              centered={false}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-gray-600 leading-relaxed text-lg"
            >
              <p>
                Fort d'une expérience significative dans les secteurs <strong>Pharmaceutique, Agroalimentaire et Industriel</strong>, j'ai occupé des postes clés d'Improvement Engineer où j'ai pu mesurer l'écart entre la réalité du terrain et les outils numériques disponibles.
              </p>
              <p>
                Ma double casquette <strong>Ingénieur Lean & Développeur Power Platform</strong> est née d'un constat simple : l'amélioration continue ne peut plus se passer de données fiables, et la technologie ne sert à rien si elle ne répond pas à un besoin métier concret.
              </p>
              <p>
                Aujourd'hui, j'aide les entreprises à combler ce fossé en créant des outils sur-mesure, pragmatiques et orientés ROI.
              </p>
            </motion.div>

            {/* Key Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg h-fit text-primary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Expérience Terrain</h4>
                  <p className="text-sm text-gray-600">Compréhension rapide de vos contraintes de production et qualité.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-lg h-fit text-secondary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Double Expertise</h4>
                  <p className="text-sm text-gray-600">Master Qualité & Lean + Expertise Technique Microsoft.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
