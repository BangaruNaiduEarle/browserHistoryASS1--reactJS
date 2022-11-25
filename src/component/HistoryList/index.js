import './index.css'

const HistoryList = props => {
  const {history, deleteItem} = props

  const {title, timeAccessed, logoUrl, domainUrl} = history

  const {id} = history

  const onClickDeleteDomain = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item-style">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <div className="titles-style">
        <p className="domain-title">{title}</p>
        <p>{domainUrl}</p>
        <button
          type="button"
          testid="delete"
          className="delete"
          onClick={onClickDeleteDomain}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
