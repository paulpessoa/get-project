import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function UserLogin () {  


    return (
        <>
        <h2>UserLogin</h2>
        <form className={styles.form}>
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do Projeto" handleOnChange={handleChange} value={project.name ? project.name : ''} required/> 
            <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento total"  handleOnChange={handleChange} value={project.budget ? project.budget : ''}/>
            <SubmitButton type="submit" />
        </form>
        </>
    )
}

export default UserLogin;