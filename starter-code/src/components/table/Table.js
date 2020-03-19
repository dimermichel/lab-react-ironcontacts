import React, { Component } from 'react'
import './Table.css'

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts : this.initalState()
        }
    }
    
    initalState() {
        let contactArr = []
        for (let i = 0; i < 5; i++) {
            contactArr.push(this.props[i]);
        }
        return contactArr;
    }

    addRandom = ev => {
        const contactsCopy = [...this.state.contacts]; 
        const randomNum = Math.floor(Math.random() * Object.keys(this.props).length)
        contactsCopy.push(this.props[randomNum]);
        this.setState({
         contacts: contactsCopy
        });
      };

      sortByName = ev => {
        const contactsCopy = [...this.state.contacts];
        contactsCopy.sort((a, b) => {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        this.setState({
         contacts: contactsCopy
        });
      };


      sortByPopularity = ev => {
        const contactsCopy = [...this.state.contacts]; 
        contactsCopy.sort((a, b) => {
            if(a.popularity > b.popularity) { return -1; }
            if(a.popularity < b.popularity) { return 1; }
            return 0;
        })
        this.setState({
         contacts: contactsCopy
        });
      };

      clickToDelete = index => {
        const contactsCopy = [...this.state.contacts]; 
        contactsCopy.splice(index, 1);
        this.setState({
            contacts: contactsCopy
        });
      };

    render() {
        //console.log(this.props)
        //console.log(this.state)
        return (
            <div className="center">
                <button onClick={this.addRandom}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort By Name</button>
                <button onClick={this.sortByPopularity}>Sort By Popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.contacts.map( (el, index) => {
                            return (
                                <tr key={ el.id }>
                                    <td><img className="img" src={el.pictureUrl} alt={el.name} /></td>
                                    <td>{el.name}</td>
                                    <td>{el.popularity}</td>
                                    <td><button onClick={() => this.clickToDelete(index)}>Delete</button></td>
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
            </div>
        )
    }
}
