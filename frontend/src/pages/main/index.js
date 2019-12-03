import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/pessoas');

        console.log(response);
    };

    render() {
        return <h1>Hello Rest In fun</h1>
    }
}