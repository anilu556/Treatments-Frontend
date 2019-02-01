import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import superagent from 'superagent'


class LogIn extends Component{
  constructor() {
    super()
      this.state = {
          showLogIn: true,
          showRecord: false,
          name: '',
          email: ''
      }
    }

      handleChange = e => {
   this.setState({
     [e.target.name]: e.target.value
   })
  }

    onSubmitHandle = event => {
      event.preventDefault()

      if(!this.state.showLogIn) {
        this.props.history.push('/users')
        const json = {
          name: this.state.name,
          email: this.state.email,
        }
        console.log(json)

    superagent.post('https://radiant-sea-68380.herokuapp.com/api/v1/users')
    .send(json)
    .then( res => {
      alert('User Saved!')
    })
    .catch (e => alert (e))
  }
}

    login = (e) => {
      this.setState({
        showLogIn: !this.state.showLogIn,
        showRecord: !this.state.showRecord
      })
    }

  render(){

    const formStyles = {
      width: 400,
     margin: '50px auto',
    }

  return(
  <React.Fragment>
  {
    this.state.showLogIn &&
      <div style={formStyles}>
        <form onSubmit={ this.login }>
             <TextField
               required
               name="email"
               label="Email"
               fullWidth
               // onChange={ this.handleChange }
             />
             <TextField
               required
               name="password"
               type="password"
               label="Password"
               fullWidth
               // onChange={ this.handleChange }
             />
             <Button type='submit'  variant='contained'>Login</Button>
      </form>
    </div>
  }

  {
    this.state.showRecord &&
    <div style={formStyles}>
      <form onSubmit={ this.onSubmitHandle  }>
           <TextField
             required
             name="name"
             label="name"
             fullWidth
             onChange={ this.handleChange }
           />
           <TextField
             required
             name="email"
             label="email"
             fullWidth
             onChange={ this.handleChange }
           />
           <Button type='submit'  variant='contained'>Record</Button>
    </form>
  </div>
  }
  </React.Fragment>
    );
  }
}

export default LogIn
