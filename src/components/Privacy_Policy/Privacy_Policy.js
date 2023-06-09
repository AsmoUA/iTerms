import React, {useEffect} from 'react';
import Privacy_PolicyAdvant from './Privacy_PolicyAdvant';
import Privacy_PolicyOnline from './Privacy_PolicyOnline';
import DetailsSwiper from './Privacy_PolicySwiper';
import Privacy_PolicyGuarantee from './Privacy_PolicyGuarantee';
import Privacy_PolicyBlog from './Privacy_PolicyBlog';
import './Privacy_Policy.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Privacy_Policy = () => {

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
        <Privacy_PolicyAdvant/>
        <Privacy_PolicyOnline/>
        <DetailsSwiper/>
        <Privacy_PolicyGuarantee/>
        <Privacy_PolicyBlog/>
      </div>
    </>
  );
};

export default Privacy_Policy;