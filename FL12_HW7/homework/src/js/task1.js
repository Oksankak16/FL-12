let minEmailNumber=5;
let minPasswordNumber=6;
let email = prompt('write your email');
if (email === '' || email === null) {
  alert('Canceled');
} else if (email.length < minEmailNumber) {
  alert('I don`t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
  let password = prompt('prompt for a password');
  if (password === '' || password === null) {
    alert('Canceled');
  } else if (email === 'user@gmail.com' && password === 'UserPass' ||
    email === 'admin@gmail.com' && password === 'AdminPass'
  ) {
    let question = confirm('Do you want to change your password?');
    if (!question) {
      alert('You have failed the change');
    } else {
      let oldPasword = prompt('write the old password');
      if (oldPasword === 'UserPass' || oldPasword === 'AdminPass') {
        let newPassword = prompt('write a new password');
        if (newPassword.length === 0) {
          alert('Canceled');
        } else if (newPassword.length < minPasswordNumber) {
          alert('It’s too short password. Sorry.');
        } else {
          let doublePassword = prompt('write new password again');
          if (doublePassword !== newPassword) {
            alert('You wrote the wrong password.');
          } else {
            alert('You have successfully changed your password.');
          }
        }
      } else {
        alert('Wrong old password');
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}
