
const fetchGet = (url = ``) => {
    return fetch(url, {
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    })
    .then(response => response.json())
};

const fetchPost = (url = ``, data = {}) => {
    return fetch(url, {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
};

const fetchPut = (url = ``, data = {}) => {
    return fetch(url, {
        method: "PUT",
        cache: "no-cache",
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
};

const fetchDelete = (url = ``) => {
    return fetch(url, {
        method: "DELETE",
        cache: "no-cache",
        credentials: "same-origin", 
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
};

export const fetchProjects = () => {
  return fetchGet('/api/projects')
}

export const createProject = (project) => {
  return fetchPost('/api/projects', project)
}

export const updateProject = (project) => {
  return fetchPut(`/api/projects/${project.id}`, project)
}

export const deleteProject = (projectId) => {
  return fetchDelete(`/api/projects/${projectId}`)
}

export const fetchTasks = (projectId) => {
  return fetchGet(`/api/projects/${projectId}/tasks`)
}

export const createTask = (projectId, task) => {
  return fetchPost(`/api/projects/${projectId}/tasks`, task)
}

export const updateTask = (projectId, task) => {
  return fetchPut(`/api/projects/${projectId}/tasks/${task.id}`, task)
}

export const deleteTask = (projectId, taskId) => {
  return fetchDelete(`/api/projects/${projectId}/tasks/${taskId}`)
}