We will be designing a small phone survey form, the HTML is already built for you.
You need to implement, the JS validation functions.

ageChange function will be run when someone types on age input. If they enter an age less than 5, show the error 'You need to be atleast 5 years old to participate' in #errors-holder div, and the submit button must be disabled. if the age is more than or equal to 5, then #errors-holder div should be empty and the submit button must be enabled.

Also since the default age is zero, if the user tries to submit without entering the age, show the error
'Please choose age' in #errors-holder div.

After filling in the details, when the user clicks on submit button display according to the given rules.

If the user checked own a phone box, then if their age is less than 13, show 'You are too young to have a phone' else show 'Use your phone in moderation' in the #result-holder div.

If they haven't checked that option and their age entered is less than 13 show 'You will get a phone soon' in the #result-holder div.

else show 'You should get a phone' in the #result-holder div.

 -->
 
 
 <h1>Phone Survey Form</h1>
    <form onsubmit="handleSubmit(event)">
        <label for="age">Your age</label>
        <input type="number" id="q_age" min="0" oninput="ageChange(event)" value="0">
        <br>
        <label for="q_owns_phone">Do you own a phone</label>
        <input type="checkbox" id="q_owns_phone">
        <br>

        <!-- <button type="submit" id="submitbutton">Submit</button> -->
        <button type="submit">Submit</button>
    </form>
    <div id="errors-holder"></div>
    <div id="result-holder"></div>
