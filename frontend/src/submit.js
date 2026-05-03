// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('pipeline', JSON.stringify({ nodes, edges }));

            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Pipeline Analysis:\n\n- Number of Nodes: ${data.num_nodes}\n- Number of Edges: ${data.num_edges}\n- Is a DAG? ${data.is_dag ? 'Yes' : 'No'}`);
            } else {
                alert('Error parsing pipeline on the backend.');
            }
        } catch (error) {
            console.error('Error submitting pipeline:', error);
            alert('Failed to connect to the backend server. Is it running?');
        }
    };

    return (
        <button 
            type="button"
            onClick={handleSubmit}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/50 transition-all transform hover:scale-105 active:scale-95"
        >
            Submit Pipeline
        </button>
    );
}
