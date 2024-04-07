<template>
    <div>
      <h1 class=" skill-heading">Skills</h1>
      <p class="aw">Here, I'll introduce you to some of the skills I possess and provide brief descriptions for each. Feel free to explore!</p>
    
      <!-- Icons for various languages and tools with ratings -->
      <div class="logos">
        <div class="skill"  @click="toggleActive('js')">
          <i class="fab fa-js" title="JavaScript"></i>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
        </div>
    </div>
        <div class="skill" @click="toggleActive('reactjs')">
        <i class="fab fa-react" title="React.js"></i>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div> -->
      </div>

        <div class="skill">
          <i class="fab fa-vuejs" title="Vue.js"></i>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="skill">
          <i class="fas fa-terminal" title="Command Prompt"></i>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="skill" @click="toggleActive('xampp')">
            <img src="@/assets/xampp.jpg" alt="XAMPP" title="XAMPP"></img>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="skill">
          <i class="fab fa-php" title="PHP"></i>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="skill">
          <i class="fab fa-html5" title="HTML"></i>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="skill">
          <i class="fab fa-css3-alt" title="CSS"></i>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="skill">
          <i class="fab fa-node" title="Node.js"></i>
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
        </div>
        <div class="skill" @click="toggleActive('python')">
        <i class="fab fa-python" title="Python"></i>
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
      </div>
      <div class="skill" @click="toggleActive('cpp')">
  <i class="fab fa-cuttlefish" title="C++"></i>
  <div class="rating">
    <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
  </div>
</div>
      <h1 class="skill-heading">Description</h1>

<!-- JavaScript Icon -->
<div class="description-container">
<div class="logos">
  <div class="skill" @click="toggleActive('js')">
    <i class="fab fa-js" title="JavaScript"></i>
  </div>
  <div class="description-short js">
          JavaScript is a programming language.
          <button @click="toggleDescription('js')">See More</button>
        </div>
        <div class="description-full js hidden">
          JavaScript is a programming language that enables interactive web pages and is essential for web development. It is widely used both on the client-side and server-side.  JavaScript is executed on the client-side, meaning it runs directly within the web browser of the user. This enables developers to create rich and engaging user experiences without the need for server-side processing. JavaScript code is embedded within HTML documents or linked externally, and it is interpreted by the browser's JavaScript engine.
          <button @click="toggleDescription('js')">Hide</button>
        </div>
  <div class="skill" @click="toggleActive('reactjs')">
    <i class="fab fa-react" title="React.js"></i>
  </div>
  <div class="description-short reactjs">
        React.js is a JavaScript library for building user interfaces.
          <button @click="toggleDescription('reactjs')">See More</button>
        </div>
        <div class="description-full reactjs hidden">
            React.js is a JavaScript library for building user interfaces, known for its component-based architecture and reusability. It is known for its component-based architecture, which allows developers to build reusable UI components. React.js utilizes a virtual DOM for efficient rendering and provides features such as JSX for writing HTML-like code in JavaScript, state management, and lifecycle methods.
          <button @click="toggleDescription('reactjs')">Hide</button>
        </div>

  <div class="skill">
    <i class="fas fa-terminal" title="Command Prompt"></i>
  </div>
  <div class="description-short commandPrompt">
           Command Prompt is a command-line interpreter for executing commands in Windows.
          <button @click="toggleDescription('commandPrompt')">See More</button>
        </div>
        <div class="description-full commandPrompt hidden">
            Command Prompt is a command-line interpreter for executing commands in Windows. It provides a text-based interface for users to interact with the operating system by entering commands. Command Prompt allows users to perform various tasks such as navigating the file system, running programs, executing scripts, managing files and directories, and configuring system settings.
          <button @click="toggleDescription('commandPrompt')">Hide</button>
        </div>
        <div class="skill">
    <i class="fab fa-vuejs" title="Vue.js"></i>
  </div>
  <div class="description-short vuejs">
       Vue.js is a progressive JavaScript framework used for building interactive web interfaces.
          <button @click="toggleDescription('vuejs')">See More</button>
        </div>
        <div class="description-full vuejs hidden">
            Vue.js is a progressive JavaScript framework used for building interactive web interfaces. It focuses on the view layer and is designed to be incrementally adoptable, allowing developers to integrate it into existing projects. Vue.js provides features such as data binding, directives, computed properties, and a reactivity system that makes it easy to manage and manipulate the DOM. It is known for its simplicity, performance, and flexibility.
          <button @click="toggleDescription('vuejs')">Hide</button>
        </div>
  <div class="skill" @click="toggleActive('xampp')">
    <img src="@/assets/xampp.jpg" alt="XAMPP" title="XAMPP"></img>
  </div>
  <div class="description-short xampp">
       XAMPP is a cross-platform, free, and open-source software .
          <button @click="toggleDescription('xampp')">See More</button>
        </div>
        <div class="description-full xampp hidden">
            XAMPP is a cross-platform, free, and open-source software package that facilitates the creation of a local web server environment on personal computers. It includes several components essential for web development, such as Apache HTTP Server, MySQL database, PHP, and Perl. XAMPP enables developers to set up a local server environment on their machines, allowing them to develop and test web applications offline before deploying them to a live server. It is widely used by developers for PHP and MySQL-based web development projects due to its ease of installation and configuration.
          <button @click="toggleDescription('xampp')">Hide</button>
        </div>
  <div class="skill">
    <i class="fab fa-php" title="PHP"></i>
  </div>
  <div class="description-short php">
         PHP is a widely-used server-side scripting language 
          <button @click="toggleDescription('php')">See More</button>
        </div>
        <div class="description-full php hidden">
            PHP is a widely-used server-side scripting language primarily designed for web development but also used as a general-purpose programming language. It is embedded within HTML code and executed on the server to generate dynamic web pages. PHP supports a wide range of databases, web servers, and operating systems, making it highly versatile. It is known for its simplicity, ease of integration with web technologies, and extensive documentation.
          <button @click="toggleDescription('php')">Hide</button>
        </div>
  <div class="skill">
    <i class="fab fa-html5" title="HTML"></i>
  </div>
  <div class="description-short html">
          HTML, which stands for HyperText Markup Language.
          <button @click="toggleDescription('html')">See More</button>
        </div>
        <div class="description-full html hidden">
            HTML, which stands for Hypertext Markup Language, is the standard language used to create and structure web pages and web applications. It provides a set of elements or tags that define the structure and content of a webpage, such as headings, paragraphs, images, links, and forms. HTML documents are interpreted by web browsers to display content on the internet. It forms the backbone of every webpage, providing the foundation upon which CSS and JavaScript can enhance the presentation and interactivity of the content.
          <button @click="toggleDescription('html')">Hide</button>
        </div>
  <div class="skill">
    <i class="fab fa-css3-alt" title="CSS"></i>
  </div>
  <div class="description-short css">
    CSS, which stands for Cascading Style Sheets.
          <button @click="toggleDescription('css')">See More</button>
        </div>
        <div class="description-full css hidden">
            CSS, which stands for Cascading Style Sheets, is a styling language used to define the presentation and layout of HTML documents. It allows web developers to specify how the content of a webpage should be displayed, including aspects such as colors, fonts, spacing, and positioning. CSS works by selecting HTML elements and applying styles to them, either directly within HTML documents or through external style sheets. It plays a crucial role in separating the structure and content of a webpage from its visual design, enabling consistent styling across multiple pages and devices.
XAMPP (Cross-platform, Apache, MySQL, PHP, Perl):
          <button @click="toggleDescription('css')">Hide</button>
        </div>
  <div class="skill">
    <i class="fab fa-node" title="Node.js"></i>
  </div>
  <div class="description-short nodejs">
         Node.js is an open-source, cross-platform runtime environment.
          <button @click="toggleDescription('nodejs')">See More</button>
        </div>
        <div class="description-full nodejs hidden">
            Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code outside of a web browser. It uses the V8 JavaScript engine from Google Chrome to execute code on the server-side, enabling the development of scalable and high-performance network applications. Node.js is commonly used for building web servers, real-time web applications, APIs (Application Programming Interfaces), and command-line tools. It provides a vast ecosystem of libraries and frameworks, such as Express.js, that streamline the development process and make JavaScript a versatile language for both frontend and backend development.
          <button @click="toggleDescription('nodejs')">Hide</button>
        </div>
  <div class="skill" @click="toggleActive('python')">
    <i class="fab fa-python" title="Python"></i>
    </div>
    <div class="description-short python">
        Python is a high-level programming language known for its simplicity and readability.
          <button @click="toggleDescription('python')">See More</button>
        </div>
        <div class="description-full python hidden">
            Python is a high-level programming language known for its simplicity, readability, and versatility. It emphasizes code readability and allows developers to express concepts in fewer lines of code compared to other languages. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It has a vast standard library and a large ecosystem of third-party libraries, making it suitable for various domains such as web development, data science, artificial intelligence, and automation.
          <button @click="toggleDescription('python')">Hide</button>
        </div>
    <div class="skill" @click="toggleActive('cpp')">
  <i class="fab fa-cuttlefish" title="C++"></i>
  </div>
  <div class="description-short cpp">
         C++ is a powerful and widely used programming language.
          <button @click="toggleDescription('cpp')">See More</button>
        </div>
        <div class="description-full cpp hidden">
            C++ is a powerful and widely used programming language that combines the features of both high-level and low-level programming. It was developed by Bjarne Stroustrup in 1983 as an extension of the C programming language. C++ is known for its efficiency, flexibility, and versatility, making it suitable for various applications, including system software, game development, and desktop applications.

          <button @click="toggleDescription('cpp')">Hide</button>
          </div>
      </div>
    </div>
</div>
    
</div>
  </template>
  
  <script>
  export default {
    name: 'Projects',
    methods: {
      toggleActive(skill) {
        document.querySelectorAll('.skill').forEach(item => {
          item.classList.remove('active');
        });
        document.querySelector(`.skill-${skill}`).classList.toggle('active');
      },
      toggleDescription(skill) {
        const shortDesc = document.querySelector(`.description-short.${skill}`);
        const fullDesc = document.querySelector(`.description-full.${skill}`);
        shortDesc.classList.toggle('hidden');
        fullDesc.classList.toggle('hidden');
      }
    }
  }
  </script>

  <style scoped>
  .skill-heading{
    text-align: center;
    font-style: italic;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .aw{
    font-style: italic;
    font-size: large;
  }
  /* Styles for the navigation bar */

  nav {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  
  /* Styles for icons */
  .logos {
    margin-top: 20px;
  }
  
  .logos .skill {
    display: inline-block;
    text-align:left;
    margin-right: 20px; /* Add space between skills */
    color: green;
  }
  
  .logos .skill i {
    font-size: 60px; /* Adjust size as needed */
  }
  
  .logos .skill .rating {
    margin-top: 5px; /* Add space between icon and rating */
  }
  
  .logos .skill .rating i {
    color: blue; 
    font-size: 16px;
  }
  
  .logos .skill img {
  width: 30%;
  justify-content:flex-start;
  height: auto; /* Use auto to maintain aspect ratio */
}

/* Apply hover effect directly to the XAMPP image */
.logos .skill img:hover {
  cursor: pointer;
  filter: brightness(80%); /* Adjust brightness on hover */
}

  
  /* Hover effect */
  .skill:hover {
    cursor: pointer;
    color:black;
  }
 
  .skill.active {
    /* Add your active styles here */
    background-color: white;
  }
  .hidden {
  display:
   none;
}
.description-short button:hover,
.description-full button:hover {
  background-color: #333; /* Change background color on hover */
  color: #fff; /* Change text color on hover */
  cursor: pointer; /* Change cursor to pointer on hover */
}



  </style>