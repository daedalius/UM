import { Option } from '../../interfaces/option'

export interface SliderProps {
    name: String
    value: String
    options: Array<Option>
    onChange: (value: String) => void
}