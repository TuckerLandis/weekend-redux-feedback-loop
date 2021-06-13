import { useHistory } from 'react-router-dom'

function Page6Thanks() {
    const history = useHistory();

    const handleNext = () => {
        history.push('/')
    }

    const handleHistory = () => {
        history.push('/admin')
    }

    return (
        <div className="display">
              <p className="prompt">
                Thanks!
            </p>
        

            <button onClick={handleHistory} className="prompt button">See History</button>

            <button onClick={handleNext} className="prompt button">Restart</button>
        </div>
    )
    }
    
    export default Page6Thanks


    //need axios put and axios delete here
    