import { useParams } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  const { lang } = useParams<{ lang: string }>();

  return (
    <div className="top-navbar">
      <div>
        <a href={`/${lang || 'en'}/`}>Home</a>
      </div>
      <div>
        <a href={`/${lang || 'en'}/login`}>Login</a>
      </div>
      <div className="language-switcher">
        <span>Language: </span>
        <a href={replaceLang('/en')}>English</a> | 
        <a href={replaceLang('/zh')}>Chinese</a>
      </div>
    </div>
  );

  // Utility function to replace or append language in the current path
  function replaceLang(newLang: string) {
    if (lang) {
      return window.location.pathname.replace(`/${lang}`, newLang);
    }
    return newLang + window.location.pathname;
  }
};

export default Navbar;
