import { ActionTypes, FormTypes } from './constants'
import { loadTasks, createTask, updateTask } from '../Task/actions'
import { push } from 'connected-react-router'

export function openTasksScreen(projectId) {
  return function (dispatch, getState) {
    return dispatch(loadTasks(projectId))
      .then(() => dispatch(push(`/project/${projectId}`)))
  }
}

const openForm = (formType, initialParams = {}) => {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.OPEN_FORM,
      payload: {
        form: {
          type: formType,
          params: initialParams
        }
      }
    })
    return Promise.resolve()
  }
}

export function openCreateForm() {
  return openForm(FormTypes.CREATE)
}

export function openUpdateForm(taskId) {
  return function (dispatch, getState) {
    let task = getState().tasks.find(p => p.id === taskId)
    dispatch(openForm(FormTypes.EDIT, task))
    return Promise.resolve()
  }
}

export function setFormTitle(title) {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.UPDATE_FORM,
      payload: {
        params: {
          title: title
        }
      }
    })
    return Promise.resolve()
  }
}

export function setFormDescription(description) {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.UPDATE_FORM,
      payload: {
        params: {
          description: description
        }
      }
    })
    return Promise.resolve()
  }
}

export function closeForm() {
  return function (dispatch, getState) {
    dispatch({
      type: ActionTypes.CLOSE_FORM,
      payload: null
    })
    return Promise.resolve()
  }
}

const taskActionForForm = (dispatch, form) =>  {
  switch(form.type) {
    case FormTypes.CREATE:
      dispatch(createTask(form.params))
      break
    case FormTypes.EDIT: 
      dispatch(updateTask(form.params))
      break
  }
  return Promise.resolve()
}

export function submitForm() {
  return function (dispatch, getState) {
    let form = getState().screens.tasks.form

    if (!form) { return; }

    let taskAction = taskActionForForm(dispatch, form)
    return taskAction
      .then(done => dispatch(closeForm()))
      .catch(e => console.log(e))
  }
}