import './App.css';
import { getUsers, storage, ref, getDownloadURL } from './database/firebaseConfig';
// import axios from 'axios';

const IMG_URL = 'https://firebasestorage.googleapis.com/v0/b/raster-entrega.appspot.com/o/v5vTtQ5qlzI5qLJ8V4SX%2Fnotifications%2Foccurrences%2FvarrhrfGswJnrkOdtHQp%2FvarrhrfGswJnrkOdtHQp-Amassado?alt=media&token=87a4e483-f06c-4bc6-b37c-60a11053a53d';
const FILE_NAME = 'notification_01';

function App() {

  async function handleClick() {

    const url = await getDownloadURL(ref(storage, IMG_URL));

    console.log(url);
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'blob';

    xhr.onload = (event) => {
      const blob = xhr.response;
      const donwloadURL = window.URL.createObjectURL(
        new Blob([blob]),
      );

      const link = document.createElement('a');
      link.href = donwloadURL;
      link.setAttribute(
        'download',
        `${FILE_NAME}.jpg`,
      );

      document.body.appendChild(link);

      link.click();

      link.parentNode.removeChild(link);

    };
    xhr.open('GET', url);
    xhr.send();

    // getDownloadURL(ref(storage, IMG_URL))
    //   .then((url) => {

    //     const xhr = new XMLHttpRequest();
    //     xhr.responseType = 'blob';
    //     xhr.onload = (event) => {
    //       const blob = xhr.response;
    //       const donwloadURL = window.URL.createObjectURL(
    //         new Blob([blob]),
    //       );

    //       const link = document.createElement('a');
    //       link.href = donwloadURL;
    //       link.setAttribute(
    //         'download',
    //         `${FILE_NAME}.jpg`,
    //       );

    //       document.body.appendChild(link);

    //       link.click();

    //       link.parentNode.removeChild(link);

    //     };
    //     xhr.open('GET', url);
    //     xhr.send();

    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //   });
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => { handleClick() }}>Download</button>
          {/* <img id="myimg" /> */}
        </p>
      </header>
    </div>
  );
}

export default App;
