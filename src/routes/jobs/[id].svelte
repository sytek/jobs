<script context="module">
	export async function preload(page, session) {
        const { id } = page.params; // Grab page object and access params to save in 'id'
        const res = await this.fetch(`jobs/${id}.json`);  // fetching the data

        if (res.status === 200){
            const job = await res.json();
        
            return { job };
        }
        if (res.status === 404){
            const {error} = await res.json();
            this.error(404, error);
        }


        
	}
</script>

<script>
  export let job;
</script>

<div class="job">
    <h2>{ job.title }</h2>
    <p class="price">Salary of ${ job.salary } / year.</p>
    <p class="details">{ job.details }</p>
  </div>