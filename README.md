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

