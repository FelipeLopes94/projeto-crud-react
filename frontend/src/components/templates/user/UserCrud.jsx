import React, { Component } from 'react';
import Main from '../Main';
import axios from 'axios';

const headerProps = {

    icon: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuarios: Incluir, Listar, Alterar e Excluir'

}

const baseUrl = "http://localhost:3001/users"
const initialState = {

    user: { user: '', email: '' },
    list: []

}
export default class UserCrud extends Component {

    state = { ...initialState }

    clear() {

        this.setState({ user: initialState.user })

    }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    save() {

        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ user: initialState.user, list })

            })

    }

    getUpdateList(user, add = true) {

        const list = this.state.list.filter(u => u.id !== user.id)

        if (add) list.unshift(user)

        return list


    }

    setStateData(event) {
        const user = { ...this.state.user };

        user[event.target.name] = event.target.value
        this.setState({ user })

    }

    renderForm() {
        return (
            <div className="form">

                <div className="row">
                    <div className="co-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Nome</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.user.name || ''}
                                onChange={e => this.setStateData(e)}
                                placeholder="Digite o nome..."
                            />
                        </div>
                    </div>
                    <div className="co-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">E-Mail</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                value={this.state.user.email || ''}
                                onChange={e => this.setStateData(e)}
                                placeholder="Digite o email..."
                            />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="col-12 d-flex justify-content-end">

                    <button className="btn btn-primary"
                        onClick={e => this.save(e)}>
                        Salvar
                    </button>

                    <button className="btn btn-seconday ml-2"
                        onClick={e => this.clear(e)}>
                        Cancelar
                    </button>

                </div>

            </div>
        )
    }

    loadUsers(user) {
        this.setState({ user })
    }

    removeUser(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdateList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-Mail</th>
                        <th>Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                   
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.loadUsers(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.removeUser(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }


    render() {
        return (

            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>

        )
    }
}