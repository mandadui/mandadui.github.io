// wishes.js
const Greeting = () => {
  const currentHour = new Date().getHours();
  let greetingMessage;

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = 'Good Morning!!!';
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = 'Good Afternoon!!!';
  } else {
    greetingMessage = 'Good Evening!!!';
  }

  alert(greetingMessage); // Alert moved outside of the conditional statement

  return React.createElement('h2', null, greetingMessage);
};

ReactDOM.render(React.createElement(Greeting, null), document.getElementById('greeting-root'));