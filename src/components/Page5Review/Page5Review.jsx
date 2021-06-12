import axios from 'axios'
import feedbackLocal from '../../feedback.data.js'

function Page5Review() {
const handleSubmit = () => {

    // swal here

    axios.post('/fbRouter', feedbackLocal)
    .then(response => {
        console.log(response);
        feedbackLocal.feeling = -1
        feedbackLocal.understanding = -1
        feedbackLocal.support = -1
        feedbackLocal.comments = ''

    })
    .catch(error => {
        console.log('error in post', error);
    })

}


    return (
        <div className="display">
            <ul>
            <li>{feedbackLocal.feeling}</li>
            <li>{feedbackLocal.understanding}</li>
            <li>{feedbackLocal.support}</li>
            <li>{feedbackLocal.comments}</li>
            </ul>

            <button onClick={handleSubmit}> Submit</button>
        </div>
    )
    
    }
    
    export default Page5Review