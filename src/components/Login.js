import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LogIn extends Component{
  constructor(props) {
    super(props)
        this.state = {
            open: false
        }
    }

    handleChange = () => {
        this.setState({
            open: !this.state.open
        })
    }
  render(){

    const formStyles = {
      width: 400,
     margin: '50px auto',
    }

  return(
  <div style={formStyles}>
    <form onSubmit={ this.login }>
           <TextField
             required
             name="email"
             label="Email"
             fullWidth
             onChange={ this.handleChange }
           />
           <TextField
             required
             name="password"
             type="password"
             label="Password"
             fullWidth
             onChange={ this.handleChange }
           />
           <Button type='submit'  variant='contained'>Login</Button>
         </form>
        </div>
  );
  }
}

export default LogIn
