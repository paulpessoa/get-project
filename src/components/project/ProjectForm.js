import Input from '../form/Input';
import Select from '../form/Select';
import styles from './ProjectForm.module.css';


function ProjectForm () {
    return (
        <form className={styles.form}>
            <div>
                <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do Projeto"/>
            </div>
            <div>
                <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento total"/>
            </div>
            <div>
               <Select name="category_id" text="Selecione uma Categoria"/>
            </div>
            <div>
                <input type="submit" value="Criar Projeto"/>
            </div>
        </form>
    )
}

export default ProjectForm;