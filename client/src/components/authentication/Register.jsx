import { Container, Button, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import InputField from '../ReUsuableComp/InputField'
import {  useState } from 'react'
import registerImage from '../../assets/signin-img.svg'
import { useDispatch, useSelector } from 'react-redux'
import { apiCalling } from '../../api/apiCalling'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import profilePhoto from '../../assets/profile-photo.png'
import { Avatar } from '@mui/material'
import { setUser } from '../../store/slice/auth/Self'
import registerImg from '../../assets/RegisterImage.jpg'
import { getApiResponse } from '../../store/slice/apiResponse'

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formDataLocal, setFormDataLocal] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: '',
  })
  const [errorMessage , setErrorMessage] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: '',
  })
  const errorConf = {
    firstname : [
      {required : true , message : "Please enter your first name !"},
      {minLength : 3 , message : "Firstname must be contain at least 3 characters"}
    ],
    username : [
      {required : true , message : "Please enter your user name !"},
      {minLength : 3 , message : "Username must be contain at least 3 characters"}
    ],
    lastname : [
      {required : true , message : "Please enter your last name !"},
      {minLength : 3 , message : "Lastname must be contain at least 3 characters"}
    ],
    email : [
      {required : true , message : "Please enter your email !"},
      {pattern : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , message : "Please enter valid email !"}
      ],
    password : [
      {required : true , message : "Password must be required !"},
      {minLength : 8 , message : "Password must be contain at least 8 character !"},
      {includes : '@&#' , message : "In password must be includes @ # &"}
    ],
    confirmPassword : [
      {required : true , message : "Password must be required !"},
      {minLength : 8 , message : "Password must be contain at least 8 character !"},
      {includes : '@&#' , message : "In password must be includes @ # &"}
    ]
    
  }
  const formData = new FormData()

  const validate = (formDataLocal) => {
    const error = {};
    console.log(formDataLocal)
    Object.entries(formDataLocal).forEach(([key , value]) => {
      errorConf[key]?.some((rule) => {
        if(rule.required && !value){
          error[key] = rule.message
          return true
        }
        if(rule.pattern && !rule.pattern.test(value)){
          error[key] = rule.message
          return true
        }
        if(rule.minLength && value.length < rule.minLength ){
          error[key] = rule.message
          return true
        }
        if(rule.includes && !(value.includes(rule.includes[0]) || value.includes(rule.includes[1]) || value.includes(rule.includes[2]))){
          error[key] = rule.message
          return true
        }
      })
    })
    
    setErrorMessage(error)
    return error
  }

  Object.entries(formDataLocal).forEach(([key, value]) => {
    formData.append(key, value)
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate(formDataLocal)
    console.log(error)
    if(Object.keys(error).length > 0) return
    const options = {
      url: "http://localhost:3000/api/v1/auth/register",
      method: "POST",
      formData,
      contentType: "multipart/form-data",
    };
    const data = await dispatch(apiCalling(options));

    if (data?.success) {
      toast.success(data.message);
      navigate("/login");
      dispatch(setUser(data.user));
    } else {
      toast.error(data.message);
    }
  };

  const [previewImage, setPreviewImage] = useState(profilePhoto)

  
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
      setFormDataLocal((prev) => ({ ...prev, avatar: e.target.files[0] }))
    }
  }

  const apiResponse = useSelector(getApiResponse)
  return (
    <div
      id="register-page"
      style={{
        background: `linear-gradient(45deg , rgba(134,8,245 , .1) , rgba(183,24,233,.1) ) , url(${registerImg})`,
        backgroundSize: 'cover',
        paddingBlock: '2rem',
        height: '126vh',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container
        component={'main'}
        className="grid w-full h-[100vh] place-content-center "
      >
        <div
          id="register-page"
          className="grid grid-cols-2 gap-[5rem] place-content-center w-full"
        >
          <div id="img" className="my-auto">
            <img src={registerImage} alt="register-image" />
          </div>
          <Paper
            id="RegistraitonForm"
            elevation={3}
            className="p-[2rem] mx-auto w-full"
            sx={{
              backgroundColor: `rgba(255,255,255,0.2)`,
              backdropFilter: `blur(3px)`,
              borderRadius: '10px',
            }}
          >
            <Typography
              variant="h4"
              className=" text-[2rem]  space-y-[2rem]"
              sx={{ fontWeight: '400' }}
            >
              Welcome Users!
            </Typography>
            <form
              method="post"
              encType="multipart/form-data"
              action="http://localhost:3000/api/v1/auth/register"
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
                        ? 'absolute top-[62%] left-[68%] text-[#1a1919]'
                        : 'absolute top-[75%] left-[76%] text-[#1b1a1a]'
                    }
                  />
                </label>

                <input
                  onInput={handleImage}
                  id="file"
                  className="hidden"
                  type="file"
                  name="avatar"
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
                value={formDataLocal.firstname}
                setValue={setFormDataLocal}
                type={'text'}
                error={errorMessage.firstname}
              />
              <InputField
                placeholder={'Enter your middlename'}
                name={'middlename'}
                value={formDataLocal.middlename}
                setValue={setFormDataLocal}
                type={'text'}
              />
              <InputField
                placeholder={'Enter your lastname*'}
                name={'lastname'}
                value={formDataLocal.lastname}
                setValue={setFormDataLocal}
                type={'text'}
                error={errorMessage.lastname}
              />
              <InputField
                placeholder={'Enter your username*'}
                name={'username'}
                value={formDataLocal.username}
                setValue={setFormDataLocal}
                type={'text'}
                Note={'Username must be unique!'}
                error={errorMessage.username}
              />
              <InputField
                placeholder={'Enter your email*'}
                name={'email'}
                value={formDataLocal.email}
                setValue={setFormDataLocal}
                type={'email'}
                error={errorMessage.email}
              />
              <InputField
                placeholder={'Enter your password*'}
                name={'password'}
                value={formDataLocal.password}
                setValue={setFormDataLocal}
                type={'password'}
                error={errorMessage.password}
              />
              <InputField
                placeholder={'Enter your confirm password*'}
                name={'confirmPassword'}
                value={formDataLocal.confirmPassword}
                setValue={setFormDataLocal}
                type={'password'}
                error={errorMessage.confirmPassword}
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
                {apiResponse?.apiStatus == true ? 'Submitting...' : 'Submit'}
                {apiResponse?.apiStatus && (
                  <div className="absolute left-[65%] loader"></div>
                )}
              </Button>
              <p className="font-[600] text-[1.8rem] py-[.5rem] text-center text-white">
                OR,
              </p>
              <Link
                to="/login"
                className="text-[1.8rem] font-[600] text-center text-[#fff]"
              >
                Already have an account?
                <span className="hover:text-[#b703ee] text-[#b5f005]">
                  {' '}
                  Login Now
                </span>
              </Link>
            </form>
          </Paper>
        </div>
      </Container>
    </div>
  )
}

export default Register
