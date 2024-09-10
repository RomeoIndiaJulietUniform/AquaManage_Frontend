import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    console.log('User logged out');
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Welcome to Home Page</h1>
      <p>You are logged in!</p>
      <button onClick={handleLogout} className="btn btn-primary">Logout</button>
    </div>
  );
}

export default HomePage;
