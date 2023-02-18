import { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import { searchUserProfiles } from './services/githubService';

function App() {
  const [userList, setUserList] = useState('');
  const [loading, setLoading] = useState(false);

  const searchProfiles = (hint) => {
    setLoading(true);
    searchUserProfiles(hint)
      .then(data => {
        setUserList(data.items);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <h1>GitHub Profile App</h1>
      <Search onSearch={searchProfiles} loading={loading}></Search>
      <div className="user-list">
        {userList && userList.map(user => (
          <div className="user" key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div className="user-info">
              <h2>{user.login}</h2>
              <p>{user.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;