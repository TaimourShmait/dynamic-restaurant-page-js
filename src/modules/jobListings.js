import staffImageSrc from "../assets/staff-image.png"; 

export function createForm () {
    const contentDiv = document.createElement("div");
    contentDiv.id = "content-div-jobs";

    const staffImage = document.createElement("img");
    staffImage.src = staffImageSrc;
    staffImage.id = "staff-image-jobs";

    contentDiv.appendChild(staffImage);

    const applyDiv = document.createElement("div");
    applyDiv.id = "apply-div-jobs";
    contentDiv.appendChild(applyDiv);

    const applyText = document.createElement("p");
    applyText.id = "apply-text-jobs";
    applyText.innerHTML = "Interested in joining the Los Pollos Hermanos family?<br> We’d love to have you with us!";
    applyDiv.appendChild(applyText);

    const applyButton = document.createElement("button");
    applyButton.id = "apply-button-jobs";
    applyButton.innerText = "Apply Now!";
    applyDiv.appendChild(applyButton);

    // Generate form content on button click

    applyButton.addEventListener("click", () => {
        applyDiv.remove();

        const formDiv = document.createElement("div");
        formDiv.id = "form-div-jobs";
        contentDiv.appendChild(formDiv);

        const applyForm = document.createElement("form");
        applyForm.id = "apply-form-jobs";
        formDiv.appendChild(applyForm);

        const applyFormText = document.createElement("p");
        applyFormText.id = "apply-form-text-jobs";
        applyFormText.innerText = "Job Application";
        applyForm.appendChild(applyFormText);

        const nameFieldSet = document.createElement("fieldset");
        nameFieldSet.id = "name-fieldset-jobs";
        applyForm.appendChild(nameFieldSet);

        const nameInput = document.createElement("input");
        nameInput.id = "name-input-jobs";
        nameInput.type = "text";
        nameInput.placeholder = "First Name";

        const lastNameInput = document.createElement("input");
        lastNameInput.id = "last-name-input-jobs";
        lastNameInput.type = "text";
        lastNameInput.placeholder = "Last Name";

        nameFieldSet.appendChild(nameInput);
        nameFieldSet.appendChild(lastNameInput);

        const emailRoleFieldset = document.createElement("fieldset");
        emailRoleFieldset.id = "email-role-fieldset-jobs";
        applyForm.appendChild(emailRoleFieldset);

        const emailInput = document.createElement("input");
        emailInput.id = "email-input-jobs";
        emailInput.type = "email";
        emailInput.placeholder = "Email Address";
        emailRoleFieldset.appendChild(emailInput);

        const roleSelect = document.createElement("select");
        roleSelect.id = "role-select-jobs";
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
        cvFieldset.id = "cv-fieldset-jobs";
        const cvPromptText = document.createElement("p");
        cvPromptText.id = "cv-prompt-text-jobs";
        cvPromptText.innerText = "Upload your CV —";
        const cvInput = document.createElement("input");
        cvInput.id = "cv-input-jobs";
        cvInput.type = "file";
        cvInput.accept = ".pdf,.doc,.docx";
        cvFieldset.appendChild(cvPromptText);
        cvFieldset.appendChild(cvInput);
        applyForm.appendChild(cvFieldset);

        nameInput.required = true;
        lastNameInput.required = true;
        emailInput.required = true;
        roleSelect.required = true;
        cvInput.required = true;

        const buttonsFieldset = document.createElement("fieldset");
        buttonsFieldset.id = "buttons-fieldset-jobs";
        const backButton = document.createElement("button");
        backButton.id = "back-button-jobs";
        backButton.textContent = "Back";
        buttonsFieldset.appendChild(backButton);

        backButton.addEventListener("click", () => {
            formDiv.remove();
            contentDiv.appendChild(applyDiv);
        });

        const submitFormButton = document.createElement("input");
        submitFormButton.id = "submit-form-button-jobs";
        submitFormButton.type = "submit";
        submitFormButton.value = "Submit";
        buttonsFieldset.appendChild(submitFormButton);

        // Add a dialog box when the form is submitted

        applyForm.addEventListener("submit", () => {
            event.preventDefault();
            const submitDialogBox = document.createElement("dialog");
            submitDialogBox.id = "submit-dialog-box-jobs";
            const dialogText = document.createElement("p");
            dialogText.id = "dialog-text-jobs";
            dialogText.textContent = "Application submitted successfully!";

            const closeButton = document.createElement("button");
            closeButton.id = "close-button-jobs";
            closeButton.textContent = "OK"; 
            submitDialogBox.appendChild(dialogText);
            submitDialogBox.appendChild(closeButton);

            document.body.appendChild(submitDialogBox);
            submitDialogBox.showModal();

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
