<script>
    import { onMount } from "svelte";
    export let data;
    let details = {};
    let title = "Cargando..."

	onMount(async () => {
        data = data.data
		details = await fetch("http://localhost:3000/api/cars/"+data).then((x) => x.json())
        title = `Detalles ${details.brand} ${details.model} | RentaCar`;
	})
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
    {JSON.stringify(details)}
</main>