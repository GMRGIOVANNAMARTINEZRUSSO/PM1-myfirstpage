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


    getAllActivities(){
        return this.activities;
    }
    createActivity(id, title, description, imgUrl) {
        const activity = new Activity(id, title, description, imgUrl);
        this.activities.push(activity);
    }
    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }

}
const repository = new Repository();

const activity1 = new Activity (
     1, 
     "ir al gimnasio", 
     "es importante hacer actividad fisica para mantenerte fuerte", 
     "http//img"
     )

const activity2 = new Activity (
        2, 
        "leer un libro", 
        "es importante la lectura para mantener el cerebro activo", 
        "http//img"
        )     

        
const activity3 = new Activity (
    3, 
    "comer sano", 
    "es importante mantener una dieta saludable y equilibrada", 
    "http//img"
    )

repository.createActivity(activity1);
repository.createActivity(activity2);
repository.createActivity(activity3);

console.log(repository.getAllActivities());

