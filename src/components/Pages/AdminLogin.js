import React , {useState} from 'react'
import '../Styles/AdminLogin.css'
import Logo1 from '../../assets/S_logo.png'

function AdminLogin() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className='Admin_login_container'>
        
        <div className='admin_login_main'>
            <div className='admin_left'>
            <div className='admin_logo'>
            <img className='admin_S_logo' src={Logo1} alt="Logo" />
            </div>
            <div className='admin_form'>
            <h1 className='admin_login_head'>Admin Login</h1>
          <div className="AL_input-group">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="tel"
              id="phone-number"
              value={phoneNumber}
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="AL_input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
                placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p class="forgot-password">Forgot your password? <a href="#">Reset it</a></p>
          <button type="submit">Login</button>
        </div>
            </div>

            <div className='admin_right'>
                <div className='admin_loginbg'>
                    <div className='welcome_text'>
                    <h1 className='admin_welcome'> Welcome </h1>
                    <h1 className='admin_welcome'> Admin!</h1>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default AdminLogin