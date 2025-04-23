var typed= new Typed(".text",{
    strings: ["Android Developer","Web Developer","UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

document.addEventListener("scroll", () => {
    const skills = document.querySelectorAll(".skill");
    const triggerPoint = window.innerHeight / 1.2;
  
    skills.forEach((skill) => {
      const top = skill.getBoundingClientRect().top;
      if (top < triggerPoint) {
        skill.classList.add("visible");
      }
    });
  });


  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});


function toggleChat() {
    let chatbot = document.getElementById("chatbot");
    chatbot.classList.toggle("active");
}
    function checkAnswer() {
        const answer = document.getElementById('quiz-answer').value;
        if (parseInt(answer) === 8) {
            alert("Correct! You may now continue.");
            document.getElementById('extra-questions').style.display = 'block';
        } else {
            alert("Oops! Try again.");
        }
    }

    function submitForm(event) {
        event.preventDefault(); // Prevent actual form submission

        const formData = new FormData(document.getElementById('gamifiedForm'));
        const data = Object.fromEntries(formData.entries());
        console.log("Submitted Data:", data);

        alert("Form submitted! Check the console for submitted values.");
        // Here, you could send data to a backend via fetch(), Firebase, etc.
    }

function toggleFloatingForm() {
    let floatingForm = document.getElementById("floating-form");
    floatingForm.classList.toggle("show");
}

  let chatStep = 0;
  const chatWindow = document.getElementById("chat-window");
  const chatInput = document.getElementById("chat-input");
  const formName = document.getElementById("form-name");
  const formEmail = document.getElementById("form-email");
  const formMessage = document.getElementById("form-message");
  const chatData = document.getElementById("chat-data");

  function addBotMessage(message) {
    const msg = document.createElement("div");
    msg.className = "bot-message";
    msg.innerText = message;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function addUserMessage(message) {
    const msg = document.createElement("div");
    msg.className = "user-message";
    msg.innerText = message;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function nextChatStep() {
    const userInput = chatInput.value.trim();
    if (!userInput) return;
  
    addUserMessage(userInput);
  
    switch (chatStep) {
      case 0:
        formName.value = userInput;
        addBotMessage(`Nice to meet you, ${userInput}! What's your email address?`);
        break;
      case 1:
        formEmail.value = userInput;
        addBotMessage(`Got it! What message would you like to s2end?`);
        break;
      case 2:
        formMessage.value = userInput;
        addBotMessage(`Thanks! Sending your message now... ✉️`);
  
        // Show the form so emailjs.sendForm can use it
        chatData.style.display = "block";
  
        // Send the form using EmailJS
        emailjs.sendForm("service_bdxdmn6", "template_e8na6k", chatData)
          .then(() => {
            addBotMessage("✅ Your message has been sent successfully!");
            chatData.reset(); // Optional: Clear form
            chatData.style.display = "none";
          }, (error) => {
            addBotMessage("❌ Failed to send message. Try again later.");
            console.error("EmailJS Error:", error);
          });
  
        break;
    }
  
    chatStep++;
    chatInput.value = "";
  }

  function sendGamifiedEmail(name, email, message) {
    document.getElementById("form-name").value = name;
    document.getElementById("form-email").value = email;
    document.getElementById("form-message").value = message;
  
    emailjs.sendForm("service_bdxdmn6", "template_e8na6k", "#email-form")
      .then(() => {
        alert("✅ Your message has been sent successfully!");
      }, (error) => {
        alert("❌ Failed to send message. Try again later.");
        console.error("EmailJS Error:", error);
      });
  }
  
  





