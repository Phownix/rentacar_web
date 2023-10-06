<script>
    import { onMount } from "svelte";
    export let data;
    let details = [];

	onMount(async () => {
        data = data.data
		details = await fetch("http://localhost:3000/api/cars/"+data).then((x) => x.json())
	})
</script>

<main>
    {JSON.stringify(details)}
</main>