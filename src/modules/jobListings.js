import staffImageSrc from "../assets/staff-image.png"; 

function createForm () {
    const contentDiv = document.createElement("div");
    contentDiv.style.cssText = "position: relative; width: 100%; height: 100%; background-color: #d70000; display: flex; flex-direction: column; align-items: center;";

    const staffImage = document.createElement("img");
    staffImage.src = staffImageSrc;

    contentDiv.appendChild(staffImage);
    staffImage.style.cssText = "margin: 4rem 0; box-shadow: 0 0 1rem rgba(37, 37, 37, 0.5)";

    const applyDiv = document.createElement("div");
    contentDiv.appendChild(applyDiv);
    applyDiv.style.cssText = "width: 65%; display: flex; flex-direction: column; background-color: white; border-radius: 0.5rem; padding: 2rem; box-shadow: 0 0 1rem rgba(37, 37, 37, 0.5); position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%); z-index: 1;";

    const applyText = document.createElement("p");
    applyText.innerHTML = "Interested in joining the Los Pollos Hermanos family?<br> We’d love to have you with us!";
    applyDiv.appendChild(applyText);
    applyText.style.cssText = "font-size: 2.4rem; font-weight: bold; color: #164a97; margin-bottom: 0;";

    const applyButton = document.createElement("button");
    applyButton.innerText = "Apply Now!";
    applyDiv.appendChild(applyButton);
    applyButton.style.cssText = "font-weight: bold; border: none; border: 3px solid rgb(4, 23, 52); border-radius: 0.5rem; background-color: #164a97; color: white; cursor: pointer; width: 25%; height: 3.5rem; font-size: 1.5rem; margin-top: 1.5rem;";
    applyButton.id = "apply-button";

    applyButton.addEventListener("click", () => {
        applyDiv.remove();

        const formDiv = document.createElement("div");
        formDiv.style.cssText = "width: 65%; display: flex; flex-direction: column; background-color: white; border-radius: 0.5rem; padding: 2rem; box-shadow: 0 0 1rem rgba(37, 37, 37, 0.5); position: absolute; top: 30.4%; left: 50%; transform: translate(-50%, -50%); z-index: 1;";
        contentDiv.appendChild(formDiv);

        const applyForm = document.createElement("form");
        formDiv.appendChild(applyForm);
        applyForm.style.cssText = "margin: 0; width: 100%; display: flex; flex-direction: column; gap: 0.5rem; flex-grow: 1;";

        const applyFormText = document.createElement("p");
        applyFormText.innerText = "Job Application";
        applyFormText.style.cssText = "margin: 0 0 1rem 0; color: #164a97; font-size: 2.4rem; font-weight: bold;";
        applyForm.appendChild(applyFormText);

        const nameFieldSet = document.createElement("fieldset");
        nameFieldSet.style.cssText = "margin: 0; padding: 0; display: flex; gap: 1rem; border: none;";

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "First Name";
        const inputStyle = "padding: 0.5rem 0 0.5rem 0.5rem; width: 45%; border: 1px solid black;";
        nameInput.style.cssText = inputStyle;
        // applyForm.appendChild(nameInput);

        const lastNameInput = document.createElement("input");
        lastNameInput.type = "text";
        lastNameInput.placeholder = "Last Name";
        lastNameInput.style.cssText = inputStyle;
        // applyForm.appendChild(lastNameInput);

        nameFieldSet.appendChild(nameInput);
        nameFieldSet.appendChild(lastNameInput);
        applyForm.appendChild(nameFieldSet);

        const emailRoleFieldset = document.createElement("fieldset");
        emailRoleFieldset.style.cssText = "margin: 0; padding: 0; display: flex; gap: 1rem; border: none;";
        applyForm.appendChild(emailRoleFieldset);

        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.placeholder = "Email Address";
        emailInput.style.cssText = inputStyle;
        //applyForm.appendChild(emailInput);
        emailRoleFieldset.appendChild(emailInput);

        const roleSelect = document.createElement("select");
        roleSelect.style.cssText = "padding: 0.5rem; width: 46.09%; border: 1px solid black;";
        emailRoleFieldset.appendChild(roleSelect);


        const option0 = document.createElement("option");
        option0.value = "";
        option0.textContent = "Select Role";
        roleSelect.appendChild(option0);

        const option1 = document.createElement("option");
        option1.value = "cook";
        option1.textContent = "Cook";
        roleSelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = "server";
        option2.textContent = "Server";
        roleSelect.appendChild(option2);

        const option3 = document.createElement("option");
        option3.value = "manager";
        option3.textContent = "Manager";
        roleSelect.appendChild(option3);

        const cvFieldset = document.createElement("fieldset");
        cvFieldset.style.cssText = "margin: 0; padding: 0; display: flex; gap: 0.5rem; border: none;"

        const cvPromptText = document.createElement("p");
        cvPromptText.innerText = "Upload your CV —";
        cvPromptText.style.cssText = "font-size: 1rem; font-weight: none; margin: 0";

        const cvInput = document.createElement("input");
        cvInput.type = "file";
        cvInput.accept = ".pdf,.doc,.docx";
        cvInput.style.cssText = "width: 20rem; margin: 0;";
        cvFieldset.appendChild(cvPromptText);
        cvFieldset.appendChild(cvInput);
        
        applyForm.appendChild(cvFieldset);

        nameInput.required = true;
        lastNameInput.required = true;
        emailInput.required = true;
        roleSelect.required = true;
        cvInput.required = true;

        const buttonsFieldset = document.createElement("fieldset");
        buttonsFieldset.style.cssText = "margin: 0; padding: 0; border: none; display: flex; gap: 1rem;";

        const backButton = document.createElement("button");
        backButton.textContent = "Back";
        backButton.style.cssText = "font-weight: bold; margin: 0; width: 5rem; padding: 0.4rem; border: 2px solid rgb(4, 23, 52); background-color: #164a97; color: white; cursor: pointer; border-radius: 0.5rem; ";
        buttonsFieldset.appendChild(backButton);

        backButton.addEventListener("click", () => {
            formDiv.remove();
            contentDiv.appendChild(applyDiv);
        });

        const submitFormButton = document.createElement("input");
        submitFormButton.type = "submit";
        submitFormButton.value = "Submit";
        submitFormButton.style.cssText = "font-weight: bold; margin: 0; width: 5rem; padding: 0.4rem; border: 2px solid rgb(4, 23, 52); background-color: #164a97; color: white; cursor: pointer; border-radius: 0.5rem; ";
        buttonsFieldset.appendChild(submitFormButton);

        applyForm.addEventListener("submit", () => {
            event.preventDefault();
            const submitDialogBox = document.createElement("dialog");
            submitDialogBox.style.cssText = "width: 50%; height: 10rem; border: 0.3rem solid #164a97; font-size: 2rem; display: flex; flex-direction: column;";

            const dialogText = document.createElement("p");
            dialogText.textContent = "Application submitted successfully!";

            const closeButton = document.createElement("button");
            closeButton.textContent = "OK"; 
            closeButton.style.cssText = "font-weight: bold; margin: 0 -1rem 0 0; width: 10rem; height: 2rem; padding: 0.4rem; border: 2px solid #164a97; background-color:rgb(255, 255, 255); color: #164a97; cursor: pointer; border-radius: 0.5rem; ";

            submitDialogBox.appendChild(dialogText);
            submitDialogBox.appendChild(closeButton);

            document.body.appendChild(submitDialogBox);
            submitDialogBox.showModal();
            console.log(submitDialogBox);

            closeButton.addEventListener("click", () => {
                submitDialogBox.remove();
                formDiv.remove();
                contentDiv.appendChild(applyDiv);
            });

        });

        applyForm.appendChild(buttonsFieldset);    
        
    });

    return contentDiv;
}

export function goJobListings () {
    const main = document.querySelector("main");
    const contentDiv = createForm();

    main.innerHTML = "";
    main.appendChild(contentDiv);
}