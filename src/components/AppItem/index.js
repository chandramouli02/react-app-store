import './index.css'
import {Component} from 'react'

class AppItem extends Component {
  render() {
    const {appItem} = this.props
    const {appName, imageUrl} = appItem
    return (
      <li className="app-item">
        <img className="app-img" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}

export default AppItem
