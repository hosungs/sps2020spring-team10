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

/*
 * Fetches stats from the servers and adds them to the DOM.
 */
function checkLogin() {
  fetch('/login').then(response => response.json()).then((logged) => {

      console.log(logged);

      if (logged.log == true) {
          var str2 = "<p>Logout <a href=\"" + logged.logLink + "\">here</a>.</p>";
      } else {          
          var str2 = "<p>Login <a href=\"" + logged.logLink + "\">here</a>.</p>";
      }
      getComments();

      var str1 = "<p>Hello " + logged.userEmail + "!</p>";

      var greeting = makeElement(str1);
      var loglink = makeElement(str2);

      const logElement = document.getElementById('login');
      logElement.append(greeting);
      logElement.append(loglink);

  
  });
}