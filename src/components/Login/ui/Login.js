import image1 from '../../../photo/image1.png'
import RegisterForm from '../../RegisterForm'
import styles from './Login.module.css'



 function Login(){

    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={image1} alt="human"/>
            </div>
            <RegisterForm/>
        </div>
    )
}

export default Login