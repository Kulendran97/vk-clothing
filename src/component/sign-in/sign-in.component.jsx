import { signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import SignupForm from "../sign-up/sign-up-form.component";
  const SignIn = () => {
   
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }
    const logGoogleRedirectUser = async () =>{
      const {user} = await signInWithGoogleRedirect();
      console.log({user});
      
  }
    
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>
        Sign in with google popup
        </button>
        <SignupForm />
      </div>
    );
  };
  
  export default SignIn;