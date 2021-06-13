const localFeedback = (state = {
  feeling: 0,
  understanding: 0,
  supported: 0,
  comments: '',
}, action) => {

  switch (action.type) {
    case 'ADD_FEELING':
      state.feeling = action.payload 
      return state

    break;
    case 'ADD_UNDERSTANDING':
    state.understanding = action.payload

    break;
    case 'ADD_SUPPORTED':
    state.supported = action.payload

    break;
    case 'ADD_COMMENTS':
    state.comments = action.payload
  
    break;
    case 'SUBMIT_FEEDBACK':
    state = {
      feeling: 0,
      understanding: 0,
      supported: 0,
      comments: '',
    }
    break;

  }
  return state
}


export default localFeedback