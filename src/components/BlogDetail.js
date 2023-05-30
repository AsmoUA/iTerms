import React, {useEffect} from 'react';
import { useParams, Link  } from 'react-router-dom';
import data from '../data.json';
import flag from '../assets/flag.webp';
import iconReadMore from '../assets/icon-read-more.webp';
import facebook from '../assets/Facebook-blog.webp';
import twitte from '../assets/Twitte-blogr.webp';
import pinterest from '../assets/Pinterest-blog.webp';
import linkedin from '../assets/linkedin-blog.webp';
import { useTranslation } from 'react-i18next';
import './BlogDetail.scss';


function BlogDetail({navigate}) {
  const { t } = useTranslation();
  const { id } = useParams();
  const post = data.find(element => element.id === parseInt(id, 10));
  const posts = data.filter((posts) => posts.category === post.category).slice(0, 4);
  const backToCategory = () => {
    navigate(`/blog?category=${post.category}`);
  };
  if (!post) {
    return <div>{t('post_not_found')}</div>;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog_detail">
      <button className="back_to_category" onClick={backToCategory}><span>{t('back')}</span></button>
      <div className="detail">
        <div className="post_detail">
          <img src={flag} alt={post.title} />
          <h2 id="postTitle">{post.title}</h2>
          <p id="postText">{post.text}</p>
          <div className="share">
            <p>{t('share')}</p>
            <a href="#"><img src={facebook} alt="facebook"/></a>
            <a href="#"><img src={twitte} alt="twitte"/></a>
            <a href="#"><img src={pinterest} alt="pinterest"/></a>
            <a href="#"><img src={linkedin} alt="linkedin"/></a>
          </div>
        </div>
        <div className="content_for_detail">
          <h4>{t('contents')}</h4>
          <ol className="outerList">
            <li><a href="#postTitle">{post.title}</a>
              <ol className="innerList">
                <li><a href="#postText">{t('post_detail')}</a></li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
      <div className="posts_in_categories">
        <h2>{t('related_posts')}</h2>
        <div className="another_post_in_category">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <img src={flag} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.prescription}</p>
              <Link key={post.id} to={`/blog/${post.id}`}>{t('read_more')} <img src={iconReadMore} alt={post.id} /></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default BlogDetail;