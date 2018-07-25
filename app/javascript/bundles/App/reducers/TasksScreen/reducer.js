import { ActionTypes, FormTypes } from './constants'

const INITIAL_STATE = {
  form: null,
}

const mapFormType = formType => {
  switch(formType) {
    case FormTypes.CREATE: return FormTypes.CREATE
    case FormTypes.EDIT: return FormTypes.EDIT
    default: return FormTypes.CREATE
  }
}

const mapFormParams = formParams => {
  return {
    id: formParams.id,
    title: formParams.title,
    priority: formParams.priority || 1,
    completed: formParams.completed || false,
    description: formParams.description,
  }
}

const mapForm = form => {
  return {
    type: mapFormType(form.type),
    params: mapFormParams(form.params || {})
  }
}

export const tasksScreenReducer = (prevState = INITIAL_STATE, action) => {
  let form = undefined
  let params = undefined
  switch (action.type) {
    case ActionTypes.OPEN_FORM:
      return Object.assign({}, prevState, { form: mapForm(action.payload.form) })
    case ActionTypes.UPDATE_FORM:
      params = Object.assign({}, prevState.form.params, action.payload.params)
      form = Object.assign({}, prevState.form, { params: params })
      return Object.assign({}, prevState, { form: form })
    case ActionTypes.CLOSE_FORM:
      return INITIAL_STATE
    default:
      return prevState
  }
}