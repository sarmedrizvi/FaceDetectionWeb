import InputActionTypes from './Input.types'

export const InputText = (Text) => ({
    type: InputActionTypes.INPUT_TEXT,
    payload: Text.target.value
})

export const InputUrl = (Text) => ({
    type: InputActionTypes.URL,
    payload: Text
})
