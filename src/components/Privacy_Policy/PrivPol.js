import React, {useEffect} from 'react';
import PriPolAdvant from './PriPolAdvant';
import PriPolOnline from './PriPolOnline';
import DetailsSwiper from './PriPolSwiper';
import PriPolGuarantee from './PriPolGuarantee';
import PriPolBlog from './PriPolBlog';
import './PrivPol.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PrivPol = () => {

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="body">
        <div className="header_for_details">
          <h4>{t('privacy_flexible')}</h4>
          <h1>{t('privacy_terms')}</h1>
          <p className="p_medium">{t('privacy_create')}</p>
          <p className="p_large">{t('privacy_seamlessly')}</p>
        </div>
        <div className="header_button_home">
          <Link to="/" className="header_button_home_1">{t('privacy_home')}</Link>
        </div>
        <div className="header_button_details">
          <Link to="/" className="header_button_details_1">
            {t('privacy_generate')}
          </Link>
          <Link to="/pricing" className="header_button_details_2">
            {t('privacy_learn')}
          </Link>
        </div>
        <PriPolAdvant/>
        <PriPolOnline/>
        <DetailsSwiper/>
        <PriPolGuarantee/>
        <PriPolBlog/>
      </div>
    </>
  );
};

export default PrivPol;