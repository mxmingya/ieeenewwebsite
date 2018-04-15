
const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
//      end::vars[]

//      tag::app[]
   class Main extends React.Component {


       render() {
           return (
               <div>
                   <h1>Header</h1>
               </div>
           )
       }
   }
   // end::app[]

   // tag::user-list[]
   class UserList extends React.Component{
       render() {
           var users = this.props.users.map(user =>
               <User key={user._links.self.href} user={user}/>
           );
           return (
               <table>
                   <tbody>
                   <tr>
                       <th>Id</th>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Description</th>
                   </tr>
                   {users}
                   </tbody>
               </table>
           )
       }
   }
   // end::user-list[]

   class User extends React.Component{
       render() {
           return (
               <tr>
                   <td>{this.props.user.firstName}</td>
                   <td>{this.props.user.lastName}</td>
                   <td>{this.props.user.email}</td>
               </tr>
           )
       }
   }

// // tag::render[]
   ReactDOM.render(
       <Main />,
       document.getElementById('react')
   );