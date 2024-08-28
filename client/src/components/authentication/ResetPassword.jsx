import { Button, Container, Paper, Typography } from '@mui/material'
import resetImage from '../../assets/reset-password.svg'
import InputField from '../ReUsuableComp/InputField'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { apiCalling } from '../../api/apiCalling'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { getApiResponse } from '../../store/slice/apiResponse'

function ResetPassword() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  })
  const dispatch = useDispatch()
  const { tocken } = useParams()
  const navigate = useNavigate()
  const apiResponse = useSelector(getApiResponse)

  const handleReset = async (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      url: `http://localhost:3000/api/v1/auth/reset-password/${tocken}`,
      formData,
    }
    const data = await dispatch(apiCalling(options))
    if (data.success) {
      toast.success(data.message)
      navigate('/home')
    } else toast.error(data.message)
  }
  return (
    <Container
      component={'main'}
      className="grid w-full h-[100vh] place-content-center  m-[2rem]"
    >
      <div
        id="register-page"
        className="grid grid-cols-2 gap-[5rem] place-content-center w-full"
      >
        <div id="img" className="my-auto">
          <img src={resetImage} alt="register-image" />
        </div>
        <Paper elevation={3} className="p-[2rem] mx-auto w-full my-auto">
          <Typography
            variant="h4"
            className=" text-[2rem]  space-y-[2rem]"
            sx={{ fontWeight: '400' }}
          >
            Reset Your Password !
          </Typography>
          <p className="text-[1.8rem] font-[600] text-[#00000068] my-[.8rem] px-[.5rem]">
            This reset password link will expire within 5 minutes. So, please
            enter your new password carefully as soon as possible.
          </p>
          <form
            onSubmit={handleReset}
            className="w-full flex flex-col gap-[1rem] mt-[1rem] justify-center"
          >
            <InputField
              placeholder={'Enter your password*'}
              name={'password'}
              value={formData.password}
              setValue={setFormData}
              type={'password'}
            />
            <InputField
              placeholder={'Enter your confirm password*'}
              name={'confirmPassword'}
              value={formData.confirmPassword}
              setValue={setFormData}
              type={'password'}
            />

            <Button
              id="button"
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
              {apiResponse?.apiStatus ? 'reseting' : 'Reset Password'}
              {apiResponse?.apiStatus && (
                <div className="absolute left-[65%] loader"></div>
              )}
            </Button>
          </form>
        </Paper>
      </div>
    </Container>
  )
}

export default ResetPassword
