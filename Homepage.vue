<template>
    <div>
      <nav>
        <h1></h1>
        <p></p>
      </nav>
      <div class="home-content">
        <div class="profile-container">
          <img src="@/assets/profile.jpg" alt="Profile Picture">
          <h2 class="shan">Sharon Pinote Andrin</h2>
        </div>
        <p>Hello Everyone! I am from <strong class="handwritten">BSIT-3D</strong>, currently studying at <strong class="handwritten">Cordova Public College</strong>.I lived in Almiya, Canduman Mandaue City, 20 years old and I am passionate about coding and creating awesome web applications, and I have a wealth of experience in website development.

With proficiency in various frameworks like Vue.js, React, Node.js, and other web technologies, I have honed my skills through the guidance of my instructors and extensive self-learning. Despite facing challenges along the way, I remain committed to continuous improvement and learning.

Apart from coding, I also indulge in recreational activities such as playing online games like <strong class="handwritten">Pixels</strong>, <strong class="handwritten">Mobile Legends (ML)</strong>, and more. These activities provide me with a refreshing break and a chance to unwind after hours of coding and problem-solving.

Through this portfolio, I aim to showcase my diverse skill set and provide insights into the various programming languages and technologies I've worked with. Feel free to explore my projects and reach out to me with any inquiries or collaborations. Let's connect and create something amazing together!</p>

        <!-- Include Projects component here -->
        <Projects />
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
          </div>
        </div>
  
        <div class="contact-button">
          <p>Feel free to explore my projects and get in touch! If you have something to ask</p>
      <router-link to="/contact" class="contact-link"><i class="fas fa-envelope"></i> Contact Me
      </router-link>
    </div>
      </div>
    </div>
  </template>
  
  
  <script>
  // Import the Projects component
  import Projects from './Projects.vue';
  
  export default {
    name: 'Home',
    components: {
      Projects, // Register the Projects component
    }
  }
  </script>
  
 <style scoped>
 .shan{
    font-style:oblique;
    font-size: xx-large;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
p {
    font-size: 16px;
    margin-bottom: 10px;
    text-align: justify;
    font-style: italic;
    font-size: large;
  }
/* Home content styling */
.home-content {
  padding-top: 50px; /* Adjust to match the height of the navbar */
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;
  min-height: calc(100vh - 50px); /* Subtract the height of the navbar */
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ensure elements are spaced evenly */
  margin-bottom: 20px; /* Add margin between profile and contact */
}

.profile-container img {
  width: 150px; 
  height: 150px; 
  border-radius: 50%; 
  border: 3px solid #333; 
  /* Add rotating effect */
  animation: rotateImage 4s linear infinite; /* Adjust speed as needed */
  /* Add glowing border effect */
  animation: glow 1.5s ease-in-out infinite alternate;
}

/* Keyframes for rotating effect */
@keyframes rotateImage {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Keyframes for glowing effect */
@keyframes glow {
  0% {
    box-shadow: 0 0 10px #fff; /* White glow */
  }
  100% {
    box-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff; /* Purple glow */
  }
}

.profile-info {
  margin-left: 20px; /* Add space between image and text */
}

.education-history {
  margin-top: 20px; /* Add some space above the Education History section */
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
  font-family: 'Permanent Marker', cursive;
  font-size: large;
}

.school-logo:hover .logo-box {
  border-color: blue; /* Change border color on hover */
  cursor: pointer; /* Show pointer cursor on hover */
}
.contact-button {
  margin-top: 20px;
  text-align: center; 
}

.contact-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  border: 2px solid #007bff; /* Border color same as background color */
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.contact-link:hover {
  background-color: black;
  border-color: forestgreen; /* Darker border color on hover */
}

/* Style the message icon */
.contact-link i {
  margin-right: 5px; /* Add space between icon and text */
}

</style>