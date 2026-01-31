import { Link } from 'react-router-dom';

function Cars() {
  return (
    <center>
      <h1>Luxury Cars Collection</h1>
      <hr />
      <h3>Discover the world's most prestigious automobiles.</h3>

      {/* Porsche Section */}
      <div className="car-section">
        <h1>Top Pick of the Year</h1>
        <img src="images/porcha.png" width="100%" alt="Porsche Cayenne Turbo GT" className="hover-img" />
        <br /><br />
        <audio controls style={{width: '80%'}}>
          <source src="videos/song.mp3" type="audio/mpeg" />
        </audio>
        <p>The <b>Porsche Cayenne Turbo GT</b> combines the soul of a sports car with the strength of an SUV.</p>
        <br />
      </div>

      <hr />

      {/* Lamborghini Section */}
      <div className="car-section">
        <h1>Best Pick of Oct-2025</h1>
        <hr />
        <video autoPlay muted loop width="90%" controls style={{border: '3px solid #ffc300'}}>
          <source src="videos/car.mp4" type="video/mp4" />
        </video>
        <h1>Lamborghini Huracan-v8 Twin-Turbo</h1>
      </div>
      
      <h1>Exclusive Picks</h1>

      {/* Table 1 */}
      <hr />
      <table>
        <tbody>
          <tr>
            <td><img src="images/cars/rand/newpics1 (5).jpg" width="350" height="350" alt="Ferrari" className="hover-img" /></td>
            <td><img src="images/cars/rand/newpics1 (14).jpg" width="350" height="350" alt="Lambo" className="hover-img" /></td>
            <td><img src="images/cars/rand/newpics1 (11).jpg" width="350" height="350" alt="Rolls" className="hover-img" /></td>
          </tr>
          <tr>
            <td><b>Ferrari S80 Spider</b></td>
            <td><b>Lamborghini Huracan</b></td>
            <td><b>Rolls-Royce Phantom</b></td>
          </tr>
          <tr>
            {/* CHANGED TO BUTTONS */}
            <td><a href="https://preowned.ferrari.com/en-EN" target="_blank" className="btn-explore">Explore More</a></td>
            <td><a href="https://www.lamborghini.com/en-en" target="_blank" className="btn-explore">Explore More</a></td>
            <td><a href="https://www.rolls-roycemotorcars.com" target="_blank" className="btn-explore">Explore More</a></td>
          </tr>
        </tbody>
      </table>

      {/* Table 2 */}
      <hr />
      <table>
        <tbody>
          <tr>
            <td><img src="images/cars/rand/audi1 (4).jpg" width="350" height="350" alt="Porsche" className="hover-img" /></td>
            <td><img src="images/cars/rand/audi1 (1).jpg" width="350" height="350" alt="Audi" className="hover-img" /></td>
            <td><img src="images/cars/rand/m1.jpg" width="350" height="350" alt="Mercedes" className="hover-img" /></td>
          </tr>
          <tr>
            <td><b>Porsche-911</b></td>
            <td><b>Audi-R8</b></td>
            <td><b>Mercedes-C86</b></td>
          </tr>
          <tr>
            {/* CHANGED TO BUTTONS */}
            <td><a href="https://www.porsche.com" target="_blank" className="btn-explore">Explore More</a></td>
            <td><a href="https://www.audi.com" target="_blank" className="btn-explore">Explore More</a></td>
            <td><a href="https://www.mercedes-benz.com" target="_blank" className="btn-explore">Explore More</a></td>
          </tr>
        </tbody>
      </table>

      {/* Table 3 */}
      <hr />
      <table>
        <tbody>
          <tr>
            <td><img src="images/cars/rand/newpics1 (1).jpg" width="350" height="350" alt="Mustang" className="hover-img" /></td>
            <td><img src="images/cars/rand/newpics1 (3).jpg" width="350" height="350" alt="Bentley" className="hover-img" /></td>
            <td><img src="images/cars/rand/newpics1 (4).jpg" width="350" height="350" alt="GTR" className="hover-img" /></td>
          </tr>
          <tr>
            <td><b>Ford Mustang</b></td>
            <td><b>Bentley Continental</b></td>
            <td><b>Nissan GTR</b></td>
          </tr>
          <tr>
            {/* CHANGED TO BUTTONS */}
            <td><a href="https://www.ford.com" target="_blank" className="btn-explore">Explore More</a></td>
            <td><a href="https://www.bentleymotors.com" target="_blank" className="btn-explore">Explore More</a></td>
            <td><a href="https://www.nissanusa.com" target="_blank" className="btn-explore">Explore More</a></td>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

export default Cars;