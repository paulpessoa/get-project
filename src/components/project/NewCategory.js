
import Input from "../form/Input"
import styles from "./ProjectForm.module.css";
import SubmitButton from "../form/SubmitButton";


function NewCategory() {

  

    return (
        <div className={styles.newproject_container}>
 
        <form >
                <Input type="text"  name="category" placeholder="Nova categoria" required/> 
                <SubmitButton type="submit" text="CRIAR"/>
        </form>
        </div>
    )
}

export default NewCategory
