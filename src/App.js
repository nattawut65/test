import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="navbar" id="navbar__id">
      <div>
        <img src='logo vergil.jpg' alt='LOGO'/>
      </div>
      <ul className="navbar__menu">
        <li>หน้าแรก</li>
        <li>ตารางเทียลแคลอรี่</li>
        <li>ผู้จัดทำ</li>
      </ul>
      <div className='navbar__footer'>
      </div>
    </div>
  );
}

export default App;

