// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl, category} = details
  return (
    <li className="lists-2">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
