import { Link } from 'react-router-dom';

function Home() {
  return (
    <center>
      <video autoPlay muted loop width="100%" height="100%" controls style={{border: '3px solid #ffc300'}}>
        <source src="videos/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1><b>Welcome to Luxury Website</b></h1>
      <hr />

      <h3>
        At Luxury Lifestyle, we curate the finest selection of premium vehicles for the discerning individual. 
      </h3>

      <br /><br />
      <h2>Our History</h2>
      <img src="images/main_pic/img1.jpg" width="800" height="600" alt="History" className="hover-img" />
      <p>
        Founded in 2015, Luxury Lifestyle has grown into a premier provider of high-end vehicles and experiences.
      </p>

      <h1><b>Our Featured Collection</b></h1>
      <hr />
      
      <table>
        <tbody>
          <tr>
            <td><Link to="/cars"><img src="images/cars/rand/img2.jpg" width="400" alt="Luxury Car" className="hover-img" /></Link></td>
            <td><Link to="/boats"><img src="images/boat/img3.jpg" width="400" alt="Luxury Yacht" className="hover-img" /></Link></td>
            {/* LINKED JET IMAGE TO JET PAGE */}
            <td><Link to="/jets"><img src="images/jet/img3.jpg" width="400" alt="Private Jet" className="hover-img" /></Link></td>
          </tr>
          <tr>
            <th>Luxury Car</th>
            <th>Luxury Yachts</th>
            <th>Private Jets</th>
          </tr>
          <tr>
            {/* CHANGED TO BUTTONS */}
            <td><Link to="/cars" className="btn-explore">View Collection</Link></td>
            <td><Link to="/boats" className="btn-explore">View Collection</Link></td>
            <td><Link to="/jets" className="btn-explore">View Collection</Link></td>
          </tr>
        </tbody>
      </table>

      <h1>Our Rapid Growth</h1>
      <img src="images/main_pic/8878cc7c-4fda-4b5c-8cb8-f17439b3b74f.jpg" width="50%" alt="Growth" className="hover-img" />
    </center>
  );
}

export default Home;