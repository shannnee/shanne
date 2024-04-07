<template>
    <div class="scroll-container">
      <div class="about-container">
        <h1></h1>
        <img src="@/assets/profile.jpg" alt="Profile Picture" class="picture">
        <h2>Sharon Pinote Andrin</h2>
        <p>Hello Everyone! I am from <strong class="handwritten">BSIT-3D</strong>, currently studying at <strong class="handwritten">Cordova Public College</strong>.I lived in Almiya, Canduman Mandaue City, 20 years old and I am passionate about coding and creating awesome web applications, and I have a wealth of experience in website development.

With proficiency in various frameworks like Vue.js, React, Node.js, and other web technologies, I have honed my skills through the guidance of my instructors and extensive self-learning. Despite facing challenges along the way, I remain committed to continuous improvement and learning.

Apart from coding, I also indulge in recreational activities such as playing online games like <strong class="handwritten">Pixels</strong>, <strong class="handwritten">Mobile Legends (ML)</strong>, and more. These activities provide me with a refreshing break and a chance to unwind after hours of coding and problem-solving.

Through this portfolio, I aim to showcase my diverse skill set and provide insights into the various programming languages and technologies I've worked with. Feel free to explore my projects and reach out to me with any inquiries or collaborations. Let's connect and create something amazing together!</p>

  
        <div class="education-history">
          <h3>Education History</h3>   
          <div class="school-logos">
            <div class="school-logo">
              <div class="logo-box">
                <span class="handwritten">Primary</span>
                <img src="@/assets/primary.jpg" alt="Primary" style="width: 120px;">
                <p class="handwritten">2009-2015</p>
              </div>
            </div>
            <div class="school-logo">
              <div class="logo-box">
                <span class="handwritten">Secondary</span>
                <img src="@/assets/secondary.jpg" alt="Secondary" style="width: 120px;">
                <p class="handwritten">2015-2021</p>
              </div>
            </div>
            <div class="school-logo">
              <div class="logo-box">
                <span class="handwritten">Tertiary</span>
                <img src="@/assets/tertiary.jpg" alt="Tertiary" style="width: 120px;">
                <p class="handwritten">2021-2025</p>
              </div>
            </div>
            <!-- Add more logos as needed -->

          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'About'
  }

  </script>
  
  <style scoped>
  
  
  .about-container {
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  h1 {
    font-size: 28px;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  strong {
    font-weight: bold;
  }
  
  .picture {
    width: 150px; /* Adjust as needed */
    border-radius: 50%; /* To make it round */
    margin-bottom: 20px; /* Add some space below the picture */
  }
  
  .education-history {
    margin-top: 20px; /* Add some space above the Education History section */
  }
  
  .school-logos {
    margin-top: 20px; /* Add some space above the logos */
    display: flex;
    justify-content: center;
  }
  
  .school-logo {
    margin: 0 10px; /* Add spacing between logos */
    text-align: center;
  }
  
  .logo-box {
    border: 4px solid black; /* Add border with 4px thickness */
    border-radius: 10px; /* Round the corners */
    padding: 20px; /* Add padding */
    width: 140px; /* Adjust width as needed */
    height: 200px; /* Adjust height as needed */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .logo-box img {
    display: block; /* Ensure image is displayed correctly */
    margin-bottom: 10px; /* Add space below the image */
  }
  
  .logo-box {
    position: relative;
  }
  
  .logo-box span {
    position: absolute;
    top: 5px; /* Adjust top position to align text */
    left: 0;
    right: 0;
    font-size: 14px;
    font-weight: bold;
  }
  
.handwritten {
  font-family: 'Permanent Marker', cursive; /* Use Google Fonts handwritten font */
  font-size: 14px;
}
.school-logo:hover .logo-box {
  border-color: blue; /* Change border color on hover */
  cursor: pointer; /* Show pointer cursor on hover */
}
  </style>
  