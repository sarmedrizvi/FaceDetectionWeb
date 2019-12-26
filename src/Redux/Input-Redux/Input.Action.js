import InputActionTypes from './Input.types'

const InputText = (Text) => ({
    type: InputActionTypes.INPUT_TEXT,
    payload: Text.target.value
})

export default InputText;