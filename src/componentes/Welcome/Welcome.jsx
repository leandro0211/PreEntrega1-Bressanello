import './styles.css'

const Welcome = ({greeting}) => {
    return (
        <div className="greeting">
            {greeting}
        </div>
    )
}

export default Welcome