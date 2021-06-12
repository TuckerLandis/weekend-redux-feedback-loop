import axios from 'axios'
import localFeedback from '../../feedback.data'

function Page5Review() {
const handleSubmit = () => {

    // swal here

    axios.get()

}


    return (
        <div className="display">
            <ul>
            <li>{localFeedback.feeling}</li>
            <li>{localFeedback.understanding}</li>
            <li>{localFeedback.support}</li>
            <li>{localFeedback.comments}</li>
            </ul>

            <button onClick={handleSubmit}> Submit</button>
        </div>
    )
    
    }
    
    export default Page5Review