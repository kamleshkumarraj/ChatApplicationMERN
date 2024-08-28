import { Container, Button, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import InputField from '../ReUsuableComp/InputField'
import { useState } from 'react'
import registerImage from '../../assets/signin-img.svg'
import { useDispatch } from 'react-redux'
import { apiCalling } from '../../api/apiCalling'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import profilePhoto from '../../assets/profile-photo.png'
import { Avatar } from '@mui/material'
import { setUser } from '../../store/slice/auth/Self'

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [previewImage, setPreviewImage] = useState(profilePhoto)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const options = {
      url: 'http://localhost:3000/api/v1/auth/register',
      method: 'POST',
      formData,
    }
    const data = await dispatch(apiCalling(options))

    if (data.success) {
      toast.success(data.message)
      navigate('/login')
      dispatch(setUser(data.user))
    } else {
      toast.error(data.message)
    }
  }
  const [errorConfig, setErrorConfig] = useState({
    imageErrror: '',
  })
  const ValidateImage = (preview) => {
    if (preview && preview.type.startsWith('image/')) {
      setErrorConfig((prev) => ({ ...prev, imageErrror: '' }))
      return true
    } else {
      setErrorConfig((prev) => ({
        ...prev,
        imageErrror: '**Please upload a valid file.',
      }))
      return false
    }
  }
  const handleImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (ValidateImage(file)) setPreviewImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
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
          <img src={registerImage} alt="register-image" />
        </div>
        <Paper elevation={3} className="p-[2rem] mx-auto w-full">
          <Typography
            variant="h4"
            className=" text-[2rem]  space-y-[2rem]"
            sx={{ fontWeight: '400' }}
          >
            Welcome Users!
          </Typography>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-[1rem] mt-[1rem] justify-center"
          >
            <div
              id="avtar-field"
              className="flex gap-[.5rem] flex-col justify-center rounded-full"
            >
              <label
                htmlFor="file"
                className="relative mx-auto hover:cursor-pointer"
              >
                <Avatar
                  src={previewImage}
                  sx={{ width: '15rem', height: '15rem' }}
                  alt="profile-photo"
                />
                <AddAPhotoIcon
                  sx={{ fontSize: '3rem' }}
                  className={
                    previewImage == '/src/assets/profile-photo.png'
                      ? 'absolute top-[62%] left-[68%] text-[gray]'
                      : 'absolute top-[75%] left-[76%] text-[#575656]'
                  }
                />
              </label>

              <input
                onInput={handleImage}
                id="file"
                className="hidden"
                type="file"
              />
              <p
                id="img-error"
                className="font-[600] text-[1.6rem] text-[red] text-center my-[.5rem]"
              >
                {errorConfig.imageErrror}
              </p>
            </div>
            <InputField
              placeholder={'Enter your firstname*'}
              name={'firstname'}
              value={formData.firstname}
              setValue={setFormData}
              type={'text'}
            />
            <InputField
              placeholder={'Enter your middlename'}
              name={'middlename'}
              value={formData.middlename}
              setValue={setFormData}
              type={'text'}
            />
            <InputField
              placeholder={'Enter your lastname*'}
              name={'lastname'}
              value={formData.lastname}
              setValue={setFormData}
              type={'text'}
            />
            <InputField
              placeholder={'Enter your username*'}
              name={'username'}
              value={formData.username}
              setValue={setFormData}
              type={'text'}
              Note={'Username must be unique!'}
            />
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
              Register
            </Button>
            <p className="font-[600] text-[1.8rem] py-[.5rem] text-center">
              OR,
            </p>
            <Link to="/login" className="text-[1.8rem] font-[600] text-center">
              Already have an account?
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

export default Register
