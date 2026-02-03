function Footer() {
  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer>
      <center>
        <table>
          <thead>
            <tr>
              <th>Luxury Things</th>
              <th>Contact</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Experience the Pinnacle of Luxury.</td>
              <td>Email: luxurylifestyle@gmail.com</td>
              <td>Headoffice: MAIN boulevard</td>
            </tr>
            <tr>
              <td></td>
              <td>Ph: +920011223599</td>
              <td>Main street 44, Lahore</td>
            </tr>
          </tbody>
        </table>

        {/* --- NEW: Scroll to Top Button --- */}
        <button 
          onClick={scrollToTop} 
          style={{
            marginTop: '30px',
            backgroundColor: 'transparent',
            color: '#ffc300',
            border: '1px solid #ffc300',
            padding: '10px 20px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#ffc300';
            e.target.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#ffc300';
          }}
        >
          ↑ Back to Top
        </button>

      </center>
    </footer>
  );
}

export default Footer;
