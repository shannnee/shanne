<template>
    <div>
      <h1>Contact</h1>
      <div class="contact-info">
        <!-- Email link with Gmail icon -->
        <a href="mailto:sharonandrin@gmail.com">
          <i class="far fa-envelope icon-gmail"></i> sharonandrin@gmail.com
        </a>
        <!-- Phone link with phone icon -->
        <a href="tel:09704680599">
          <i class="fas fa-phone-alt icon-phone"></i> 09704680599
        </a>
        <!-- Facebook link with Facebook icon -->
        <a href="https://www.facebook.com/shanne.dy.7">
          <i class="fab fa-facebook-f icon-facebook"></i> Facebook
        </a>
        <!-- Twitter link with Twitter icon -->
        <a href="https://x.com/PinoteShar92381?t=5SC-vcEYAfkrx5ZiBzC-jw&s=07">
          <i class="fab fa-twitter icon-twitter"></i> Twitter
        </a>
        <!-- TikTok link with TikTok icon -->
        <a href="https://www.tiktok.com/@annedrin19?_t=8lIxFsRuD5d&_r=1">
          <i class="fab fa-tiktok icon-tiktok"></i> TikTok
        </a>
        <!-- Instagram link with Instagram icon -->
        <a href="https://www.instagram.com/sha_nne0?igsh=MWlzem1xN3RvbzM5bw==">
          <i class="fab fa-instagram icon-instagram"></i> Instagram
        </a>
      </div>
      <div class="social-icons">
        <!-- Facebook icon -->
        <a href="https://www.facebook.com/shanne.dy.7" class="icon-facebook"></a>
        <!-- Twitter icon -->
        <!-- TikTok icon -->
        <a href="https://www.tiktok.com/@annedrin19?_t=8lIxFsRuD5d&_r=1" class="icon-tiktok"></a>
        <!-- Instagram icon -->
        <a href="https://www.instagram.com/sha_nne0?igsh=MWlzem1xN3RvbzM5bw==" class="icon-instagram"></a>
        
      </div>
    </div>
  </template>
  
  <style scoped>
  .contact-info {
    margin-top: 20px; /* Add some margin between the paragraphs */
  }
  
  .contact-info p {
    font-size: 16px;
    margin-bottom: 10px; /* Add some space between each contact information */
  }
  
  .contact-info a {
    display: block; /* Display links as block elements */
    margin-bottom: 5px; /* Add some space between each link */
  }
  
  /* Styles for icon images */
  .icon-gmail,
  .icon-phone,
  .icon-facebook,
  .icon-twitter,
  .icon-tiktok,
  .icon-instagram {
    margin-right: 10px; /* Add some space between icon and text */
  }
  
  /* Add other icon styles as needed */
  
  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* Add margin above social icons */
  }
  
  .social-icons a,
  .social-icons span {
    display: inline-block;
    font-size: 36px; /* Adjust icon size */
    color: #333; /* Icon color */
    margin: 0 10px; /* Add margin around icons */
    transition: transform 0.3s; /* Add smooth transition effect */
  }
  
  .social-icons a:hover,
  .social-icons span:hover {
    transform: scale(1.2); /* Scale up the icon on hover */
  }
  </style>
  