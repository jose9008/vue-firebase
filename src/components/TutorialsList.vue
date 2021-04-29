<template>
  <div class="list row">
    <div class="col-md-6">
      <h4 style="text-align: center">Tutorials List</h4> 
         <table class="table table-striped table-bordered">
       <thead>
           <tr>
             <th scope="col">Name</th>
             <th scope="col">Author</th>
             <th scope="col">Url</th>
           </tr>
       </thead>    
        <tbody>
           <tr :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)">
             <th scope="col">{{ tutorial.name }}</th>
             <th scope="col">{{ tutorial.autor }}</th>
             <th scope="col">{{ tutorial.url }}</th>
           </tr>
        </tbody>   
      </table>


      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button>
    </div>
    <div class="col-md-6" style="text-align: center">
      <div v-if="currentTutorial">
        <tutorial-details
          :tutorial="currentTutorial"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import TutorialDetails from "./Tutorial";

export default {
  name: "tutorials-list",
  components: { TutorialDetails },
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1
    };
  },
  methods: {
    onDataChange(items) {
      let _tutorials = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();

        _tutorials.push({
          key: key,
          name: data.name,
          autor: data.author,
          url: data.url,
        });
      });

      this.tutorials = _tutorials;
    },

    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {    
    TutorialDataService.getAll().on("value", this.onDataChange);
  },
  beforeDestroy() {
    TutorialDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style>
.list {
 
  margin: auto;
}
</style>
