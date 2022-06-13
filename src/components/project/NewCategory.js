import React from 'react';
import Input from "../form/Input"
import styles from "./ProjectForm.module.css";
import SubmitButton from "../form/SubmitButton";


function NewCategory() {

    function createCategory (categories) {
        (categories).preventDefault();
        
        const newcategory = document.getElementById('newcategory').value
        console.log(newcategory)

        fetch('https://project-api-manager.herokuapp.com/categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: "62a4bcbd0e46e071d7",
            name: newcategory
        }),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // redirect     
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
 
            <form onSubmit={createCategory} className={styles.form}>
                <Input type="text" name="newcategory" placeholder="Nova categoria" required/> 
                <SubmitButton type="submit" text="CRIAR"/>
        </form>
        </div>
    )
}

export default NewCategory
