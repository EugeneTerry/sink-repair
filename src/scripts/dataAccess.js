// json-server database.json -p 8088 -w -This will start your json server

const applicationState = {
  request: [] 

}

const API = "http://localhost:8088"

export const fetchRequests = () => {
  return fetch(`${API}/requests`)
    .then(response => response.json())
    .then(
      (serviceRequests) => {
        // Store the external state in application state
        applicationState.requests = serviceRequests
      }
    )
}

export const getRequests = () => {
  return applicationState.requests.map(request => ({...request}));

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
        document.dispatchEvent(new CustomEvent("stateChanged"))
      })
    }
    
//now we are making a function whose responsiblity it is to initiate the fetch request for DELETE

export const deleteRequest = (id) => {
  return fetch(`${API}/requests/${id}`, { method: "DELETE" })
      .then(
          () => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
          }
      )
}
