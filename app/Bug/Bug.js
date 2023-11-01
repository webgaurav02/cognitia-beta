import React, { useState } from "react";
import './Bug.css'
import { ReactComponent as Icon } from '../assets/images/link.svg';
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      const base64File = fileReader.result.split(',')[1];
      resolve(base64File);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
const Ellipse = ({ filled }) => (
  <div className="relative flex md:ml-[30px] flex-col w-full items-center">
    <div
      className={`w-4 h-4 rounded-full ${filled ? 'bg-red-500' : 'bg-gray-500'}`}
      style={{
        transition: 'background-color 500ms ease 1000ms', 
      }}
    ></div>
    <div
      className={`w-[2px] h-[56px] ${filled ? 'bg-red-500' : 'bg-gray-500'}`}
      style={{
        transition: 'background-color 500ms ease 1500ms', 
      }}
    ></div>
  </div>
);
function Popup({ isVisible, message }) {
  return (
    <div className={`popup ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
}
function Bug() {
  const [file, setFile] = useState(null);
  const [query, setQuery] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
  
    try {
      const base64File = await convertBase64(selectedFile);
      setFile(base64File);
      console.log('File successfully converted:', base64File);
    } catch (error) {
      console.error('Error converting file to base64:', error);
    }
  };
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !file || !query) {
      setPopupMessage('Please fill out all the fields before submitting.');
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
      }, 2000);
      return;
    }
    const obj = {
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'file': file,
      'query': query
    }
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('file', file);
    formData.append('query', query);
    console.log(obj)
    try {
      const response = await fetch('https://cognitiabackend.onrender.com/api/getBugs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
        body: JSON.stringify(obj),
      });
  
      if (response.ok) {
      
       setPopupMessage('Form data submitted successfully!');
         } else {
             setPopupMessage('Failed to submit form data.');
         }
  
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form data:', error);
      setPopupMessage('Error submitting form data.');
      setPopupVisible(true);
    }
  };
    return (
      
      <div className="grid grid-cols-1 md:grid-cols-3 bg-black p-5">
         <h1 className="text-4xl font-bold col-span-full text-white md:col-span-2 md:grid-cols-2 p-2  md:pl-[60px]">
                    Fill the form to report a <span className="text-red-500">bug</span>
                </h1>
      <div id="divinner1" className="grid gap-6 mb-6 col-span-full md:col-span-2 md:grid-cols-2 p-2  md:pl-[60px]">

                <p className="col-span-full text-gray-300 pb-3">
                    If you have any questions or bugs to report, you can submit a form and reach out to us here!
                </p>
                
                <div id="divinner3" className="sm:hidden grid-cols-full grid grid-cols-12 mb-[-30px] justify-center w-full">
           <div className="col-span-1 items-center w-full pt-[3px]">
              <Ellipse filled={query !== ''} />
              <Ellipse filled={file !== null} />
              <div className={`relative flex flex-col w-full items-center `}>
                <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <div className="col-span-11 items-left w-full">
              <p className="pt-[0px] mt-[0px] text-white"> Tell us about your concern </p>
              <br></br>
              <br></br>
              <p className="text-white"> Attach a picture of the bug</p>
              <br></br>
              <br></br>
              <p className="text-white"> Submit the query</p>
              <br></br>
              <br></br>
            </div>
          </div>
                <input
                    type="text"
                    id="first_name"
                    className="  border-b  text-sm  focus:border-black block w-full p-2.5 pl-[1px] bg-black border-gray-600 placeholder-gray-300 text-white"
                     placeholder="First Name"
                      onChange = {handleFirstNameChange}
                    required
                />
                
                <input
                    type="text"
                    id="last_name"
                    className="  border-b  text-sm focus:ring-blue-500 focus:border-black block w-full p-2.5 pl-[1px] bg-black border-gray-600 placeholder-gray-300 text-white"
                    placeholder="Last Name"
                    onChange={handleLastNameChange}
                />
                <input
                    type="email"
                    id="email_id"
                    onChange={handleEmailChange}
                    className="bg-gray-50 col-span-full border-b border-green-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-[1px] dark:bg-black dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="E-mail id"
                />
                 <label htmlFor="query" className="flex text-sm font-medium text-white  mt-6 mb-[-20px]  ">
                    Tell us about your problem . . .
                </label>
                 <input
                    type="text"
                    id="query"
                    className="bg-gray-50 mt-[0px] col-span-full border-b border-green-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-[1px] dark:bg-black dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Describe the problem here . . ."
                    onChange={handleQueryChange}
                />
            <label
  htmlFor="fileInput"
  className=" flex bg-black pt-7 pb-7 col-span-full border-2 text-center items-center border-dashed text-sm w-full border-white placeholder-gray-300 text-white cursor-pointer justify-center"
  style={{ backdropFilter: 'blur(1000px)' }}
>
  {file ? `Uploaded ${file.name}` : <p  > <Icon className=" inline-block w-4 h-4 mb-1 " />  Attach a screenshot or image of the bug</p>}
  <input
    type="file"
    id="fileInput"
    className="hidden"
    onChange={handleFileChange}
  />
</label>
             <div className=" col-span-full flex items-center justify-center md:items-left md:justify-start">  <button
                     type="button"
                     onClick={handleSubmit}
                     className="bg-grey-900 border p-2 text-white item-csnter rounded-md hover:bg-gray-600 active:bg-black w-64 "
                >
                    Submit
                </button></div>  
            </div>
            <div id="divinner2" className="hidden md:grid md:col-span-1 grid-cols-3 pt-[70px] justify-center w-full">
        <div className="col-span-1 items-right w-full pt-1.5">
          <Ellipse filled={query !== ''} />
          <Ellipse filled={file !== null} />
          <div className={`relative flex flex-col w-full items-center ml-[30px] `}>
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <div className="col-span-2 items-left w-full sm:text">
          <p className="pt-[0px] mt-[0px] text-white">Describe your concern </p>
          <br ></br>
          <br></br>
          <p className="text-white"> Attach bug image</p>
          <br></br>
          <br></br>
          <p className="text-white"> Submit the query</p>
          <br></br>
          <br></br>
        </div>
      </div>
      <Popup isVisible={popupVisible} message={popupMessage} />
    </div>
  );
}

export default Bug;
