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