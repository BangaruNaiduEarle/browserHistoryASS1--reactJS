import {Component} from 'react'

import HistoryList from '../HistoryList/index'

import './index.css'

class BrowserPage extends Component {
  state = {searchInput: ''}

  onChangeSearchBtn = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteDomain = id => {
    const {historyList} = this.props
    const filteredResult = historyList.filter(item => item.id !== id)

    this.setState({searchInput: filteredResult})
  }

  render() {
    const {searchInput} = this.state
    const {historyList} = this.props

    const searchResult = historyList.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="heading-bgContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo-history"
          />
          <div className="search-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="logo-search"
              />
            </div>
            <div>
              <input
                type="search"
                value={searchInput}
                placeholder="Search history"
                className="input-search"
                onChange={this.onChangeSearchBtn}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="unOrderListContainer">
            <ul className="unOrderList">
              {searchResult.map(eachItem => (
                <HistoryList
                  history={eachItem}
                  key={eachItem.id}
                  deleteItem={this.onDeleteDomain}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserPage
