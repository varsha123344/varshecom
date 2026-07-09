export default function Hero() {
  return (
    <section id="featured" className="hero">

      <div className="hero-content">

        <p className="hero-tag">
          PREMIUM ELECTRONICS COLLECTION
        </p>

        <h1 className="hero-title">
          Upgrade Your
          <span> Digital Lifestyle</span>
        </h1>

        <p className="hero-description">
          Explore premium laptops, smartphones, wearables and accessories
          carefully selected for performance, style and value.
        </p>

        <div className="hero-buttons">
          <a href="#shop" className="btn hero-btn-primary">
            Explore Collection
          </a>

          <a href="#deals" className="btn hero-btn-secondary">
            Trending Deals
          </a>
        </div>

      </div>

      <div className="hero-preview">

        <div className="glass-card card-one">
          <span className="card-icon">💻</span>
          <h3>Premium Laptops</h3>
          <p>Powerful devices for work and gaming.</p>
        </div>

        <div className="glass-card card-two">
          <span className="card-icon">⌚</span>
          <h3>Smart Wearables</h3>
          <p>Track your fitness with style.</p>
        </div>

        <div className="glass-card card-three">
          <span className="card-icon">🎧</span>
          <h3>Audio Collection</h3>
          <p>Immersive sound for every moment.</p>
        </div>

      </div>

    </section>
  );
}