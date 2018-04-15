import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface InterfaceUser {
    id: string;
    firstname:string;
    lastname:string;
    email:string;
}

interface InterfaceAppProps {}

interface InterfaceAppState {
    users:Array<InterfaceUser>;
    isLoading:boolean;
}



class App extends React.Component<InterfaceAppProps, InterfaceAppState> {

    constructor(props: InterfaceAppProps) {
        super(props);
        this.state = {
            users : [],
            isLoading: false,
        }
    }
    public componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/demo/all')
            .then(response => response.json())
            .then(data => this.setState({users:data, isLoading:false}));
    }


    public render() {
        const {users, isLoading} = this.state;

        if(isLoading) {
            return <p>Loading...</p>
        }

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <h1>user list</h1>
            {users.map((users:any) =>
                <div id={users.id}>
                    {users.firstname}
                </div>
            )};
        </div>
      );
    }


}



export default App;
