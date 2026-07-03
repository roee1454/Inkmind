"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const PrivacyPolicy: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const getDynamicDate = () => {
      const now = new Date();
      const monthsHebrew = [
        'בינואר', 'בפברואר', 'במרץ', 'באפריל', 'במאי', 'ביוני',
        'ביולי', 'באוגוסט', 'בספטמבר', 'באוקטובר', 'בנובמבר', 'בדצמבר'
      ];
      return `1 ${monthsHebrew[Math.floor(now.getMonth() / 3) * 3]} ${now.getFullYear()}`;
    };
    setLastUpdated(getDynamicDate());
  }, []);

  return (
    <div className="min-h-screen w-full pt-44 pb-32 px-6 md:px-20 font-assistant flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl space-y-12"
      >

        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold font-karantina text-glow text-primary">
            מדיניות פרטיות
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            הפרטיות שלכם חשובה לנו. ב-Inkmind אנו מחויבים להגן על המידע שלכם 
            ולספק שקיפות מלאה לגבי אופן השימוש באתר.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid gap-8">
          <section className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-karantina text-primary/80">כללי ואיסוף מידע</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              האתר שלנו משמש כדף נחיתה להצגת עבודות וליצירת קשר. אנו **לא אוספים** מידע אישי מזהה, 
              לא משתמשים בעוגיות (Cookies) ולא מבצעים מעקב אחר המשתמשים שלנו.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-karantina text-primary/80">קישורים חיצוניים</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              האתר מכיל קישורים לשירותים חיצוניים כמו אינסטגרם, פייסבוק ווויז. 
              לידיעתכם, לכל אחד מהאתרים הללו יש מדיניות פרטיות משלו שאינה בשליטתנו.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-karantina text-primary/80">אבטחת מידע</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              למרות שאיננו אוספים מידע, האתר מאובטח באמצעים סבירים כדי להבטיח 
              גלישה בטוחה ונקייה לכל המבקרים.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl space-y-4 text-start">
            <h2 className="text-3xl md:text-4xl font-bold font-karantina text-primary/80">שינויים ויצירת קשר</h2>
            <p className="text-lg md:text-xl text-foreground/70">
              אנו עשויים לעדכן את המדיניות מעת לעת. אם יש לכם שאלות, אתם מוזמנים ליצור איתנו קשר.
            </p>
            <div className="pt-4">
              <p className="font-bold text-primary font-karantina text-2xl">Inkmind Studio</p>
              <p className="text-sm opacity-50">עדכון אחרון: {lastUpdated || 'טוען...'}</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;

