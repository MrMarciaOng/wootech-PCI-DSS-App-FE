New changes 6 February

- changed Stripepayment.js to be a class, not a Stripe component. 
From
```
export default injectStripe(WrappedRegistrationForm);
```
To
```
export default WrappedRegistrationForm;
```

- added API call to backend in index.js (added emailID)
-- need backend API call link in index.js (added)
-- added google reCAPTCHA on wootech.mrmarciaong.com to email: wootechfe@gmail.com (refer to PCI-DSS google drive for password)
![googleRECAPTCHA](image4.png)


To run the file do:
```
npm i
```
Install all the dependencies.

Then, run 
```
npm start
```
------------------------------------------------------------------------------------------------------------------------
For Google Re-Captcha, please refer to the google drive folder for the secret key and the email information.
Currently the program will not run as the secret key is not entered. Please go to the google docs and enter the sitekey accordingly under Security.js.
```
<div>
        {/* You can replace captchaDemo with any ref word */}
        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="normal"
            data-theme="dark"            
            render="explicit"
            sitekey="" /*Enter sitekey here*/
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
</div>
```
Since we do not have a domain name yet, the reCaptcha will not work as desired.
------------------------------------------------------------------------------------------------------------------------
Payments Input 1
------------------------------------------------------------------------------------------------------------------------
![Payments Input 1](image2.png)
![Payments Input 2](image1.png)
Upon Click "Pay"
------------------------------------------------------------------------------------------------------------------------
![Upon click "Pay"](image3.png)