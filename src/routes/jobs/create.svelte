<script>
import { get_slot_context } from "svelte/internal";
import {goto} from '@sapper/app';


  let title;
  let salary;
  let details;

  const handleSumbit = async () => {
      if (title && salary && details){
          const res = await fetch('jobs.json', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({title, salary, details})
          });
       const updatedJobs = await res.json(); // response from POST request, if you want it
       
       goto('jobs');
    }
  }

</script>

<style>
  h2{
    text-align: center;
  }
  form {
    max-width: 360px;
    margin: 40px auto;
    text-align: center;
  }
  input, textarea {
    display: block;
    width: 100%;
    padding: 10px;
    font-family: arial;
    margin: 10px auto;
    border: 1px solid #eee;
    border-radius: 8px;
  }
</style>

<h2>Add a New Job</h2>
<form on:submit|preventDefault={handleSumbit}>
    <input type="text" placeholder="job title" bind:value={title} required>
    <input type="number" placeholder="amount" bind:value={salary} required>
    <textarea placeholder="details" bind:value={details} required></textarea>
    <button class="btn">View Jobs</button>
</form>