import './index.css'
import {Component} from 'react'

class TabItem extends Component {
  render() {
    const {tabItem, onClickTab, activeTabCategory} = this.props
    const {tabId, displayText} = tabItem

    const onTabChange = () => {
      onClickTab(tabId)
    }

    const tabStyle =
      tabId === activeTabCategory ? 'active-tab-item tab-item' : 'tab-item'

    return (
      <li onClick={onTabChange}>
        <button type="button" className={tabStyle}>
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
