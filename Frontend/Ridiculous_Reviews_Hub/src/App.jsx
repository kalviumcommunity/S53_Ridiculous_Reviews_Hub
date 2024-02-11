import './App.css'
import RidiculousReviews from './Components/RidiculousReviews'

function App() {

  const user1 = {
    UserId: 1,
    Username: 'User123',
    Email: 'user123@example.com',
    RegistrationDate: '2022-02-15',
  };

  return (  
    <>
      <RidiculousReviews {...user1} />
    </>
  )
}

export default App
