// Write your code here
import './index.css'

const TabItem = props => {
  const {text, onUpdate, isActive} = props
  const {tabId, displayText} = text

  const updateId = () => {
    onUpdate(tabId)
  }

  const changeStyle = isActive ? 'active-btn' : ''

  return (
    <li className="lists">
      <button
        className={`button ${changeStyle}`}
        type="button"
        onClick={updateId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
