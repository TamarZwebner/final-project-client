import { request } from 'https';
import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import requestStore from '../store/request';

const Recaptcha: React.FC = () => {
    function onChange(value: any) {
        if (value) {
            requestStore.robot = true;
        }
    }
    return (
        <div className="App">
            <ReCAPTCHA
                sitekey="6LdKwq8jAAAAAEv8_VFsduQVobl_46P0u6GuqihQ"
                // sitekey="6LcYY7khAAAAAOL3e8Ah4gKrhlxlfykO615GjHaY"
                onChange={onChange}
            />
        </div>
    );
};
export default Recaptcha;


