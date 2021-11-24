import React, { isValidElement, useRef, useState } from 'react';
import './DataEntryForm.css';
import { FormSegment } from './FormSegment';
import { InputPair } from './InputPair';

export function DataEntryForm() {
    const [values, SetValues] = useState(new Map<string, string>());
    const isFormValid = values.size >= 7 && !Array.from(values.keys()).some(x => !checkValidity(x))
    const submitButton =
        <button
            disabled={!isFormValid}
            style={{ gridColumn: 2, gridRow: 3 }}>Skicka in offertförfrågan</button>;

    return (
        <div className='def-container'>
            <form onSubmit={handleSubmit}>
                <div style={{ gridColumn: 2, gridRow: 2 }}>
                    <FormSegment
                        number={1}
                        headerText='Kontaktuppgifter'>
                        <div>
                            <InputPair
                                headerText={'FÖRNAMN'}
                                id='fname'
                                onChange={setValueOf}
                                isValid={checkValidity} />
                            <InputPair
                                headerText={'EFTERNAMN'}
                                id='lname'
                                onChange={setValueOf}
                                isValid={checkValidity} />
                        </div>
                        <div>
                            <InputPair
                                headerText={'E-POST'}
                                id='email'
                                onChange={setValueOf}
                                isValid={checkValidity} />
                            <InputPair
                                headerText={'MOBILNR'}
                                id='mobile'
                                onChange={setValueOf}
                                isValid={checkValidity} />
                        </div>
                    </FormSegment>
                    <FormSegment
                        number={2}
                        headerText='Addressuppgifter'>
                        <InputPair
                            headerText={'Från vilken address ska du flytta?'}
                            id='sourceAddress'
                            onChange={setValueOf}
                            isValid={checkValidity} />
                        <InputPair
                            headerText={'Till vilken address ska du flytta?'}
                            id='targetAddress'
                            onChange={setValueOf}
                            isValid={checkValidity} />
                    </FormSegment>
                    <FormSegment
                        number={3}
                        headerText='Flyttuppgifter'>
                        <div>
                            <InputPair
                                headerText={'Bostadens yta i m2'}
                                id='livingSpace'
                                onChange={setValueOf}
                                isValid={checkValidity} />
                            <InputPair
                                headerText={'Eventuell biyta, vind, förråd etc i m2'}
                                id='biArea'
                                onChange={setValueOf}
                                isValid={checkValidity} />
                        </div>
                        <div>
                            <InputPair
                                headerText={'Eventuella skrymmande saker. Pianon etc?'}
                                id='pianos'
                                onChange={setValueOf}
                                isValid={checkValidity} />
                            <div className='input-pair'>
                                <label>Behövs packhjälp?</label>
                                <div className='radio-group'>
                                    <div className='input-radio'>
                                        <label htmlFor='yes'>Ja</label>
                                        <input type='radio' id='yes' name='packingAssistance' value='yes' checked />
                                    </div>
                                    <div className='input-radio'>
                                        <label htmlFor='no'>Nej</label>
                                        <input type='radio' id='no' name='packingAssistance' value='no' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FormSegment>
                </div>
                {submitButton}
            </form>
        </div>
    );

    function setValueOf(name: string, value: string) {
        SetValues(new Map(values.set(name, value)));
    }

    function checkValidity(name: string) {
        switch (name) {
            case 'fname':
            case 'lname':
            case 'sourceAddress':
            case 'targetAddress':
                return hasTextValue(name);
            case 'email':
                return checkEmail();
            case 'mobile':
                return isNumberLongerThan(name, 7);
            case 'livingSpace':
                return isNumberLongerThan(name, -1);
            case 'biArea':
                return checkBiArea();
            case 'pianos':
                return true;
        }

        return true;
    }

    function hasTextValue(name: string) {
        const val = values.get(name);
        return val !== undefined && val.length > 0;
    }

    function checkEmail() {
        const val = values.get('email');
        return val !== undefined && /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(val);
    }

    function isNumberLongerThan(id: string, len: number) {
        const val = values.get(id);
        return val !== undefined && val.length > len && !isNaN(Number(val));
    }

    function checkBiArea() {
        const val = values.get('biArea');
        if (val !== undefined) {
            return !isNaN(Number(val));
        } else {
            return true;
        }
    }

    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        if (isFormValid) {
            alert('The name you entered was: ${name}');
        }
    }
}