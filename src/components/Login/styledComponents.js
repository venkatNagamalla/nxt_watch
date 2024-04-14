import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({isDarkMode}) =>
    isDarkMode ? '#181818' : console.log(isDarkMode)};
`

export const LoginCard = styled.div`
  width: 90%;
  box-shadow: ${({isDarkMode}) =>
    isDarkMode ? null : '2px 2px 20px 5px #e2e8f0'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  border-radius: 8px;
  height: 400px;
  background-color: ${({isDarkMode}) => console.log(isDarkMode)};
  @media screen and (min-width: 576px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    width: 130px;
    margin-bottom: 10px;
  }
`

export const FormContainer = styled.form`
  width: 100%;
`
export const InputContainer = styled.div`
  padding: 5px 0px 5px 0px;
  margin-top: 15px;
`

export const Label = styled.label`
  font-size: 14px;
  color: ${({isDarkMode}) => (isDarkMode ? '#ffffff' : '#475569')};
  font-weight: 410;
  letter-spacing: 0.1px;
`
export const Input = styled.input`
  width: 100%;
  margin-top: 5px;
  height: 38px;
  border: 1px solid #94a3b8;
  outline: none;
  padding: 10px;
  color: ${({isDarkMode}) => (isDarkMode ? '#ffffff' : '#475569')};
  font-size: 14px;
  border-radius: 1px;
  background-color: ${({isDarkMode}) => (isDarkMode ? '#000000' : '#ffffff')};
`

export const ShowPassContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`
export const CheckBox = styled.input`
  height: 17px;
  width: 17px;
  cursor: pointer;
`
export const ShowPassText = styled.label`
  color: ${({isDarkMode}) => (isDarkMode ? '#ffffff' : '#000000')};
  font-weight: 410;
  margin-left: 5px;
  cursor: pointer;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: none;
  width: 100%;
  height: 38px;
  margin-top: 13px;
  border-radius: 3px;
  color: #ffffff;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 5px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
`
