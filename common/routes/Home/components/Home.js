import React, {Component} from 'react'

import { StyleSheet, css } from 'aphrodite'
import data from '../data'

import ReactSortable from 'react-sortablejs'

// This is a static page. It uses an array to hold data about the resources
// and maintain DRY

class Home extends Component {
  state = {
    winterClothing: ['Touque', 'Mittens', 'Scarf'],
    footwear:['Boots', 'Flipy-flopies', 'Clogs']
  }

  render() {
    return (
      <div>
        <div>
          <ReactSortable
            options={{ group: 'shared' }}
            className='container'
            onChange={(order, sortable, evt) => {
              console.log('ose', order, sortable, evt)
              this.setState({ winterClothing: order})
            }}
          >
            {
              this.state.winterClothing.map(
                item => <div key={Math.random()} data-id={item}>{item}</div>
              )
            }
          </ReactSortable>
        </div>

        <br/>
        <div>----------------</div>
        <br/>

        <div>
          <ReactSortable
            options={{ group: 'shared' }}
            className='container'
            onChange={(order, sortable, evt) => {
              this.setState({ footwear: order})
            }}
          >
            {
              this.state.footwear.map(
                item => <div key={Math.random()} data-id={item}>{item}</div>
              )
            }
          </ReactSortable>
        </div>
      </div>
    )
  }
}

class Home2 extends React.Component {
    state = {
        items: ['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry']
    };

    render() {
        const items = this.state.items.map((val, key) => (<li key={key} data-id={val}>{val}</li>));

        return (
            <div>
                <ReactSortable
                    tag="ul" // Defaults to "div"
                    onChange={(order, sortable, evt) => {
                        this.setState({ items: order });
                    }}
                >
                    {items}
                </ReactSortable>
            </div>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  header: {
    fontSize: 28,
    lineHeight: '1.2',
    margin: '0 0 1.5rem'
  },
  lead: {
    fontSize: 18,
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0 0 1.5rem',
    color: '#555'
  },
  list: {
    fontSize: '1rem',
    listStyle: 'none',
    padding: 0
  },
  link: {
    display: 'block',
    fontSize: '1.25rem',
    margin: '0 0 .5rem',
    lineHeight: '1.5',
    fontWeight: 'bold',
    color: '#08c',
    opacity: 1,
    transition: '.2s opacity ease',
    textDecoration: 'none',
    ':hover': {
      opacity: 0.5,
      textDecoration: 'none'
    }
  }
})

export default Home
