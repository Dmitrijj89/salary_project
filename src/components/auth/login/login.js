import React, { Component } from 'react';
import './login.css';

export class Login extends Component {
    render() {
        return (
                <div className="modal-dialog modal-login">
                    <div className="modal-content">
                        <div className="modal-header">				
                            <h4 className="modal-title">Sign In</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                        <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                        <input type="text" className="form-control" name="password" placeholder="Password" required="required" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block btn-lg">Sign In</button>
                                </div>
                                <p className="hint-text"><a href="#">Forgot Password?</a></p>
                            </form>
                        </div>
                        <div className="modal-footer">Don't have an account? <a href="#">Create one</a></div>
                    </div>
                </div>
            )
        }
    }

export default Login
