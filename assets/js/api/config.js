---
---

// ^^ Do not remove the above front matter, it is required for Jekyll processing

export const baseurl = "{{ site.url }}{{ site.baseurl }}";

export const pythonURI =
  (location.hostname === "localhost" ||
   location.hostname === "127.0.0.1")
    ? "http://localhost:8426"
    : "https://pirates.opencodingsociety.com";

export const fetchOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
        'X-Origin': 'client'
    },
};

// User Login Function (allows both GET and POST)
export function login(options) {

    const requestOptions = {
        ...fetchOptions,
        method: options.method || 'POST',
        body: options.method === 'POST'
            ? JSON.stringify(options.body)
            : undefined
    };

    document.getElementById(options.message).textContent = "";

    fetch(options.URL, requestOptions)
    .then(response => {

        if (!response.ok) {
            const errorMsg = 'Login error: ' + response.status;
            console.log(errorMsg);
            document.getElementById(options.message).textContent = errorMsg;
            return response;
        }

        options.callback();
    })
    .catch(error => {
        console.log('Possible CORS or Service Down error: ' + error);

        document.getElementById(options.message).textContent =
            'Possible CORS or service down error: ' + error;
    });
}