import React from 'react';
import ArticleList from './ArticleList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      articles: []
    }
  }

  componentDidMount() {
   fetch('/data')
    .then(( results ) => {
      return results.json()
    })
      .then((json) => {
        return JSON.parse(json)
      })
        .then((parsedJSON) => {
          this.setState({articles: parsedJSON.data})
        })

  }


  render () {
    return (
        <div>
          <h1> Articles </h1>
          <ArticleList articles={this.state.articles} />
        </div>
    )
  }
}


export default App;

