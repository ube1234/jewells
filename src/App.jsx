import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showValentineOnly, setShowValentineOnly] = useState(false)

  const jewelryItems = [
    // Earrings
    { id: 1, name: 'Diamond Stud Earrings', price: '₹1,899', originalPrice: '₹2,499', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', category: 'Earrings', isValentine: true, discount: 24 },
    { id: 2, name: 'Pearl Drop Earrings', price: '₹899', originalPrice: '₹1,299', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop', category: 'Earrings', isValentine: true, discount: 31 },
    { id: 3, name: 'Gold Hoop Earrings', price: '₹599', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop', category: 'Earrings' },
    { id: 4, name: 'Emerald Chandelier Earrings', price: '₹1,299', originalPrice: '₹1,799', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop', category: 'Earrings', isValentine: true, discount: 28 },
    { id: 5, name: 'Ruby Dangle Earrings', price: '₹1,199', originalPrice: '₹1,599', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Earrings', isValentine: true, discount: 25 },
    { id: 6, name: 'Sapphire Cluster Earrings', price: '₹1,499', originalPrice: '₹1,999', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop', category: 'Earrings', isValentine: true, discount: 25 },
    { id: 7, name: 'Rose Gold Huggie Earrings', price: '₹449', image: 'https://images.unsplash.com/photo-1611955167811-4711904bb8f4?w=400&h=400&fit=crop', category: 'Earrings' },
    { id: 8, name: 'Crystal Statement Earrings', price: '₹699', originalPrice: '₹999', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop', category: 'Earrings', isValentine: true, discount: 30 },
    
    // Bangles
    { id: 9, name: 'Gold Traditional Bangle', price: '₹799', originalPrice: '₹1,199', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop', category: 'Bangles', isValentine: true, discount: 33 },
    { id: 10, name: 'Diamond Encrusted Bangle', price: '₹1,899', originalPrice: '₹2,499', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', category: 'Bangles', isValentine: true, discount: 24 },
    { id: 11, name: 'Silver Designer Bangle', price: '₹399', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop', category: 'Bangles' },
    { id: 12, name: 'Rose Gold Stackable Bangle', price: '₹549', originalPrice: '₹799', image: 'https://images.unsplash.com/photo-1611955167811-4711904bb8f4?w=400&h=400&fit=crop', category: 'Bangles', isValentine: true, discount: 31 },
    { id: 13, name: 'Pearl Accent Bangle', price: '₹649', originalPrice: '₹949', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop', category: 'Bangles', isValentine: true, discount: 32 },
    { id: 14, name: 'Gemstone Bangle Set', price: '₹1,199', originalPrice: '₹1,699', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop', category: 'Bangles', isValentine: true, discount: 29 },
    { id: 15, name: 'Kundan Bangle', price: '₹899', originalPrice: '₹1,299', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Bangles', isValentine: true, discount: 31 },
    { id: 16, name: 'Antique Gold Bangle', price: '₹1,499', originalPrice: '₹1,999', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop', category: 'Bangles', isValentine: true, discount: 25 },
    
    // Chains/Necklaces
    { id: 17, name: 'Gold Chain Necklace', price: '₹999', originalPrice: '₹1,499', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop', category: 'Chains', isValentine: true, discount: 33 },
    { id: 18, name: 'Pearl Strand Chain', price: '₹1,899', originalPrice: '₹2,499', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop', category: 'Chains', isValentine: true, discount: 24 },
    { id: 19, name: 'Diamond Pendant Chain', price: '₹1,799', originalPrice: '₹2,299', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', category: 'Chains', isValentine: true, discount: 22 },
    { id: 20, name: 'Emerald Choker Chain', price: '₹1,599', originalPrice: '₹2,099', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop', category: 'Chains', isValentine: true, discount: 24 },
    { id: 21, name: 'Gold Layered Chain Set', price: '₹1,299', originalPrice: '₹1,799', image: 'https://images.unsplash.com/photo-1611955167811-4711904bb8f4?w=400&h=400&fit=crop', category: 'Chains', isValentine: true, discount: 28 },
    { id: 22, name: 'Silver Chain Necklace', price: '₹499', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop', category: 'Chains' },
    { id: 23, name: 'Ruby Pendant Chain', price: '₹1,799', originalPrice: '₹2,299', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Chains', isValentine: true, discount: 22 },
    { id: 24, name: 'Rose Gold Chain', price: '₹699', originalPrice: '₹999', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop', category: 'Chains', isValentine: true, discount: 30 },
    
    // Rings
    { id: 25, name: 'Diamond Solitaire Ring', price: '₹1,999', originalPrice: '₹2,499', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', category: 'Rings', isValentine: true, discount: 20 },
    { id: 26, name: 'Emerald Engagement Ring', price: '₹1,899', originalPrice: '₹2,399', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop', category: 'Rings', isValentine: true, discount: 21 },
    { id: 27, name: 'Ruby Vintage Ring', price: '₹1,599', originalPrice: '₹1,999', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop', category: 'Rings', isValentine: true, discount: 20 },
    { id: 28, name: 'Sapphire Cocktail Ring', price: '₹1,299', originalPrice: '₹1,699', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop', category: 'Rings', isValentine: true, discount: 24 },
    
    // Other Accessories
    { id: 29, name: 'Diamond Brooch', price: '₹1,199', originalPrice: '₹1,599', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', category: 'Accessories', isValentine: true, discount: 25 },
    { id: 30, name: 'Gold Anklet', price: '₹499', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop', category: 'Accessories' },
    { id: 31, name: 'Pearl Hairpin Set', price: '₹299', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop', category: 'Accessories' },
    { id: 32, name: 'Gold Nose Pin', price: '₹199', image: 'https://images.unsplash.com/photo-1611955167811-4711904bb8f4?w=400&h=400&fit=crop', category: 'Accessories' },
  ]

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon-wrapper">
              <span className="logo-icon">✨</span>
            </div>
            <span className="logo-text">Ruchi's Jewels</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#collection" onClick={() => setActiveSection('collection')} className={activeSection === 'collection' ? 'active' : ''}>Collection</a></li>
            <li><a href="#valentine" onClick={() => setActiveSection('valentine')} className={activeSection === 'valentine' ? 'active' : ''}>Valentine Gifts</a></li>
            <li><a href="#deals" onClick={() => setActiveSection('deals')} className={activeSection === 'deals' ? 'active' : ''}>Deals</a></li>
            <li><a href="#about" onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#contact" onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {activeSection === 'home' && (
          <section className="hero">
            <div className="hero-content">
              <h1 className="hero-title">Timeless Elegance</h1>
              <p className="hero-subtitle">Discover our exquisite collection of jewelry, earrings, chains & bangles. Special Valentine's deals!</p>
              <button className="cta-button" onClick={() => setActiveSection('collection')}>
                Explore Collection
              </button>
            </div>
            <div className="hero-decoration">
              <div className="sparkle">✨</div>
              <div className="sparkle">💫</div>
              <div className="sparkle">⭐</div>
            </div>
          </section>
        )}

        {activeSection === 'collection' && (
          <section className="collection">
            <h2 className="section-title">Our Collection</h2>
            <div className="category-filters">
              {['All', 'Earrings', 'Bangles', 'Chains', 'Rings', 'Accessories'].map(category => (
                <button
                  key={category}
                  className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="jewelry-grid">
              {jewelryItems
                .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
                .map(item => (
                  <div key={item.id} className="jewelry-card">
                    <div className="jewelry-image-wrapper">
                      <img src={item.image} alt={item.name} className="jewelry-image" />
                      {item.isValentine && <span className="valentine-badge">💝 Valentine</span>}
                      {item.originalPrice && <span className="discount-badge">-{item.discount}%</span>}
                    </div>
                    <div className="jewelry-category">{item.category}</div>
                    <h3 className="jewelry-name">{item.name}</h3>
                    <div className="price-container">
                      {item.originalPrice && (
                        <p className="original-price">{item.originalPrice}</p>
                      )}
                      <p className="jewelry-price">{item.price}</p>
                    </div>
                    <button className="card-button">View Details</button>
                  </div>
                ))}
            </div>
          </section>
        )}

        {activeSection === 'valentine' && (
          <section className="collection">
            <div className="valentine-header">
              <h2 className="section-title">💝 Valentine's Day Gifts</h2>
              <p className="valentine-subtitle">Express your love with our special Valentine's collection</p>
            </div>
            <div className="jewelry-grid">
              {jewelryItems
                .filter(item => item.isValentine)
                .map(item => (
                  <div key={item.id} className="jewelry-card valentine-card">
                    <div className="jewelry-image-wrapper">
                      <img src={item.image} alt={item.name} className="jewelry-image" />
                      <span className="valentine-badge">💝 Valentine</span>
                      {item.originalPrice && <span className="discount-badge">-{item.discount}%</span>}
                    </div>
                    <div className="jewelry-category">{item.category}</div>
                    <h3 className="jewelry-name">{item.name}</h3>
                    <div className="price-container">
                      {item.originalPrice && (
                        <p className="original-price">{item.originalPrice}</p>
                      )}
                      <p className="jewelry-price">{item.price}</p>
                    </div>
                    <button className="card-button">Add to Cart</button>
                  </div>
                ))}
            </div>
          </section>
        )}

        {activeSection === 'deals' && (
          <section className="collection">
            <div className="deals-header">
              <h2 className="section-title">🔥 Special Deals</h2>
              <p className="deals-subtitle">Limited time offers - Don't miss out!</p>
            </div>
            <div className="jewelry-grid">
              {jewelryItems
                .filter(item => item.originalPrice)
                .sort((a, b) => b.discount - a.discount)
                .map(item => (
                  <div key={item.id} className="jewelry-card deal-card">
                    <div className="jewelry-image-wrapper">
                      <img src={item.image} alt={item.name} className="jewelry-image" />
                      {item.isValentine && <span className="valentine-badge">💝 Valentine</span>}
                      <span className="discount-badge">-{item.discount}% OFF</span>
                    </div>
                    <div className="jewelry-category">{item.category}</div>
                    <h3 className="jewelry-name">{item.name}</h3>
                    <div className="price-container">
                      <p className="original-price">{item.originalPrice}</p>
                      <p className="jewelry-price">{item.price}</p>
                    </div>
                    <button className="card-button">Buy Now</button>
                  </div>
                ))}
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="about">
            <div className="about-content">
              <h2 className="section-title">About Us</h2>
              <p className="about-text">
                With over three decades of excellence in jewelry craftsmanship, we bring you 
                the finest collection of earrings, chains, bangles, and accessories. 
                Each piece is carefully selected to ensure timeless beauty, exceptional quality, 
                and lasting value. Our commitment to excellence means every jewelry piece is 
                chosen with passion and precision, offering you the best at affordable prices.
              </p>
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">🏆</span>
                  <h3>Premium Quality</h3>
                  <p>Only the finest materials</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">🎨</span>
                  <h3>Expert Craftsmanship</h3>
                  <p>Handcrafted by master artisans</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">💝</span>
                  <h3>Lifetime Warranty</h3>
                  <p>Your investment protected</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="contact">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-content">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="your.email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
              <div className="contact-info">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <h3>Address</h3>
                    <p>123 Jewelry Street<br />Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <h3>Phone</h3>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <h3>Email</h3>
                    <p>info@jewellries.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Jewellries. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
