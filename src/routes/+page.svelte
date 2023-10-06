<script>
	import { onMount } from "svelte";
	import Target from "./Components/Target.svelte";
	
	let data = [];

	onMount(async () => {
		data = await fetch("http://localhost:3000/api/cars/").then((x) => x.json())
	})
</script>

<main>	
	<div class="list">
		{#each data as x}
			<Target value={x}/>
		{/each}
	</div>
</main>

<style>
	.list{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
	}

	@media (min-width: 640px) {	}
</style>