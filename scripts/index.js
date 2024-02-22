class Activity {
    constructor(id, title, description, imgUrl) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.imgUrl = imgUrl;
    }
  }
  
  class Repository {
    constructor() {
      this.activities = [];
    }
  
    getAllActivities() {
      return this.activities;
    }
    createActivity({ id, title, description, imgUrl }) {
      const activity = new Activity(id, title, description, imgUrl);
      this.activities.push(activity);
    }
    deleteActivity(id) {
      this.activities = this.activities.filter((activity) => activity.id !== id);
    }
  }
  const repository = new Repository();
  
  const activity1 = {
    id: 1,
    title: "ir al gimnasio",
    description: "es importante hacer actividad fisica para mantenerte fuerte",
    imgUrl: "https://th.bing.com/th/id/OIP.SQNUFLaeISHaPOxAqQ8kZAHaE8",
  };
  const activity2 = {
    id: 2,
    title: "leer un libro",
    description: "es importante la lectura para mantener el cerebro activo",
    imgUrl: "https://th.bing.com/th/id/OIP.cOtBCMWvmrVN0GtGoudOpwHaE8",
  };
  
  const activity3 = {
    id: 3,
    title: "comer sano",
    description: "es importante mantener una dieta saludable y equilibrada",
    imgUrl: "https://th.bing.com/th/id/OIP.h9JxS6QRNbHkPcqmoyH7LQHaE8",
  };
  
  repository.createActivity(activity1);
  repository.createActivity(activity2);
  repository.createActivity(activity3);
  
  console.log(repository.getAllActivities());

  //DOM
  document.addEventListener("DOMContentLoaded", function () {
   
  
    // ========== deleteActivity... ==========
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
           const activityId = parseInt(imageParent.dataset.activityId);
    repository.deleteActivity(activityId);

      });
    });
    // ========== deleteActivity. ==========
  
    // ========== displayActivities... ==========
    const contenedorActividades = document.getElementById("Actividades");

  function displayActivities() {  
    const listaInicial = repository.getAllActivities();
    console.log(listaInicial, contenedorActividades);
  
    listaInicial.forEach((activity) => {
      const activityContainer = document.createElement("div");
      activityContainer.className = "box tres actividad";
  
      const titleElement = document.createElement("h3");
        titleElement.textContent = activity.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = activity.description;

        const imgElement = document.createElement("img");
        imgElement.src = activity.imgUrl;
        imgElement.alt = "Imagen no encontrada";

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "borrar";
      deleteButton.addEventListener("click", (evento) => {
        evento.target.parentNode.remove();
      });
  
      activityContainer.innerHTML = `
          <h3>${activity.title}</h3>
          <p>${activity.description}</p>
          <img src="${activity.imgUrl}" alt="Imagen no encontrada"/>
         
          `;
          
      activityContainer.appendChild(deleteButton);
      // Appendear al nuevo <div> los elementos creados anteriormente
      contenedorActividades.appendChild(activityContainer);
    });}
  
    displayActivities()
    // ========== displayActivities. ==========
  
    // ========== receivedDataFrom... ==========
    const form = document.getElementById("actividadesForm");
  
   let receivedDataForm = (event) => {
      event.preventDefault();
  
      const nombreActividadform = document.getElementById("nombreActividadform").value;
      const descripcionform = document.getElementById("Descripcionform").value;
      const linkImagenform = document.getElementById("linkImagenform").value;
  
      if (nombreActividadform === "" || descripcionform === "" || linkImagenform === "") {
        alert("Formulario incompleto, por favor terminar de completarlo");
        return;
      } else {
        repository.createActivity({
          id: repository.activities.length + 1,
          title: nombreActividadform,
          description: descripcionform,
          imgUrl: linkImagenform,
        });
        form.reset();
        const contenedorActividades = document.getElementById("Actividades");
        contenedorActividades.innerHTML = "";
        displayActivities()
      }
    }
  
    form.addEventListener("submit", receivedDataForm);
    // ========== receivedDataFrom. ==========
  });