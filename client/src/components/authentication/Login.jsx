import { useContext, useState } from 'react'
import InputField from '../ReUsuableComp/InputField'
import { Button, Container, Paper, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../../assets/login-img.svg'
import { useDispatch, useSelector } from 'react-redux'
import { apiCalling } from '../../api/apiCalling'
import { toast } from 'react-toastify'
import { setUser } from '../../store/slice/auth/Self'
import loginImage from '../../assets/LoginImage.jpg'
import { getApiResponse } from '../../store/slice/apiResponse'
import { AppDataProviderContext } from '../../context/AppDataWrapper'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const apiResponse = useSelector(getApiResponse)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { setContactPersonData} = useContext(AppDataProviderContext)
  const handleLogin = async (e) => {
    e.preventDefault()

    const options = {
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/login',
      formData,
      contentType: 'application/json',
    }
    const data = await dispatch(apiCalling(options))
    if (data.success) {
      dispatch(setUser(data.user))
      toast.success(data.message)
      localStorage.setItem('tocken', data.tocken)
      setContactPersonData(data.user)
      navigate('/chat')
    } else toast.error(data.message)
  }

  return (
    <div
      id="loginContainer"
      className="w-full h-full"
      style={{
        background: `linear-gradient(45deg , rgba(134,189,245 , .4) , rgba(183,214,233,.4) ) , url(${loginImage})`,
        backgroundSize: 'cover',
      }}
    >
      <Container
        component={'main'}
        className="grid w-full h-[100vh] place-content-center"
      >
        <div id="login-page" className="grid grid-cols-2 gap-[5rem] bg-[]">
          <div id="img" style={{ backdropFilter: `blur(2px)` }}>
            <img src={loginImg} alt="login-image" />
          </div>
          <Paper
            id="login-box"
            elevation={3}
            className="max-w-[50rem]   p-[2rem] mx-auto border-[1px] border-[#8ce39567]"
            sx={{
              backgroundColor: `rgba(255,255,255,0.3)`,
              backdropFilter: `blur(2px)`,
              borderRadius: '10px',
            }}
          >
            <Typography
              variant="h3"
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
                <span className="hover:text-[#b703ee] text-[#b5f005] text-[1.8rem] font-[600]">
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
                {apiResponse?.apiStatus == true ? 'Submitting...' : 'Submit'}
                {apiResponse?.apiStatus && (
                  <div className="absolute left-[65%] loader"></div>
                )}
              </Button>
              <p className="font-[600] text-[1.8rem] text-center">OR,</p>
              <Link
                to="/register"
                className="text-[1.8rem] font-[600] text-center"
              >
                {`Already haven't an account`}?
                <span className="hover:text-[#b703ee] text-[#b5f005]">
                  {' '}
                  Register Now
                </span>
              </Link>
            </form>
          </Paper>
        </div>
      </Container>
    </div>
  )
}

export default Login
