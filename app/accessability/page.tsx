"use client";
import { motion } from "framer-motion";

const AccessibilityStatement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full px-6 md:px-20 py-6 font-sans"
    >
      <h1 className="text-4xl font-bold mb-6 text-foreground border-b pb-2">
        הצהרת נגישות - Ink Mind
      </h1>
      <p className="mb-6 text-lg text-foreground leading-relaxed">
        אנו ב-Ink Mind מאמינים שלכל אדם יש זכות לגשת למידע ולשירותים שלנו באופן
        שווה. כסטודיו לקעקועים, אנו מחויבים לספק חוויית משתמש נגישה ונוחה לכל
        המבקרים באתר שלנו, כולל אנשים עם מוגבלויות.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground">
        מה עשינו כדי להנגיש את האתר?
      </h2>
      <ul className="space-y-4 text-foreground">
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-primary">•</span>
          <span>
            האתר הונגש בהתאם להוראות תקן Web Content Accessibility Guidelines
            2.0 ברמה AA.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-primary">•</span>
          <span>
            ניווט מקלדת: האתר שלנו ניתן לניווט מלא באמצעות המקלדת באמצעות לחיצה
            על מקש ה-Tab.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-primary">•</span>
          <div>
            <span className="font-semibold">תוסף הנגישות Enable המספק</span>
            <ul className="mt-2 ml-6 space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>שינוי גודל טקסט</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>התאמת ניגודיות צבעים ואפשרויות צבע לכבדי ראייה</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>אפשרות להצגת טקסט בלבד או תמונות בלבד</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>הדגשת טקסט וקישורים</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>החלפה לפונט קריא יותר</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>שינוי סממן העכבר</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>שינוי צבעי האתר (כולל אפשרות לצבעים בהירים)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>הדגשת אזור המיקוד</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>
                  ניווט עם מקלדת בכל רחבי התוסף באמצעות הדרכה אוטומטית
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>הצהרת נגישות של התוסף</span>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-primary">•</span>
          <div>
            <span className="font-semibold">
              HTML סמנטי: השתמשנו ב-HTML סמנטי הכולל:
            </span>
            <ul className="mt-2 ml-6 space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>שימוש נכון בתגיות לפי הרמות שלהן באתר</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>
                  שימוש ב-aria-label להוספת תיאורים נוספים לשיפור יכולת הפירוש
                  של תוכנות קורא מסך
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-primary">◦</span>
                <span>שימוש ב-alt לתיאור תמונות</span>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-primary">•</span>
          <span>
            תמיכה בתוכן דינמי: ווידאנו שהתוכן הדינמי באתר מובנה ומובן גם על ידי
            משתמשי קוראי מסך.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-primary">•</span>
          <span>
            תאימות לדפדפנים: האתר מותאם לצפייה בסוגי הדפדפנים השונים, כולל
            Internet Explorer, Chrome, Firefox, Safari ואחרים.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 mt-1 text-primary">•</span>
          <span>
            התאמה לרזולוציות שונות: האתר מותאם לצפייה במגוון רזולוציות, כולל
            מכשירים ניידים וטאבלטים.
          </span>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground">
        הסדריי נגישות בעסק
      </h2>
      <ul className="space-y-4 text-foreground">
        <li>
          <span className="mr-2 mt-1 text-primary">•</span>
          <span>חניון וחניות נכים בהתאם לנהליי קניון שוהם מרקט</span>
        </li>
        <li>
          <span className="mr-2 mt-1 text-primary">•</span>
          <span>שירותים ושירותי נכים בהתאם לנהליי קניון שוהם מרקט</span>
        </li>
        <li>
          <span className="mr-2 mt-1 text-primary">•</span>
          <span>מעליות מונגשות בהתאם לנהליי קניון שוהם מרקט</span>
        </li>
        <li>
          <span className="mr-2 mt-1 text-primary">•</span>
          <span>צוות שאדיב וסבלני לאנשים בעלי מוגבלוית</span>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground">
        הנחיות נגישות
      </h2>
      <p className="mb-4 text-foreground">לצפייה בהנחיות הנגישות המלאות:</p>
      <ul className="space-y-2 text-foreground">
        <li className="flex items-center">
          <span className="mr-2 text-primary">•</span>
          <a
            href="http://www.w3c.org.il/guidelines/guidelines_WCAG_2.0.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            הנחיות בעברית
          </a>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-primary">•</span>
          <a
            href="http://www.w3.org/TR/2008/REC-WCAG20-20081211"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            הנחיות באנגלית
          </a>
        </li>
      </ul>

      <p className="mt-8 text-foreground leading-relaxed">
        אנו ממשיכים להשקיע מאמצים רבים בהנגשת האתר. יחד עם זאת, יתכן כי יתגלו
        חלקים באתר שטרם נגישים או אינם נגישים באופן מספק. אם נתקלתם בבעיה או יש
        לכם הצעות לשיפור הנגישות באתר או בסטודיו הקעקועים שלנו, אנא צרו קשר
        עימנו קשר ונטפל בבעיה שלכם בהקדם האפשרי
      </p>

      <ul className="space-y-2 text-foreground mt-6">
        <li className="flex items-center">
          <span className="mr-2 text-primary">•</span>
          <a
            href="https://wa.me/+972528114746"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            קישור לוואצאפ שלנו
          </a>
        </li>
      </ul>

      <p className="mt-6">נשמח שאם יש תקלה תפרטו לפי הפורמט הבא:</p>

      <ul className="space-y-2 text-foreground mt-6">
        <li className="flex items-center">
          <span className="mr-2 text-primary">•</span>
          <span>תיאור הבעיה</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-primary">•</span>
          <span>הפעולה שניסיתם לבצע</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-primary">•</span>
          <span>סוג הדפדפן וגרסתו</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-primary">•</span>
          <span>מערכת ההפעלה של מכשירכם</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-primary">•</span>
          <span>טכנולוגיה מסייעת במידה והשתמשתם</span>
        </li>
      </ul>

      <p className="mt-6">
        יש לציין שפתיחת תקלה דרך תוסף הנגישות לא תיצור עימנו קשר אלא תיצור עם
        מפתחי התוסף קשר
      </p>

      <p className="mt-6">
        אנו נשתדל לחזור לתקלה שלכם בהקדם ולתקן אותה כי אנו מבינים את חשיבותה של
        הנגשת האתר לכלל האוכלוסיה
      </p>

      <p className="mt-6 font-bold text-foreground">צוות Ink Mind</p>
    </motion.div>
  );
};

export default AccessibilityStatement;
