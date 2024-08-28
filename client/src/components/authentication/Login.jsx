import { useState } from 'react'
import InputField from '../ReUsuableComp/InputField'
import { Button, Container, Paper, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../../assets/login-img.svg'
import { useDispatch } from 'react-redux'
import { apiCalling } from '../../api/apiCalling'
import { toast } from 'react-toastify'
import { setUser } from '../../store/slice/auth/Self'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/login',
      formData,
    }
    const data = await dispatch(apiCalling(options))
    if (data.success) {
      dispatch(setUser(data.user))
      toast.success(data.message)
      navigate('/home/chat')
    } else toast.error(data.message)
  }

  return (
    <Container
      component={'main'}
      className="grid w-full h-[100vh] place-content-center"
    >
      <div id="login-page" className="grid grid-cols-2 gap-[5rem]">
        <div id="img">
          <img src={loginImg} alt="login-image" />
        </div>
        <Paper elevation={3} className="max-w-[50rem]   p-[2rem] mx-auto">
          <Typography
            variant="h4"
            className=" text-[2rem]  space-y-[2rem]"
            sx={{ fontWeight: '400' }}
          >
            User Login
          </Typography>
          <form
            onSubmit={handleLogin}
            action=""
            className="w-full flex flex-col gap-[1.5rem]  mt-[1rem]"
          >
            <InputField
              placeholder={'Enter your email*'}
              name={'email'}
              value={formData.email}
              setValue={setFormData}
              type={'email'}
            />
            <InputField
              placeholder={'Enter your password*'}
              name={'password'}
              value={formData.password}
              setValue={setFormData}
              type={'password'}
            />
            <Link id="forgot-pass" to={'/forgot-password'}>
              <span className="hover:text-[#0077B6] text-[green] text-[1.8rem] font-[600]">
                Forgot password?
              </span>
            </Link>
            <Button
              variant="contained"
              type="submit"
              className="w-full py-[1.5rem] "
              sx={{
                fontSize: '1.8rem',
                background: `linear-gradient(45deg , #5468FF ,#59C3FF)`,
                ':hover': {
                  background: `linear-gradient(45deg , #59C3FF ,#5468FF)`,
                },
              }}
            >
              Login
            </Button>
            <p className="font-[600] text-[1.8rem] text-center">OR,</p>
            <Link to="/" className="text-[1.8rem] font-[600] text-center">
              {`Already haven't an account`}?
              <span className="hover:text-[#0077B6] text-[green]">
                {' '}
                Register Now
              </span>
            </Link>
          </form>
        </Paper>
      </div>
    </Container>
  )
}

export default Login
