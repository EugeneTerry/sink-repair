// json-server database.json -p 8088 -w -This will start your json server

const applicationState = {
  request: [],
  plumbers: [] 

}

const API = "http://localhost:3000"

export const fetchRequests = () => {
  return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(
      (serviceRequests) => {
        // Store the external state in application state
        applicationState.requests = serviceRequests
        document.dispatchEvent(new CustomEvent("stateChanged"))
      }
    )
  }
  
  export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}));
  }

export const fetchPlumberRequest = () => {
  return fetch(`${API}/plumbers`)
  .then(response => response.json())
  .then(
    (plumberRequest) => {
      applicationState.plumbers = plumberRequest
      document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  )
}

export const getPlumbers = () => {
  return applicationState.plumbers.map(plumber => ({...plumber}));
}

export const sendRequest = (userServiceRequest) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(userServiceRequest) //convert from javascript to json
  }

//to dispatch the custom event after the POST operation has been completed.
  return fetch(`${API}/requests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
      fetchRequests() 
    }
  )
}
    
//now we are making a function whose responsiblity it is to initiate the fetch request for DELETE

export const deleteRequest = (id) => {
  return fetch(`${API}/requests/${id}`, { method: "DELETE" })
    .then(
      () => {document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  )
}

//This will perform the POST request to save the completion object to the API
export const saveCompletion = (userCompletionRequest) => {
  const fetchOptions = {
    method: "POST",
    headers : {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userCompletionRequest)
  }
  return fetch(`${API}/completions`, fetchOptions)
  .then(() => {
    document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  )
}

//This will retrieve all completion objects from the API
export const fetchCompletions = () => {
  return fetch(`${API}/completions`)
    .then(response => response.json())
    .then(
      (completionRequests) => {
        // Store the external state in application state
        applicationState.completions = completionRequests
        document.dispatchEvent(new CustomEvent("stateChanged"))
      }
    )
}