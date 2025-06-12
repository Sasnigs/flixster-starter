import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <p>&copy; 2025 Your Company Name. All rights reserved.</p>
          <ul>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul className="social-media">
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
