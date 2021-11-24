import './InputPair.css';

export type InputPairProps = {
    id: string;
    headerText: string;
    isValid(id: string): boolean;
    onChange(id: string, value: string): void;
}

export function InputPair(props: InputPairProps) {
    return (
        <div className='input-pair'>
            <label htmlFor={props.id}>{props.headerText}</label>
            <input
                className={props.isValid(props.id) ? 'input-default' : 'input-invalid'}
                onChange={value =>  props.onChange(props.id, value.target.value)}
                type='text'
                id={props.id}
                name='' />
        </div>
    );
}