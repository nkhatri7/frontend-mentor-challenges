import React from 'react';
import './Articles.scss';
import currencyImg from '../../assets/image-currency.jpg';
import restaurantImg from '../../assets/image-restaurant.jpg';
import planeImg from '../../assets/image-plane.jpg';
import confettiImg from '../../assets/image-confetti.jpg';

function Articles() {
    return (
        <section className="articles">
            <h1>Latest Articles</h1>
            <div className="articles-container">
                <div className="article">
                    <figure className="article-img">
                        <img src={currencyImg} alt="Currency" />
                    </figure>
                    <div className="article-text">
                        <p className="author">By Claire Robson</p>
                        <h2>Receive money in any currency with no fees</h2>
                        <p className="article-content">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </div>
                </div>
                <div className="article">
                    <figure className="article-img">
                        <img src={restaurantImg} alt="Restaurant" />
                    </figure>
                    <div className="article-text">
                        <p className="author">By Wilson Hutton</p>
                        <h2>Treat yourself without worrying about money</h2>
                        <p className="article-content">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                    </div>
                </div>
                <div className="article">
                    <figure className="article-img">
                        <img src={planeImg} alt="Restaurant" />
                    </figure>
                    <div className="article-text">
                        <p className="author">By Wilson Hutton</p>
                        <h2>Take your Easybank card wherever you go</h2>
                        <p className="article-content">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                    </div>
                </div>
                <div className="article">
                    <figure className="article-img">
                        <img src={confettiImg} alt="Restaurant" />
                    </figure>
                    <div className="article-text">
                        <p className="author">By Claire Robson</p>
                        <h2>Our invite-only Beta accounts are now live!</h2>
                        <p className="article-content">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Articles;
