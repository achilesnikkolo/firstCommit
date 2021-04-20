const getText = document.querySelector('#getText');
const getUser = document.querySelector('#getUser');
const getPost = document.querySelector('#getPost');
const addPost = document.querySelector('#addPost');
addPost.addEventListener('click', addPostFunction);
getText.addEventListener('click', () => {
  fetch('sample.txt')
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      document.querySelector('.output').innerHTML = `<p>${data}</p>`;
    })
    .catch((err) => console.log(err));
});

getUser.addEventListener('click', () => {
  fetch('user.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = '<h2>USER</h2>';
      data.forEach((user) => {
        output += `
          <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
          </ul>
          `;
      });
      document.querySelector('.output').innerHTML = output;
    });
});

getPost.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = '<h2>POST</h2>';
      data.forEach((post) => {
        output += `
            <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div>
            `;
      });
      document.querySelector('.output').innerHTML = output;
    });
});

function addPostFunction(e) {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let body = document.querySelector('#body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json , text/plain , */*',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
