import React, { Component } from 'react';
import Medal from './Medal.jsx';

class Medals extends Component {
    getMedals() {
        let medalTypes = ['gold', 'silver', 'bronze'];
        let medals = [];
        let j = 0;
        for (var i=0; i<this.props.numberOfMedals; i++) {
            let medal = <Medal 
                type={medalTypes[j]}
                key={i}
            />
            medals.push(medal);
            j++;
            if (j === medalTypes.length) j = 0;
        }
        return medals;
    }

    render() {
        return (
            <div className='container'>
                {this.getMedals()}
            </div>
        )
    }
}

export default Medals;