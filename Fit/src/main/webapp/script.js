// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



function getjson() {
    console.log("test");
    fetch('/loginstatus').then(response => response.json()).then((loginstatus) => {
        const email = loginstatus.userEmail;
        const redirectUrl = loginstatus.logLink;
        const dataElement = document.getElementById('data-container');


        // if not logged in
        if(!loginstatus.log){
            dataElement.innerText = "Log in to see comments!";
            console.log("test1");
        }
        else {
            fetch('/data').then(response => response.json()).then((data) => {    
                dataElement.innerText = '';
                for (var i =0; i < data.length; i++){
                    if (data[i].text != ""){
                    dataElement.appendChild(createListElement(data[i].email + ' : '+ data[i].text));
                    console.log(data[i].text);
                    }
                }

                const createform = document.createElement('form');
                createform.setAttribute("action", "/data");
                createform.setAttribute("method", "POST");
    

                const textarea = document.createElement("textarea");
                const msg = document.createTextNode("Add a comment here");
                textarea.appendChild(msg);
                textarea.name = "text-input";
                createform.appendChild(textarea);



                const submitelement = document.createElement('input'); // Append Submit Button
                submitelement.setAttribute("type", "submit");
                // submitelement.setAttribute("name", "dsubmit");
               //  submitelement.setAttribute("value", "Submit");
                createform.appendChild(submitelement);
                dataElement.appendChild(createform);
                
            }); 
        }
    });   
}


function getLoginStatus() {
    fetch('/loginstatus').then(response => response.json()).then((loginstatus) => {
        const email = loginstatus.userEmail;
        const redirectUrl = loginstatus.logLink;
        const loginstatusLink = document.getElementById('loginstatuslink');
        loginstatusLink.href = redirectUrl;
        const loginstatusMsg = document.getElementById('loginstatus-container');
        if (!loginstatus.log){
            loginstatusLink.innerText = "Login here";
        }
        else{
            loginstatusLink.innerText = "Logout here";
            loginstatusMsg.innerText = "Hello " + email + " you are now logged in!";      
        }

    });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

function getFits() { 
    fetch('/display-fits').then(response => response.json()).then((display) => {
        const fitPicsElement = document.getElementById('fits');
        fitPicsElement.innerHTML = '';
        fits = display.fits;
        fits.forEach((fit) => {
            fitPicsElement.appendChild(createImgElement(fit.url));
            console.log(fit.url);
        });
        const fitForm = document.getElementById('fit-form');
        fitForm.action = display.uploadUrl;
    });

}

function createImgElement(url){
    const imgElement = document.createElement('IMG');
    imgElement.setAttribute('src', url);
    return imgElement;
}

