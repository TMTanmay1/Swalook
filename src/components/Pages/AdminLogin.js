import React , {useState} from 'react'
import '../Styles/AdminLogin.css'
import { useNavigate } from 'react-router-dom';
import ForgetPassword from './ForgetPassword';
import Logo1 from '../../assets/S_logo.png'

function AdminLogin() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    phoneNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value
    });
  };

    const handleResetPasswordClick = () => {
      
      navigate('/forgetpassword');
  };
  return (
    <div className='Admin_login_container'>
        
        <div className='admin_login_main'>
            <div className='admin_left'>
            <div className='admin_logo'>
            <img className='admin_S_logo' src={Logo1} alt="Logo" />
            </div>
            <div className='admin_form'>
            <h1 className='admin_login_head'>Admin Login</h1>
            <form>
          <div className="AL_input-group">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="tel"
              id="phone-number"
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </div>
          <div className="AL_input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
                placeholder="Enter your password"
                onChange={handleChange}
            />
          </div>
          <p class="forgot-password">Forgot your password? <a onClick={handleResetPasswordClick}>Reset it</a></p>
          <button type="submit">Login</button>
          </form>
        </div>
            </div>

            <div className='admin_right'>
                <div className='admin_loginbg'>
                    <div className='welcome_text'>
                    
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default AdminLogin