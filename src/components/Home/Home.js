import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Temp Homepage</h1>
            <button onClick={()=>navigate('/search')}>Search</button>
            <button onClick={()=>navigate('/user-search')}>Users</button>
            <button onClick={()=>navigate('/create-account')}>Create Account</button>
        </div>
    );
}

export default Home;