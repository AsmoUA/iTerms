import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import './SwiperPost.scss';
import { useTranslation } from 'react-i18next';
import Review from '../../assets/assets_generate/Review.webp';

const SwiperPost = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  const renderStars = (name) => {
    const stars = [];
    const surName = name.split(' ');
    const starRating = surName[0].length-1;
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= starRating ? 'star filled' : 'star';
      stars.push(
        <span
          key={i}
          className={starClass}
        >
          &#9733;
        </span>,
      );
    }
    return stars;
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://run.mocky.io/v3/225376f1-9091-4d10-a0c2-584663e82e42',
      );
      const data = await response.json();
      const usersData = data.users;
      return usersData;
    } catch (error) {
      throw new Error('Error uploading data.json', error);
    }
  };

  useEffect(() => {
    const getUsersData = async () => {
      const fetchedData = await fetchData();
      setUsers(fetchedData);
    };

    getUsersData();
  }, []);

  return (
    <section className="section_swiper">
      <div className="swiperPost_title">
        <div
          className="swiperPost_title_image"
          style={{ backgroundImage: `url(${Review})` }}
        ></div>
        <h5 className="h5_postlarge">{t('swiperPost_title-h5')}</h5>
        <div className="description">
          <h2 className="h2_postlarge">{t('swiperPost_title-h2')}</h2>
          <p className="p_postlarge">
            {t('swiperPost_title-p')} <span>{t('swiperPost_title-span')}</span>
          </p>
        </div>
      </div>
      <div className="swiperPost_background">
        <div className="swiperPost_body">
          <div className="swiper-button">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          <Swiper
            className="swiper"
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {users.map((user) => (
              <SwiperSlide className="swiper_slidePost" key={user.id}>
                <div className="swiper_slide_main">
                  <div className="swiper_slide_image">
                    <img src={user.image} alt="Privacy Policy" />
                  </div>
                  <div className="swiper_slide_posts">
                    <h5>{user.name}</h5>
                    <p>{user.status}</p>
                  </div>
                </div>
                <div className="swiper_slide_post">
                  <h4>{user.review}</h4>
                  <div>
                    <div className="stars">
                      <p>{user.name.split(' ')[0].length - 1}{renderStars(user.name)}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SwiperPost;
