// Función para obtener la lista de modelos
export async function fetchModels() {
	try {
	  const response = await fetch('http://localhost:3000/api/models/'); 
	  if (!response.ok) {
		throw new Error(`Error fetching models: ${response.statusText}`);
	  }
	  return await response.json();
	} catch (error) {
	  console.error('Error fetching models:', error);
	  throw error;
	}
  }
  
  // Función para obtener detalles de un modelo específico
  export async function fetchModelDetails(id) {
	try {
	  const response = await fetch(`http://localhost:3000/api/models/${id}`); 
	  if (!response.ok) {
		throw new Error(`Error fetching model details: ${response.statusText}`);
	  }
	  return await response.json();
	} catch (error) {
	  console.error('Error fetching model details:', error);
	  throw error;
	}
  }
  