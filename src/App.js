import React, { Component } from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  loadUser = () => {
    fetch('/api/user')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data });
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <Header />
        <button onClick={this.loadUser}>Load User</button>
        {user && <UserProfile user={user} />}
        <Footer />
      </div>
    );
  }
}

export default App;
