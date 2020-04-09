import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (action, state) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
                state.users.push(action.payload)
                return {
                    ...state
                }
            break;
    
        default:
            return state;
    }
}

export class UsersProvider extends Component {
    state = {
        users: [
            {
              id: 1,
              name: "Ahmet",
              surname: "Mehmet",
              salary: "1000"    
            },
            {
              id: 2,
              name: "Güven",
              surname: "Topal",
              salary: "2000"    
            },
            {
              id: 3,
              name: "Osman",
              surname: "Makas",
              salary: "3000"    
            }
          ],
          dispatch: action => {
              this.setState(state => reducer(action, state))
          }
    }
    render() { 
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
          );
    }
}

const UsersConsumer = UserContext.Consumer;

export default UsersConsumer;
