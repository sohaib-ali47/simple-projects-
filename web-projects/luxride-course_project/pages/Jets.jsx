import { Link } from 'react-router-dom';

function Jets() {
  return (
    <center>
      <br /><br /><br />

      <h1>Luxury Jets Collection</h1>
      <hr />
      
      {/* Main Intro Image */}
      <img src="images/jet/jet .jpg" width="80%" alt="Private Jet" className="hover-img" />
      <hr />
      
      <h4>Soar beyond limits with the world's finest private jets. Experience unmatched comfort, speed, and luxury — designed for those who rule the skies.</h4>
      <br />
      <hr />
      
      {/* --- Gulfstream G400 --- */}
      <h2>Gulfstream G400</h2>
      <img src="images/jet/p1.png" width="80%" alt="Gulfstream G400" className="hover-img" />

      <p>
        <b>Range:</b> 8,000 nautical miles<br />
        <b>Top Speed:</b> Mach 0.925<br />
        <b>Capacity:</b> 19 passengers<br />
        <b>Engines:</b> Rolls-Royce Pearl 700<br />
        <b>Description:</b> The Gulfstream G800 is the epitome of ultra-long-range private aviation. 
        It combines exceptional range, advanced aerodynamics, and luxurious interiors.
      </p>
      <hr />

      {/* --- Dassault Falcon 10X --- */}
      <h2>Dassault Falcon 10X</h2>
      <img src="images/jet/p3.png" width="80%" alt="Dassault Falcon 10X" className="hover-img" />
      <p>
        <b>Range:</b> 7,500 nautical miles<br />
        <b>Top Speed:</b> Mach 0.925<br />
        <b>Capacity:</b> 16 passengers<br />
        <b>Features:</b> Panoramic windows, master suite, high-tech cockpit<br />
        <b>Description:</b> The Falcon 10X brings the sophistication of French design into aviation.
      </p>
      <hr />

      {/* --- Bombardier Global 8000 --- */}
      <h2>Bombardier Global 8000</h2>
      <img src="images/jet/p22.png" width="80%" alt="Bombardier Global 8000" className="hover-img" />
      <p>
        <b>Range:</b> 8,000 nautical miles<br />
        <b>Top Speed:</b> Mach 0.94<br />
        <b>Capacity:</b> 17 passengers<br />
        <b>Cabin:</b> 4-zone luxury cabin with full-size bed<br />
        <b>Description:</b> The Bombardier Global 8000 offers industry-leading comfort and performance.
      </p>
      <hr />

      {/* --- Boeing Business Jet MAX 8 --- */}
      <h2>Boeing Business Jet MAX 8</h2>
      <img src="images/jet/p4.png" width="80%" alt="Boeing Business Jet MAX 8" className="hover-img" />
      <p>
        <b>Range:</b> 6,600 nautical miles<br />
        <b>Top Speed:</b> Mach 0.85<br />
        <b>Capacity:</b> 25 passengers<br />
        <b>Features:</b> Private office, dining area, lounge, and bedroom<br />
        <b>Description:</b> The Boeing Business Jet MAX 8 redefines airborne luxury for world leaders.
      </p>

      <br />
      <hr />

      <h2>Luxury Jet Collection 2025</h2>
      <img src="images/jet/ps1.png" width="80%" alt="Jet Collection Montage" className="hover-img" />
      <p>
        Our 2025 collection showcases the most advanced jets from Gulfstream, Bombardier, Dassault, and Boeing.
      </p>
      
      <hr />

      <h1>Stay Tuned for New Jet Launches!</h1>
      <p>
        <b><Link to="/registration">Register now to receive updates and exclusive invitations to private jet unveilings →</Link></b>
      </p>
    </center>
  );
}

export default Jets;
