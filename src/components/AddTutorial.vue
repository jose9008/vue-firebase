<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.name"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="author">Author</label>
        <input
          class="form-control"
          id="autor"
          required
          v-model="tutorial.author"
          name="autor"
        />
      </div>

       <div class="form-group">
        <label for="url">URL</label>
        <input
          class="form-control"
          id="url"
          required
          v-model="tutorial.url"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        name: "",
        author: "",
        url: ""
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        name: this.tutorial.name,
        author: this.tutorial.author,
        url: this.tutorial.url
      };

      TutorialDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        name: "",
        author: "",
        url: ""
      };
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
