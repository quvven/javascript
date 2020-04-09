import React, { Component } from 'react'
import UsersConsumer from '../context'

export default class Usercard extends Component {
    onDeleteUser = (id, dispatch, e) => {
        dispatch({
            type: "DELETE_USER",
            payload: id
        });
    }
    onAddUser = (dispatch, e) => {
        dispatch({
            type: "ADD_USER",
            payload: {
                id:1,
                name: "Yeni",
                surname: "Kullanıcı",
                salary: 5000
            }
        })
    } 
    render() {
        return (
            <UsersConsumer>
                {
                    value => {
                        const {users, dispatch} = value;
                        return (
                            <div>
                                {
                                users.map(user => {
                                        return (
                                            <div className="card" key={user.id}>
                                                <div className="card-header d-flex jusify-container">
                                                    <div className="col-11">
                                                        <h4 className="d-inline">User</h4>
                                                    </div>
                                                    <div className="col-1">
                                                        <i 
                                                            className="fa fa-trash float-left pt-1"
                                                            onClick={this.onDeleteUser.bind(this, user.id, dispatch)}
                                                        ></i>
                                                        <i 
                                                            className="fa fa-plus float-right pl-1 pt-1"
                                                            onClick={this.onAddUser.bind(this, dispatch)}
                                                        ></i>
                                                    </div>
                                                    
                                                </div>
                                                <div className="card-body">
                                                    <p>İsim: {user.name}</p>
                                                    <p>Soyisim: {user.surname}</p>
                                                    <p>Maaş: {user.salary}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>                            
                        )
                    }
                }
            </UsersConsumer>

        )
    }
}
