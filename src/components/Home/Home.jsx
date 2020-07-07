import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../redux/actions/user.actions';

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const mapDispatchToProps = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}


class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.userData &&
                <div>
                    <h1>Hi {users.userData.firstName}!</h1>
                    <p>You're logged in with React!!</p>
                </div>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
