import { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import UserList from './components/userList/UserList';
import { searchUserProfiles } from './services/githubService';

function App() {
  const [userList, setUserList] = useState('');
  const [loading, setLoading] = useState(false);

  const searchProfiles = async (hint) => {
    setLoading(true);
    const data = await searchUserProfiles(hint);
    setUserList(data.items);
    setLoading(false);
  };

  return (
    <main className="app wrapper">
      <h1 className='title'>GitHub Profile App</h1>
      <Search onSearch={searchProfiles} loading={loading}></Search>
      <UserList users={userList}></UserList>
    </main>
  );
}

export default App;