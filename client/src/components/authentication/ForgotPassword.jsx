import { Link } from 'react-router-dom'
import InputField from '../ReUsuableComp/InputField'
import { Button, Container, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import forgotImage from '../../assets/forgot-password.svg'
import { useDispatch, useSelector } from 'react-redux'
import { apiCalling } from '../../api/apiCalling'
import { toast } from 'react-toastify'
import { getApiResponse } from '../../store/slice/apiResponse'

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: '',
  })
  const dispatch = useDispatch()
  const apiResponse = useSelector(getApiResponse)
  const handleForgotPass = async (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/api/v1/auth/forgot-password',
      formData,
    }
    const data = await dispatch(apiCalling(options))
    if (data.success) {
      toast.success(data.message)
    } else {
      toast.error(data.message)
    }
  }
  return (
    <Container
      component={'main'}
      className="grid w-full h-[100vh] place-content-center"
    >
      <div id="login-page" className="grid grid-cols-2 gap-[5rem]">
        <div id="img">
          <img src={forgotImage} alt="login-image" />
        </div>
        <Paper elevation={3} className="max-w-[50rem] my-auto p-[2rem] mx-auto">
          <Typography
            variant="h4"
            className=" text-[2rem]  space-y-[2rem]"
            sx={{ fontWeight: '400' }}
          >
            Forgot Password ?
          </Typography>
          <p className="text-[1.8rem] font-[600] text-[#00000068] my-[.8rem] px-[.5rem]">
            We will send password reset link on your entered email address.
          </p>
          <form
            onSubmit={handleForgotPass}
            action=""
            className="w-full flex flex-col gap-[1.5rem]  mt-[1rem] justify-center"
          >
            <InputField
              placeholder={'Enter your email*'}
              name={'email'}
              value={formData.email}
              setValue={setFormData}
              type={'email'}
            />
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
              {apiResponse?.apiStatus == true ? 'Sending' : 'Send Email'}
              {apiResponse?.apiStatus && (
                <div className="absolute left-[65%] loader"></div>
              )}
            </Button>

            <p className="font-[600] text-[1.8rem] text-center">OR,</p>
            <Link to="/login" className="text-[1.8rem] font-[600] text-center">
              {`Already remember password?`}
              <span className="hover:text-[#0077B6] text-[green]">
                {' '}
                Login Now
              </span>
            </Link>
          </form>
        </Paper>
      </div>
    </Container>
  )
}

export default ForgotPassword
