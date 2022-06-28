import styles from './card.module.css'

function Card() {
  return(
    <div className={styles.container}>
      <div className={styles.Background}>
        <div className={styles.card}>
          <div className={styles.imageDiv}>
            <img className={styles.imageImg} src={require('../images/image-product-desktop.jpg')} alt='green leaves and perfume flask'></img>
          </div>
          <div className={styles.info}>
            <p className={styles.label}>PERFUME</p>
            <h2 className={styles.name}>Gabrielle Essence Eau de Parfum</h2>
            <p className={styles.description}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
            <div className={styles.prices}>
              <p className={styles.priceCurrent}>$149.99</p>
              <p className={styles.priceOld}>$169.99</p>
            </div>
            <button className={styles.buyButton}>
              <i className="fas fa-shopping-cart"></i>
              Add to cart
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card