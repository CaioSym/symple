import { ActionTypes, FormTypes } from './constants'
import { createProject, updateProject } from '../Project/actions'

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

export function openUpdateForm(projectId) {
  return function (dispatch, getState) {
    let project = getState().projects.find(p => p.id === projectId)
    dispatch(openForm(FormTypes.EDIT, project))
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

const projectActionForForm = (dispatch, form) =>  {
  switch(form.type) {
    case FormTypes.CREATE:
      dispatch(createProject(form.params))
      break
    case FormTypes.EDIT: 
      dispatch(updateProject(form.params))
      break
  }
  return Promise.resolve()
}

export function submitForm() {
  return function (dispatch, getState) {
    let form = getState().screens.projects.form

    if (!form) { return; }

    let projectAction = projectActionForForm(dispatch, form)
    return projectAction
      .then(done => dispatch(closeForm()))
      .catch(e => console.log(e))
  }
}