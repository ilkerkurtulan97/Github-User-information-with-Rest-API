// Elementleri seçme

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();


eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);

}

function getData(e){
    let username = nameInput.value.trim();

    if(username === ""){
        alert("Please enter proper username . . .");

    }
    else{
        github.getGithubData(username)
        .then(response =>{
            if(response.user.messaeg === "Not Found"){
                console.log("Hata ! ! !");
            }
            else{
                ui.showUserInfo(response.user);
            }
        })
        .catch(err => console.log(err));
    }

    ui.clearInput();
    e.preventDefault(); // Preventing our button to go to www.google.com adress.
}

function clearAllSearched(){
    // Tüm arananları temizle

}

function getAllSearched(){
    // Arananları storagedan al ve ui'a ekle
}

