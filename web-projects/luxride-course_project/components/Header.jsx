import Navbar from './Navbar';

function Header() {
  return (
    <header>
      <center>
        <table border="0" cellPadding="10">
          <tbody>
            <tr>
              <td>
                <img src="images/logo.jpg" width="100" height="100" alt="logo" />
              </td>
              <td>
                <Navbar />
              </td>
            </tr>
          </tbody>
        </table>

      </center>
    </header>
  );
}

export default Header;