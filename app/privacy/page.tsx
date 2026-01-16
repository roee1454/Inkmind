'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    const getDynamicDate = () => {
      const now = new Date();
      const currentMonth = now.getMonth(); // 0-indexed
      const currentYear = now.getFullYear();

      // Find the start month of the current quarter (0: Jan, 3: Apr, 6: Jul, 9: Oct)
      const quarterStartMonth = Math.floor(currentMonth / 3) * 3;
      
      const monthsHebrew = [
        'בינואר', 'בפברואר', 'במרץ', 'באפריל', 'במאי', 'ביוני',
        'ביולי', 'באוגוסט', 'בספטמבר', 'באוקטובר', 'בנובמבר', 'בדצמבר'
      ];

      return `11 ${monthsHebrew[quarterStartMonth]} ${currentYear}`;
    };

    setLastUpdated(getDynamicDate());
  }, []);

  return (
    <motion.div
      className="min-h-screen w-full px-6 md:px-20 py-6 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">הצהרת פרטיות</h2>
      <h3 className="text-xl font-semibold mb-3">Inkmind - עסק קעקועים</h3>

      <section aria-labelledby="general">
        <h4 id="general" className="text-lg font-semibold mb-2">
          כללי
        </h4>
        <p className="mb-4">
          אנו ב-Inkmind מכבדים את פרטיות המשתמשים באתר שלנו. הצהרת פרטיות זו
          נועדה להבהיר כיצד אנו אוספים, משתמשים, שומרים ומגנים על המידע האישי
          שלכם בעת השימוש באתר שלנו.
        </p>
      </section>

      <section aria-labelledby="data-collection">
        <h4 id="data-collection" className="text-lg font-semibold mb-2">
          איסוף מידע
        </h4>
        <p className="mb-4">
          האתר שלנו אינו אוסף מידע אישי מזהה אודות המשתמשים. אנו לא משתמשים
          בקוקיס (Cookies) או בטכנולוגיות מעקב אחרות.
        </p>
      </section>

      <section aria-labelledby="data-use">
        <h4 id="data-use" className="text-lg font-semibold mb-2">
          שימוש במידע
        </h4>
        <p className="mb-4">
          האתר שלנו משמש כדף נחיתה המציג תמונות של הפרויקטים שלנו מאינסטגרם
          ומספק קישורים ליצירת קשר וניווט למקום בוויז. אנו לא אוספים או שומרים
          מידע אישי כלשהו מהמשתמשים.
        </p>
      </section>

      <section aria-labelledby="external-links">
        <h4 id="external-links" className="text-lg font-semibold mb-2">
          קישורים לאתרים חיצוניים
        </h4>
        <p className="mb-4">
          האתר שלנו מכיל קישורים לאתרים חיצוניים כגון אינסטגרם ווויז. אנו לא
          אחראים לתוכן או למדיניות הפרטיות של אתרים אלו. אנו ממליצים לכם לעיין
          במדיניות הפרטיות של כל אתר חיצוני אליו אתם עוברים דרך הקישורים באתר
          שלנו.
        </p>
      </section>

      <section aria-labelledby="data-security">
        <h4 id="data-security" className="text-lg font-semibold mb-2">
          אבטחת מידע
        </h4>
        <p className="mb-4">
          אנו נוקטים באמצעים סבירים כדי להגן על המידע האישי שלכם מפני גישה בלתי
          מורשית, שימוש לרעה או חשיפה. עם זאת, אין אנו יכולים להבטיח אבטחה
          מוחלטת של המידע.
        </p>
      </section>

      <section aria-labelledby="policy-changes">
        <h4 id="policy-changes" className="text-lg font-semibold mb-2">
          שינויים בהצהרת הפרטיות
        </h4>
        <p className="mb-4">
          אנו שומרים לעצמנו את הזכות לעדכן את הצהרת הפרטיות הזו מעת לעת. כל
          שינוי יפורסם בעמוד זה וייכנס לתוקף מיד עם פרסומו. אנו ממליצים לכם
          לעיין בהצהרת הפרטיות מעת לעת כדי להתעדכן בשינויים.
        </p>
      </section>

      <section aria-labelledby="contact">
        <h4 id="contact" className="text-lg font-semibold mb-2">
          יצירת קשר
        </h4>
        <p className="mb-4">
          אם יש לכם שאלות או הערות בנוגע להצהרת הפרטיות שלנו, אתם מוזמנים ליצור
          קשר דרך הקישורים המופיעים באתר.
        </p>
      </section>

      <p className="font-bold">Inkmind - עסק קעקועים</p>
      <p className="italic">תאריך עדכון אחרון: {lastUpdated || 'טוען...'}</p>
    </motion.div>
  );
};

export default PrivacyPolicy;
