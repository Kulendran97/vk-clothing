import { signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import SignupForm from "../sign-up/sign-up-form.component";
import SignInForm from "../sign-in/sign-in-form.component";
import './authentication.styles.scss';
import FormInput from "../form-input/form-input.component";

  const Authentication = () => {
   
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }
    const logGoogleRedirectUser = async () =>{
      const {user} = await signInWithGoogleRedirect();
      console.log({user});
      
  }
    
  
    return (
      <div className='authentication-container'>
        <SignInForm/>
        <SignupForm />
      </div>
    );
  };
  
  export default Authentication;