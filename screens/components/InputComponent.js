
import Input from 'react-native-elements';

const InputComponent = (
    label,
    placeholder,
    setState
    )=>{
        return (
            <Input label={label}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onChangeText={(val) => setState(val)} />
        )
    }
export default InputComponent