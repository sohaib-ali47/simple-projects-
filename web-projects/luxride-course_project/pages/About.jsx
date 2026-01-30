import { Link } from 'react-router-dom';

function About() {
  return (
    <center>
      <h1>About Luxury Lifestyle</h1>
      <hr />
      
      <h2>Our Mission</h2>
      <p>Luxury Lifestyle was founded on the belief that life's most extraordinary moments deserve equally extraordinary vehicles.</p>
      
      <hr />
      <h1>Elegance In Every Detail</h1>
      
      {/* Added the missing 3rd Jet image here */}
      <div>
        <Link to="/cars"><img src="images/cars/rr/int3.jpg" width="350" height="350" alt="car" className="hover-img" style={{margin: '10px'}} /></Link>
        <Link to="/boats"><img src="images/boat/pexels-ibnulharezmi-9326254.jpg" width="300" height="350" alt="boat" className="hover-img" style={{margin: '10px'}} /></Link>
        <Link to="/jets"><img src="images/jet/img1.jpg" width="355" height="350" alt="plane" className="hover-img" style={{margin: '10px'}} /></Link>
      </div>

      <h1>Our Core Values</h1>
      <table border="1" cellPadding="15" style={{borderColor: '#ffc300', marginTop: '20px'}}>
        <thead>
          <tr>
            <th>Excellence</th>
            <th>Exclusivity</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>We pursue perfection in every aspect.</td>
            <td>Our collection features rare vehicles.</td>
            <td>We deliver dreams.</td>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

export default About;